import exams from "@/lib/mocks/exams";

export default function ExamPage({ params }: { params: { examId: string } }) {
  const examId = params.examId;

  const exam = exams.find((exam) => exam.id === Number(examId));

  if (!exam) {
    return <div>Exam not found</div>;
  }

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="binsa-container grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-4">
        <div
          className="col-span-3 flex-col items-start justify-start rounded-2xl p-4"
          style={{ backgroundColor: exam.color }}
        >
          <div className="badge mb-2 rounded-lg border-transparent bg-white/70">
            <span>{exam.type === "ai" ? "AI Generated" : "Manual"}</span>
          </div>
          <h2 className="card-title grow items-start justify-start text-2xl">
            {exam.name}
          </h2>
          <p className="text-base">{exam.description}</p>
        </div>
        <div className="col-span-1">
          <div className="card card-border bg-base-100 w-full">
            <div className="card-body p-4">
              <div className="card-actions mb-4 justify-end">
                <button className="btn btn-xl btn-neutral btn-block rounded-xl">
                  Take Exam
                </button>
              </div>
              <h2 className="card-title">Card Title</h2>
              <p>
                A card component has a figure, a body part, and inside body
                there are title and actions parts
              </p>
            </div>
          </div>
        </div>

        <pre>{JSON.stringify(exam, null, 2)}</pre>
      </div>
    </div>
  );
}
