import React from "react";
import { BsQuestion } from "react-icons/bs";
import FlowCard from "./FlowCard";

const Embed = () => {
  return (
    <FlowCard
      flowNumber={"?"}
      Icon={BsQuestion}
      heading="埋め込みとは？"
      content={
        <>
          <p className="leading-relaxed">
            「/embed」と打ち込むと出てきます。
            <br />
            そのURL貼り付け欄にコピーしたURLを貼り付けます。
          </p>
          <img
            className="w-80 mt-4"
            src={`${process.env.NEXT_PUBLIC_URL}/demo.gif`}
            alt="Notionに埋め込んだデモGIF画像"
          />
        </>
      }
    />
  );
};

export default React.memo(Embed);
