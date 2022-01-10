import React, { useEffect, useState } from "react";
import Datetime from "./Datetime";
import { AiOutlineCalendar } from "react-icons/ai";
import CopyURL from "./Flow/CopyURL";
import OpenNotion from "./Flow/OpenNotion";
import Embed from "./Flow/Embed";

const Flow = () => {
  const [due, setDue] = useState(new Date());
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(
      `${process.env.NEXT_PUBLIC_URL}/down?t=${Math.floor(
        due.getTime() / 1000
      )}`
    );
  }, [due]);
  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-5 mx-auto flex flex-wrap">
        {/*  */}
        <div className="flex relative py-5 md:py-10 w-2/3 ml-5 md:ml-10">
          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-green-500 text-white relative z-10 title-font font-medium text-sm">
            1
          </div>
          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
            <div className="flex-shrink-0 w-24 h-24 bg-green-100 text-green-500 rounded-full inline-flex items-center justify-center">
              <AiOutlineCalendar className="w-12 h-12" />
            </div>
            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
              <h2 className="font-medium title-font text-gray-900 mb-4 text-xl">
                日付・日時を決めよう
              </h2>
              <Datetime due={due} setDue={setDue} />
            </div>
          </div>
        </div>
        <CopyURL url={url} />
        <OpenNotion />
        <Embed />
      </div>
    </section>
  );
};

export default React.memo(Flow);
