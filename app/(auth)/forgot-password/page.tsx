"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "@/lib/api";
import { forgotPasswordSchema, ForgotPasswordFormValues } from "@/lib/schemas";

export default function ForgotPassword() {
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = async (data: ForgotPasswordFormValues) => {
    setApiError(null);
    setSuccess(false);
    try {
      await api.post("/api/request-password-reset", data);
      setSuccess(true);
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred. Please try again.";
      if (
        typeof error === "object" &&
        error !== null &&
        "response" in error &&
        typeof (error as { response?: { data?: { message?: string } } })
          .response?.data?.message === "string"
      ) {
        errorMessage = (error as { response: { data: { message: string } } })
          .response.data.message;
      }
      setApiError(errorMessage);
    }
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Forgot Password?</h1>
      <p className="mb-6 text-lg">
        Enter your email address and we&apos;ll send you a link to reset your
        password.
      </p>
      {success ? (
        <div className="alert alert-success mb-4">
          If an account with that email exists, a reset link has been sent.
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <div className="w-full">
            <label
              className={`input flex h-12 w-full items-center gap-2 ${errors.email ? "input-error" : ""}`}
            >
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                placeholder="mail@site.com"
                {...register("email")}
                className="grow"
              />
            </label>
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          {apiError && (
            <div className="alert alert-error text-sm">{apiError}</div>
          )}
          <button
            type="submit"
            className="btn btn-primary h-12"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="loading loading-spinner"></span>
            ) : (
              "Send reset link"
            )}
          </button>
        </form>
      )}
      <div className="mt-8 flex flex-col gap-1">
        <a href="/sign-in" className="link">
          Back to sign in
        </a>
      </div>
    </div>
  );
}
