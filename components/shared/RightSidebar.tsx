import Image from "next/image";
import Link from "next/link";
import React from "react";
import RenderTag from "./RenderTag";

const dummyData = [
  {
    _id: 1,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id.",
  },
  {
    _id: 2,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id.",
  },
  {
    _id: 3,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id.",
  },
  {
    _id: 4,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id.",
  },
  {
    _id: 5,
    title:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, id.",
  },
];

const dummyTags = [
  { _id: 1, name: "javascript", totalQuestions: 5 },
  { _id: 1, name: "react", totalQuestions: 4 },
  { _id: 1, name: "nextjs", totalQuestions: 5 },
  { _id: 1, name: "vuejs", totalQuestions: 2 },
  { _id: 1, name: "node", totalQuestions: 5 },
];

const RightSidebar = () => {
  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden max-sm:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-7">
          {dummyData.map((question) => (
            <Link
              key={question._id}
              href={`/questions/${question._id}`}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">
                {question.title}
              </p>
              <Image
                alt="chevron right"
                src="/assets/icons/chevron-right.svg"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {dummyTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
