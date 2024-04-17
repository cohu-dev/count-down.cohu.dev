import React, { useEffect, useState } from "react";
import CopyURL from "./CopyURL";
import OpenNotion from "./OpenNotion";
import Embed from "./Embed";
import DateTimePick from "./DateTimePick";
import Countdown from "../Countdown";
import Share from "./Share";
import CopyEmbedHtml from "./CopyEmbedHtml";
const afterTwoHour = new Date();
afterTwoHour.setHours(afterTwoHour.getHours() + 2);

const Flow: React.VFC = () => {
  const [due, setDue] = useState<Date>(afterTwoHour);
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    setUrl(`${process.env.NEXT_PUBLIC_URL}/watch?t=${due.getTime()}`);
  }, [due]);
  return (
    <section className="text-gray-600 body-font">
      <Countdown t={due} />
      <div className="md:px-5 py-2 w-full xl:w-1/2 mx-auto flex flex-col">
        <DateTimePick due={due} setDue={setDue} />
        <CopyURL url={url} />
        <OpenNotion />
        <Embed />
        <Share />
        <CopyEmbedHtml url={url} />
      </div>
    </section>
  );
};

export default React.memo(Flow);
