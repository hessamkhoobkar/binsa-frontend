"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { signInSchema, SignInFormValues } from "@/lib/schemas";
import { useAuth } from "@/hooks/useAuth";
import { isAxiosError } from "axios";
import api from "@/lib/api";
import Link from "next/link";

export default function SignIn() {
  const router = useRouter();
  const { login } = useAuth();
  const [apiError, setApiError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = async (data: SignInFormValues) => {
    setApiError(null);
    try {
      const response = await api.post("/api/login", data);

      // Assuming the token is in response.data.access_token
      const { access_token } = response.data;
      if (access_token) {
        login(access_token);
        router.push("/dashboard"); // Redirect to a protected page
      } else {
        setApiError("Login failed: No token received.");
      }
    } catch (error: unknown) {
      let errorMessage = "An unexpected error occurred. Please try again.";

      if (isAxiosError(error) && error.response?.data?.message) {
        errorMessage = error.response.data.message;
      }

      setApiError(errorMessage);
    }
  };

  return (
    <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center">
      <div className="mb-8 flex w-full flex-col items-center justify-center gap-2 text-center">
        <h1 className="text-4xl font-bold">Welcome to Binsa</h1>
        <p className="text-lg">Log in to your account to access your exams.</p>
      </div>

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
            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

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
            "Log in"
          )}
        </button>
      </form>

      <div className="divider my-8">OR</div>
      <div className="flex w-full flex-col gap-4">
        <button className="btn btn-block h-12 border-black bg-black text-white">
          <svg
            aria-label="GitHub logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              fill="white"
              d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
            ></path>
          </svg>
          Login with GitHub
        </button>

        <button className="btn btn-block h-12 border-[#e5e5e5] bg-white text-black">
          <svg
            aria-label="Google logo"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </div>
      <div className="mt-8 flex flex-col gap-1">
        <p className="text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/sign-up" className="link">
            Sign up
          </Link>
        </p>
        <p className="text-center text-sm">
          Forgot your password?{" "}
          <Link href="/forgot-password" className="link">
            Reset password
          </Link>
        </p>
      </div>
    </div>
  );
}
