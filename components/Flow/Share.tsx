import React from "react";
import { AiOutlineShareAlt, AiOutlineTwitter } from "react-icons/ai";
import FlowCard from "./FlowCard";

const Share = () => {
  return (
    <FlowCard
      flowNumber={"+"}
      Icon={AiOutlineShareAlt}
      heading="共有しよう！"
      content={
        <p>
          良いなと思ったらTwitterなどで共有してくれると嬉しいです！
          <br />
          <a
            className="inline-flex bg-blue-500 p-2 mt-2 items-center rounded-md text-white font-semibold"
            target="_blank"
            href={`https://twitter.com/intent/tweet?&url=${process.env.NEXT_PUBLIC_URL}`}
          >
            <AiOutlineTwitter className="text-white w-6 h-6 mr-2" />
            Twitterで共有
          </a>
        </p>
      }
    />
  );
};

export default Share;
