import React from "react";
import { BsBox } from "react-icons/bs";
import FlowCard from "./FlowCard";

const OpenNotion: React.VFC = () => {
  return (
    <FlowCard
      flowNumber={3}
      Icon={BsBox}
      heading="URLをNotionに埋め込もう"
      content={
        <a
          className="inline-flex items-center text-center py-2 px-4 rounded  focus:outline-none bg-green-600 hover:bg-green-800 text-white font-bold "
          target="_blank"
          href="https://www.notion.so/"
        >
          <BsBox className="mr-2" />
          Notionを開く
        </a>
      }
    />
  );
};

export default React.memo(OpenNotion);
