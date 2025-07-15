import Link from "next/link";
import Image from "next/image";

import Plus from "@/components/icons/Plus";
import BellLinear from "@/components/icons/BellLinear";
import MagniferLinear from "@/components/icons/MagniferLinear";
import ArrowDownLinear from "@/components/icons/ArrowDownLinear";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col items-start justify-start">
      <header className="bg-base-200 w-full">
        <div className="binsa-container flex w-full items-center justify-between py-4 pb-24">
          <div>
            <p className="text-2xl font-bold uppercase">Binsa</p>
          </div>
          <div className="flex items-center gap-0 rounded-full bg-white p-1">
            <Link
              className="btn hover:text-primary border-white bg-white shadow-none"
              href="/dashboard"
            >
              My Dashboard
            </Link>
            <Link className="btn btn-primary" href="/exams">
              All Exams
            </Link>
            <Link
              className="btn hover:text-primary border-white bg-white shadow-none"
              href="/my-exams"
            >
              My Exams
            </Link>
            <Link
              className="btn hover:text-primary border-white bg-white shadow-none"
              href="/history"
            >
              My History
            </Link>
          </div>
          <div className="flex items-center justify-start gap-1">
            <Link href="/create-exam" className="btn btn-lg btn-primary">
              <Plus className="text-lg" />
              <span className="text-base">Generate with AI</span>
            </Link>
            <button className="btn btn-lg btn-circle bg-white">
              <MagniferLinear className="text-lg" />
            </button>
            <button className="btn btn-lg btn-circle bg-white">
              <BellLinear className="text-lg" />
            </button>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-lg gap-0 bg-white p-1"
              >
                <div className="avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      className="w-10 rounded-full"
                      src={`/demo/img/sophia-perez.webp`}
                      alt="Batman"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center">
                  <ArrowDownLinear className="text-lg" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 mt-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>Item 1</a>
                </li>
                <li>
                  <a>Item 2</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full grow">{children}</main>
      <footer className="text-base-100 w-full bg-zinc-950">
        <div className="binsa-container flex w-full items-center justify-between py-4">
          <div>© 2023 Binsa</div>
          <div>All rights reserved</div>
        </div>
      </footer>
    </div>
  );
}
