import React from "react";
import { BsQuestion } from "react-icons/bs";

const Embed = () => {
  return (
    <div className="flex relative py-5 md:py-10 w-2/3 ml-5 md:ml-10">
      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
        <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
      </div>
      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
        ?
      </div>
      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
        <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
          <BsQuestion className="w-12 h-12" />
        </div>
        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
          <h2 className="font-medium title-font text-gray-900 mb-4 text-xl">
            埋め込みとは？
          </h2>
          <p className="leading-relaxed">
            「/embed」と打ち込むと出てきます。
            <br />
            そのURL貼り付け欄にコピーしたURLを貼り付けます。
          </p>
        </div>
      </div>
    </div>
  );
};

export default Embed;
