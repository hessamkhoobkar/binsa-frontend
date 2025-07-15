type ExamDifficulty = "easy" | "medium" | "hard";
type ExamType = "ai" | "manual";
type ExamStatus = "pending" | "approved" | "rejected" | "deleted" | "archived";
type ExamScoreMethod = "total_correct" | "weighted" | "time_based";

interface Question {
  id: number;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

export type Exam = {
  id: number;
  createdAt: string;
  updatedAt: string;
  name: string;
  description: string;
  questions_count: number;
  estimated_time: number;
  difficulty: ExamDifficulty;
  type: ExamType;
  category: string;
  status: ExamStatus;
  passing_score?: number;
  attempts_allowed?: number;
  questions?: Question[];
  score_method: ExamScoreMethod;
  color: string;
};

// Color Palate
// oklch(88.5% 0.062 18.334)
// oklch(90.1% 0.076 70.697)
// oklch(92.4% 0.12 95.746)
// oklch(94.5% 0.129 101.54)
// oklch(93.8% 0.127 124.321)
// oklch(92.5% 0.084 155.995)
// oklch(90.5% 0.093 164.15)
// oklch(91% 0.096 180.426)
// oklch(91.7% 0.08 205.041)
// oklch(90.1% 0.058 230.902)
// oklch(88.2% 0.059 254.128)
// oklch(87% 0.065 274.039)
// oklch(89.4% 0.057 293.283)
// oklch(90.2% 0.063 306.703)
// oklch(90.3% 0.076 319.62)
// oklch(90.3% 0.076 319.62)
// oklch(89.2% 0.058 10.001)

const exams: Exam[] = [
  {
    id: 1,
    createdAt: "2025-06-15T10:00:00Z",
    updatedAt: "2025-06-16T11:30:00Z",
    name: "Grammar: Present Tenses Review",
    description:
      "A quick test on Present Simple, Present Continuous, and Present Perfect.",
    questions_count: 20,
    estimated_time: 15,
    difficulty: "easy",
    type: "ai",
    category: "Grammar",
    status: "approved",
    passing_score: 75,
    attempts_allowed: 3,
    score_method: "total_correct",
    color: "oklch(88.5% 0.062 18.334)",
  },
  {
    id: 2,
    createdAt: "2025-06-20T14:00:00Z",
    updatedAt: "2025-06-20T14:00:00Z",
    name: "IELTS Writing Task 2: Essay Structures",
    description:
      "Focuses on identifying and structuring different essay types for IELTS Writing Task 2.",
    questions_count: 15,
    estimated_time: 25,
    difficulty: "hard",
    type: "manual",
    category: "IELTS",
    status: "approved",
    passing_score: 80,
    score_method: "weighted",
    color: "oklch(90.1% 0.076 70.697)",
  },
  {
    id: 3,
    createdAt: "2025-06-22T09:00:00Z",
    updatedAt: "2025-06-25T16:45:00Z",
    name: "Vocabulary Boost: Top 1000 Words (Part 1)",
    description:
      "Covers the first 100 most common English words from the list.",
    questions_count: 50,
    estimated_time: 20,
    difficulty: "easy",
    type: "ai",
    category: "Vocabulary",
    status: "approved",
    attempts_allowed: 5,
    score_method: "time_based",
    color: "oklch(92.4% 0.12 95.746)",
  },
  {
    id: 4,
    createdAt: "2025-06-28T11:20:00Z",
    updatedAt: "2025-07-01T10:00:00Z",
    name: "Daily Sentences Used by Accountants",
    description: "An exam on common phrases and terminology in accounting.",
    questions_count: 30,
    estimated_time: 25,
    difficulty: "medium",
    type: "manual",
    category: "Business English",
    status: "pending",
    passing_score: 70,
    score_method: "total_correct",
    color: "oklch(94.5% 0.129 101.54)",
  },
  {
    id: 5,
    createdAt: "2025-07-01T18:00:00Z",
    updatedAt: "2025-07-02T12:00:00Z",
    name: "Grammar: Phrasal Verbs with 'Up' and 'Out'",
    description: "Tests understanding of common phrasal verbs.",
    questions_count: 25,
    estimated_time: 20,
    difficulty: "medium",
    type: "ai",
    category: "Grammar",
    status: "approved",
    score_method: "total_correct",
    color: "oklch(93.8% 0.127 124.321)",
  },
  {
    id: 6,
    createdAt: "2025-07-02T15:00:00Z",
    updatedAt: "2025-07-03T09:15:00Z",
    name: "IELTS Listening Practice Test 1",
    description:
      "A full-length listening practice section for IELTS candidates.",
    questions_count: 40,
    estimated_time: 30,
    difficulty: "medium",
    type: "manual",
    category: "IELTS",
    status: "approved",
    passing_score: 75,
    attempts_allowed: 1,
    score_method: "total_correct",
    color: "oklch(92.5% 0.084 155.995)",
  },
  {
    id: 7,
    createdAt: "2025-07-04T10:00:00Z",
    updatedAt: "2025-07-05T13:00:00Z",
    name: "Vocabulary: Advanced Adjectives",
    description:
      "An exam for C1/C2 level students focusing on sophisticated adjectives.",
    questions_count: 30,
    estimated_time: 30,
    difficulty: "hard",
    type: "ai",
    category: "Vocabulary",
    status: "approved",
    score_method: "weighted",
    color: "oklch(90.5% 0.093 164.15)",
  },
  {
    id: 8,
    createdAt: "2025-07-05T11:00:00Z",
    updatedAt: "2025-07-05T11:00:00Z",
    name: "English for Negotiations",
    description: "Key phrases and vocabulary for business negotiations.",
    questions_count: 20,
    estimated_time: 15,
    difficulty: "medium",
    type: "manual",
    category: "Business English",
    status: "pending",
    passing_score: 80,
    score_method: "total_correct",
    color: "oklch(91% 0.096 180.426)",
  },
  {
    id: 9,
    createdAt: "2025-07-06T14:30:00Z",
    updatedAt: "2025-07-07T09:00:00Z",
    name: "Grammar: All Conditional Types",
    description:
      "A comprehensive test on Zero, First, Second, Third, and Mixed conditionals.",
    questions_count: 40,
    estimated_time: 35,
    difficulty: "hard",
    type: "ai",
    category: "Grammar",
    status: "approved",
    score_method: "time_based",
    color: "oklch(91.7% 0.08 205.041)",
  },
  {
    id: 10,
    createdAt: "2025-07-07T16:00:00Z",
    updatedAt: "2025-07-07T16:00:00Z",
    name: "IELTS Speaking Part 2: Cue Cards",
    description:
      "Practice with common topics presented on IELTS Speaking Part 2 cue cards.",
    questions_count: 10,
    estimated_time: 20,
    difficulty: "medium",
    type: "manual",
    category: "IELTS",
    status: "approved",
    attempts_allowed: 10,
    score_method: "total_correct",
    color: "oklch(90.1% 0.058 230.902)",
  },
  {
    id: 11,
    createdAt: "2025-07-08T08:00:00Z",
    updatedAt: "2025-07-08T10:20:00Z",
    name: "Vocabulary Boost: Top 1000 Words (Part 2)",
    description:
      "Covers words 101-200 from the most common English words list.",
    questions_count: 50,
    estimated_time: 20,
    difficulty: "easy",
    type: "ai",
    category: "Vocabulary",
    status: "approved",
    score_method: "total_correct",
    color: "oklch(88.2% 0.059 254.128)",
  },
  {
    id: 12,
    createdAt: "2025-07-09T13:00:00Z",
    updatedAt: "2025-07-10T17:00:00Z",
    name: "Business Email Etiquette",
    description:
      "Tests knowledge of professional email writing, including tone, structure, and common phrases.",
    questions_count: 25,
    estimated_time: 20,
    difficulty: "medium",
    type: "manual",
    category: "Business English",
    status: "archived",
    score_method: "total_correct",
    color: "oklch(87% 0.065 274.039)",
  },
  {
    id: 13,
    createdAt: "2025-07-10T11:55:00Z",
    updatedAt: "2025-07-11T12:00:00Z",
    name: "Grammar: Prepositions of Time",
    description:
      "Focuses on the correct usage of 'in', 'on', 'at', 'for', and 'since'.",
    questions_count: 30,
    estimated_time: 15,
    difficulty: "easy",
    type: "ai",
    category: "Grammar",
    status: "rejected",
    score_method: "total_correct",
    color: "oklch(89.4% 0.057 293.283)",
  },
  {
    id: 14,
    createdAt: "2025-07-11T09:00:00Z",
    updatedAt: "2025-07-11T09:00:00Z",
    name: "IELTS Writing Task 1: Describing Maps",
    description:
      "Vocabulary and sentence structures for describing changes in maps over time.",
    questions_count: 15,
    estimated_time: 20,
    difficulty: "medium",
    type: "ai",
    category: "IELTS",
    status: "approved",
    passing_score: 70,
    score_method: "weighted",
    color: "oklch(90.2% 0.063 306.703)",
  },
  {
    id: 15,
    createdAt: "2025-07-12T10:10:00Z",
    updatedAt: "2025-07-12T10:10:00Z",
    name: "Vocabulary: Idioms About Money",
    description:
      "Test your knowledge of common English idioms related to finance and money.",
    questions_count: 20,
    estimated_time: 10,
    difficulty: "medium",
    type: "ai",
    category: "Vocabulary",
    status: "pending",
    score_method: "time_based",
    color: "oklch(90.3% 0.076 319.62)",
  },
  {
    id: 16,
    createdAt: "2025-07-13T14:00:00Z",
    updatedAt: "2025-07-14T11:00:00Z",
    name: "English for Customer Service",
    description:
      "Focuses on polite and effective language for customer support roles.",
    questions_count: 30,
    estimated_time: 25,
    difficulty: "easy",
    type: "manual",
    category: "Business English",
    status: "approved",
    passing_score: 85,
    attempts_allowed: 2,
    score_method: "total_correct",
    color: "oklch(90.3% 0.076 319.62)",
  },
  {
    id: 17,
    createdAt: "2025-07-14T09:30:00Z",
    updatedAt: "2025-07-14T15:00:00Z",
    name: "Grammar: Passive Voice",
    description:
      "A comprehensive test on forming and using the passive voice in various tenses.",
    questions_count: 25,
    estimated_time: 20,
    difficulty: "medium",
    type: "ai",
    category: "Grammar",
    status: "approved",
    score_method: "total_correct",
    color: "oklch(89.2% 0.058 10.001)",
  },
  {
    id: 18,
    createdAt: "2025-07-15T12:00:00Z",
    updatedAt: "2025-07-15T12:00:00Z",
    name: "Vocabulary Boost: Top 1000 Words (Part 3)",
    description:
      "Covers words 201-300 from the most common English words list.",
    questions_count: 50,
    estimated_time: 20,
    difficulty: "medium",
    type: "ai",
    category: "Vocabulary",
    status: "approved",
    score_method: "time_based",
    color: "oklch(92.5% 0.084 155.995)",
  },
  {
    id: 19,
    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2024-01-15T12:30:00Z",
    name: "Archaic English Vocabulary",
    description:
      "A test on vocabulary from old English texts. Not for modern use.",
    questions_count: 50,
    estimated_time: 40,
    difficulty: "hard",
    type: "manual",
    category: "Vocabulary",
    status: "archived",
    score_method: "weighted",
    color: "oklch(92.5% 0.084 155.995)",
  },
  {
    id: 20,
    createdAt: "2025-05-10T10:00:00Z",
    updatedAt: "2025-05-12T11:00:00Z",
    name: "IELTS Reading: True, False, Not Given",
    description:
      "Practice distinguishing between True, False, and Not Given statements in IELTS Reading.",
    questions_count: 20,
    estimated_time: 30,
    difficulty: "hard",
    type: "ai",
    category: "IELTS",
    status: "approved",
    passing_score: 70,
    score_method: "total_correct",
    color: "oklch(89.2% 0.058 10.001)",
  },
  {
    id: 21,
    createdAt: "2025-06-01T11:00:00Z",
    updatedAt: "2025-06-02T15:00:00Z",
    name: "Old Exam Format - DO NOT USE",
    description: "This exam is deprecated and should be ignored.",
    questions_count: 10,
    estimated_time: 10,
    difficulty: "easy",
    type: "manual",
    category: "General",
    status: "deleted",
    score_method: "total_correct",
    color: "oklch(90.1% 0.058 230.902)",
  },
  {
    id: 22,
    createdAt: "2025-07-15T10:00:00Z",
    updatedAt: "2025-07-15T10:00:00Z",
    name: "English for Marketing Professionals",
    description:
      "Key vocabulary and phrases for marketing, advertising, and social media.",
    questions_count: 35,
    estimated_time: 30,
    difficulty: "medium",
    type: "manual",
    category: "Business English",
    status: "pending",
    passing_score: 75,
    score_method: "weighted",
    color: "oklch(88.2% 0.059 254.128)",
  },
  {
    id: 23,
    createdAt: "2025-04-18T16:00:00Z",
    updatedAt: "2025-04-20T10:00:00Z",
    name: "Grammar: Articles (a, an, the)",
    description:
      "A comprehensive test on the use of definite and indefinite articles.",
    questions_count: 40,
    estimated_time: 20,
    difficulty: "easy",
    type: "ai",
    category: "Grammar",
    status: "approved",
    score_method: "total_correct",
    color: "oklch(93.8% 0.127 124.321)",
  },
  {
    id: 24,
    createdAt: "2025-07-14T18:00:00Z",
    updatedAt: "2025-07-14T18:00:00Z",
    name: "Vocabulary: Commonly Confused Words",
    description:
      "Tests understanding of words like affect/effect, their/there/they're, and its/it's.",
    questions_count: 30,
    estimated_time: 15,
    difficulty: "medium",
    type: "ai",
    category: "Vocabulary",
    status: "approved",
    attempts_allowed: 3,
    score_method: "total_correct",
    color: "oklch(90.1% 0.076 70.697)",
  },
];

export default exams;
