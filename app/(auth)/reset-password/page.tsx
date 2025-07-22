"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter, useSearchParams } from "next/navigation";
import api from "@/lib/api";
import { resetPasswordSchema, ResetPasswordFormValues } from "@/lib/schemas";

export default function ResetPassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [apiError, setApiError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const token = searchParams.get("token");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: ResetPasswordFormValues) => {
    setApiError(null);
    setSuccess(false);
    try {
      await api.post("/api/reset-password", { token, password: data.password });
      setSuccess(true);
      setTimeout(() => router.push("/sign-in"), 2000);
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
      <h1 className="mb-4 text-4xl font-bold">Reset Password</h1>
      <p className="mb-6 text-lg">Enter your new password below.</p>
      {success ? (
        <div className="alert alert-success mb-4">
          Your password has been reset! Redirecting to sign in...
        </div>
      ) : (
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full flex-col gap-4"
        >
          <div className="w-full">
            <label
              className={`input flex h-12 w-full items-center gap-2 ${errors.password ? "input-error" : ""}`}
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
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                placeholder="New Password"
                {...register("password")}
                className="grow"
              />
            </label>
            {errors.password && (
              <p className="mt-1 text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>
          <div className="w-full">
            <label
              className={`input flex h-12 w-full items-center gap-2 ${errors.confirmPassword ? "input-error" : ""}`}
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
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="grow"
              />
            </label>
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-500">
                {errors.confirmPassword.message}
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
              "Reset password"
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
