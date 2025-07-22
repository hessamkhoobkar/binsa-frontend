"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signUpSchema, SignUpFormValues } from "@/lib/schemas";
import api from "@/lib/api";

export default function SignUp() {
  const router = useRouter();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data: SignUpFormValues) => {
    setApiError(null);
    try {
      await api.post("/api/register", data);
      router.push("/please-verify-email");
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
    <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center">
      <div className="mb-8 flex w-full flex-col items-center justify-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Create your account</h1>
        <p className="text-lg">Sign up to get started with Binsa.</p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-4"
      >
        {/* Name Input */}
        <div className="w-full">
          <label
            className={`input flex h-12 w-full items-center gap-2 ${errors.name ? "input-error" : ""}`}
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
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4"></path>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name")}
              className="grow"
            />
          </label>
          {errors.name && (
            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
        {/* Email Input */}
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
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>
        {/* Password Input */}
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
                <circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle>
              </g>
            </svg>
            <input
              type="password"
              placeholder="Password"
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
        {/* API Error Message */}
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
            "Sign up"
          )}
        </button>
      </form>

      <div className="mt-8 flex flex-col gap-1">
        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/sign-in" className="link">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
