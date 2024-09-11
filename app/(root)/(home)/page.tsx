import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilters from "@/components/home/HomeFilters";
import EmptyState from "@/components/shared/EmptyState";
import Filter from "@/components/shared/Filter";
import LocalSearchBar from "@/components/shared/search/LocalSearchBar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

const questions = [
  {
    _id: "q1",
    title: "What is the difference between let and var in JavaScript?",
    tags: [
      { _id: "t1", name: "javascript" },
      { _id: "t2", name: "es6" },
    ],
    author: {
      _id: "a1",
      name: "Alice Smith",
      avatar: "https://dummyimage.com/100x100/000/fff&text=AS",
    },
    upvotes: 210,
    views: 3200,
    answers: [
      { _id: "ans1", content: "let has block scope, var has function scope" },
      { _id: "ans2", content: "var is hoisted, let is not" },
    ],
    createdAt: new Date("2024-09-11T10:12:00"),
  },
  {
    _id: "q2",
    title: "How to optimize a React application?",
    tags: [
      { _id: "t3", name: "react" },
      { _id: "t4", name: "performance" },
    ],
    author: {
      _id: "a2",
      name: "Bob Johnson",
      avatar: "https://dummyimage.com/100x100/000/fff&text=BJ",
    },
    upvotes: 3040,
    views: 4500,
    answers: [
      { _id: "ans3", content: "Use React.memo for pure components" },
      { _id: "ans4", content: "Lazy load components" },
    ],
    createdAt: new Date("2024-09-04T08:45:00"),
  },
  {
    _id: "q3",
    title: "What is the best way to learn Python for data science?",
    tags: [
      { _id: "t5", name: "python" },
      { _id: "t6", name: "data-science" },
    ],
    author: {
      _id: "a3",
      name: "Charlie Lee",
      avatar: "https://dummyimage.com/100x100/000/fff&text=CL",
    },
    upvotes: 182340,
    views: 2900,
    answers: [
      { _id: "ans5", content: "Start with NumPy and Pandas" },
      { _id: "ans6", content: "Learn through projects" },
    ],
    createdAt: new Date("2024-09-09T14:30:00"),
  },
  {
    _id: "q4",
    title: "How does CSS Grid differ from Flexbox?",
    tags: [
      { _id: "t7", name: "css" },
      { _id: "t8", name: "grid" },
    ],
    author: {
      _id: "a4",
      name: "Dana White",
      avatar: "https://dummyimage.com/100x100/000/fff&text=DW",
    },
    upvotes: 130,
    views: 2200,
    answers: [
      {
        _id: "ans7",
        content: "Grid is two-dimensional, Flexbox is one-dimensional",
      },
      {
        _id: "ans8",
        content: "Use Grid for complex layouts, Flexbox for alignment",
      },
    ],
    createdAt: new Date("2024-09-08T11:20:00"),
  },
  {
    _id: "q5",
    title: "How to set up a Node.js server with Express?",
    tags: [
      { _id: "t9", name: "nodejs" },
      { _id: "t10", name: "express" },
    ],
    author: {
      _id: "a5",
      name: "Evan Wright",
      avatar: "https://dummyimage.com/100x100/000/fff&text=EW",
    },
    upvotes: 275,
    views: 3800,
    answers: [
      { _id: "ans9", content: "Install Express via npm" },
      { _id: "ans10", content: "Set up basic routing" },
    ],
    createdAt: new Date("2024-09-07T09:55:00"),
  },
];

const Home = () => {
  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient min-h-[46px] px-4 py-3 !text-light-900 ">
            Ask a Question
          </Button>
        </Link>
      </div>

      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchBar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search for questions"
          additionalClasses="flex-1"
        />

        <Filter
          filters={HomePageFilters}
          additionalClasses="min-h-[56px] sm:min-w-[170px]"
          containerClasses="hidden max-md:flex"
        />
      </div>

      <HomeFilters />

      <div className="mt-10 flex w-full flex-col gap-6">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <EmptyState
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀 Ask a Question and kickstart the
        discussion. our query could be the next big thing others learn from. Get
        involved! 💡"
            link="/ask-questions"
            linkText="Ask a Question"
          />
        )}
      </div>
    </>
  );
};

export default Home;
