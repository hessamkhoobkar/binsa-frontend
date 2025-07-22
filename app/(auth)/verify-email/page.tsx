"use client";

export default function PleaseVerifyEmail() {
  return (
    <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Please Verify Your Email</h1>
      <p className="mb-6 text-lg">
        We have sent a verification link to your email address. Please check
        your inbox and follow the instructions to verify your account.
      </p>
      <p className="text-sm text-gray-500">
        Didn&apos;t receive the email? Check your spam folder or{" "}
        <a href="#" className="link">
          resend verification email
        </a>
        .
      </p>
    </div>
  );
}
