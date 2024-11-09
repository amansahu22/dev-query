import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Question from "../../../database/question.model";
import { getUserById } from "../../../lib/actions/user.action";

const AskQuestion = async () => {
  const { userId } = await auth();

  if (!userId) redirect("/sign-in");

  const mongoUser = await getUserById({ userId });

  return (
    <div>
      <h1 className="h1-bold text-dark100_light900">Ask a Question</h1>
      <div className="mt-9">
        <Question mongoUserId={JSON.stringify(mongoUser._id)} />
      </div>
    </div>
  );
};

export default AskQuestion;
