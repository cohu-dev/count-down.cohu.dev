import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import toast, { Toaster } from "react-hot-toast";
import FlowCard from "./FlowCard";
import { ImEmbed2 } from "react-icons/im";
const notify = () => toast.success("埋め込むHTMLをコピーしました");

type Props = {
  url: string;
};

const CopyURL: React.VFC<Props> = ({ url }) => {
  const embedHtml = `<iframe src="${url}" width="100%"/>`;
  return (
    <FlowCard
      flowNumber={"-"}
      Icon={ImEmbed2}
      heading="埋め込むHTMLをコピーしよう！"
      content={
        <>
          <p className="border-2 mb-2 inline-block p-1 rounded-sm">
            {embedHtml}
          </p>
          <CopyToClipboard text={embedHtml}>
            <button
              className="flex items-center text-center py-2 px-4 rounded  focus:outline-none bg-green-600 hover:bg-green-800 text-white font-bold "
              onClick={() => notify()}
            >
              <ImEmbed2 className="mr-2 w-5 h-5" />
              埋め込むHTMLをコピー
            </button>
          </CopyToClipboard>
          <Toaster />
        </>
      }
    />
  );
};

export default React.memo(CopyURL);
