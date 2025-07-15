import React from "react";
import Link from "next/link";

import { Exam } from "@/lib/mocks/exams";

export default function ExamCard({ exam }: { exam: Exam }) {
  return (
    <div className="card card-border bg-base-100 col-span-1">
      <div className="card-body p-2">
        <div
          className="flex aspect-square w-full flex-col items-start justify-start rounded-xl p-3"
          style={{ backgroundColor: exam.color }}
        >
          <div className="badge mb-2 rounded-lg border-transparent bg-white/70">
            <span>{exam.type === "ai" ? "AI Generated" : "Manual"}</span>
          </div>
          <h2 className="card-title grow items-start justify-start text-2xl">
            {exam.name}
          </h2>
          <div className="flex w-full items-center justify-between">
            <span>{exam.questions_count} Questions</span>
            <span>{exam.estimated_time} Minutes</span>
          </div>
        </div>
        <div className="card-actions justify-end">
          <Link
            href={`/exams/${exam.id}`}
            className="btn btn-neutral btn-block rounded-xl"
          >
            Take Exam
          </Link>
        </div>
      </div>
    </div>
  );
}
