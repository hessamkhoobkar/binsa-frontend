import exams from "@/lib/mocks/exams";

import ExamCard from "@/components/features/exam-list/ExamCard";

export default function Exams() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="binsa-container grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
        {exams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </div>
  );
}
