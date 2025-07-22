"use client";

export default function EmailVerificationSuccessful() {
  return (
    <div className="mx-auto flex h-full w-full max-w-md flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">Email Verified!</h1>
      <p className="mb-6 text-lg">
        Your email has been successfully verified. You can now sign in to your
        account.
      </p>
      <a href="/sign-in" className="btn btn-primary">
        Sign in
      </a>
    </div>
  );
}
