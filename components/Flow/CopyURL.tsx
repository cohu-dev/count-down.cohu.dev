import React from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import FlowCard from "./FlowCard";

const notify = () => toast.success("URLをコピーしました");

type Props = {
  url: string;
};

const CopyURL: React.VFC<Props> = ({ url }) => {
  return (
    <FlowCard
      flowNumber={2}
      Icon={AiOutlineCopy}
      heading="URLをコピーしよう！"
      content={
        <>
          <p className="border-2 mb-2 inline-block p-1 rounded-sm">{url}</p>
          <CopyToClipboard text={url}>
            <button
              className="flex items-center  text-center py-2 px-4 rounded  focus:outline-none bg-green-600 hover:bg-green-800 text-white font-bold "
              onClick={() => notify()}
            >
              <AiOutlineCopy className="mr-2 w-5 h-5" />
              URLをコピー
            </button>
          </CopyToClipboard>
          <Toaster />
        </>
      }
    />
  );
};

export default React.memo(CopyURL);
