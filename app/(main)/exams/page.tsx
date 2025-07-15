import exams from "@/lib/mocks/exams";

import ExamCard from "@/components/features/exam-list/ExamCard";

export default function Exams() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="bg-base-200 w-full">
        <div className="binsa-container flex w-full items-center justify-start py-4">
          <div className="flex items-center justify-start gap-2">
            <label className="input shrink-0 grow">
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
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input type="search" className="grow" placeholder="Search" />
              <kbd className="kbd kbd-sm">⌘</kbd>
              <kbd className="kbd kbd-sm">K</kbd>
            </label>

            <select defaultValue="Difficulty" className="select">
              <option disabled={true}>Difficulty</option>
              <option>Easy</option>
              <option>Medium</option>
              <option>Hard</option>
            </select>

            <select defaultValue="Type" className="select">
              <option disabled={true}>Type</option>
              <option>AI Generated</option>
              <option>Manual</option>
            </select>

            <select defaultValue="Category" className="select">
              <option disabled={true}>Category</option>
              <option>Grammar</option>
              <option>IELTS</option>
              <option>Vocabulary</option>
              <option>Business English</option>
            </select>

            <select defaultValue="Status" className="select">
              <option disabled={true}>Status</option>
              <option>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
              <option>Deleted</option>
              <option>Archived</option>
            </select>

            <select defaultValue="Score Method" className="select">
              <option disabled={true}>Score Method</option>
              <option>Total Correct</option>
              <option>Weighted</option>
              <option>Time Based</option>
            </select>
          </div>
          <div className="ms-auto flex items-center justify-start gap-2">
            <select defaultValue="Sort: By default" className="select">
              <option disabled={true}>Sort: By default</option>
              <option>Sort: Most Recent</option>
              <option>Sort: Least Recent</option>
              <option>Sort: Most Difficult</option>
              <option>Sort: least Difficult</option>
              <option>Sort: Most Popular</option>
              <option>Sort: Least Popular</option>
            </select>
          </div>
        </div>
      </div>
      <div className="binsa-container grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4 2xl:grid-cols-5">
        {exams.map((exam) => (
          <ExamCard key={exam.id} exam={exam} />
        ))}
      </div>
    </div>
  );
}
