import React from "react";
import { IconType } from "react-icons";

type Props = {
  flowNumber: 1 | 2 | 3 | "?" | "+";
  Icon: IconType;
  heading: string;
  content: React.ReactNode;
};

const FlowCard: React.VFC<Props> = ({ flowNumber, Icon, heading, content }) => {
  return (
    <div className="flex relative py-5 px-2 ml-5 md:ml-10">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
        {flowNumber}
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-green-200 text-green-600 rounded-full inline-flex items-center justify-center">
          <Icon className="w-12 h-12" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-4 text-xl">
            {heading}
          </h2>
          {content}
        </div>
      </div>
    </div>
  );
};

export default FlowCard;
