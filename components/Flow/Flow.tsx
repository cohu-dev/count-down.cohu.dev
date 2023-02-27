import React, { useEffect, useState } from "react";
import CopyURL from "./CopyURL";
import OpenNotion from "./OpenNotion";
import Embed from "./Embed";
import DateTimePick from "./DateTimePick";
import Countdown from "../Countdown";
import Share from "./Share";
const afterTwoHour = new Date();
afterTwoHour.setHours(afterTwoHour.getHours() + 2);

const Flow: React.VFC = () => {
  const [due, setDue] = useState<Date>(afterTwoHour);
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    setUrl(`${process.env.NEXT_PUBLIC_URL}/watch/${due.getTime()}`);
  }, [due]);
  return (
    <section className="text-gray-600 body-font">
      <p className="text-center mx-auto text-md bg-yellow-200 block">
        現在Notionに本サイトのカウントダウンを貼り付けた際にトップページが表示されるバグがあります【対応予定】
      </p>
      <Countdown t={due} />
      <div className="md:px-5 py-2 w-full lg:w-1/2 mx-auto flex flex-wrap">
        <DateTimePick due={due} setDue={setDue} />
        <CopyURL url={url} />
        <OpenNotion />
        <Embed />
        <Share />
      </div>
    </section>
  );
};

export default React.memo(Flow);
