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
        <p className="leading-relaxed">
          「/embed」と打ち込むと出てきます。
          <br />
          そのURL貼り付け欄にコピーしたURLを貼り付けます。 やり方は
          <a
            target="_blank"
            className="underline text-blue-400"
            href="https://twitter.com/cohu_dev/status/1480430003485831171"
          >
            こちら
          </a>
          から確認できます。
        </p>
      }
    />
  );
};

export default React.memo(Embed);
