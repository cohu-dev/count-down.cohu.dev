import React, { useEffect, useState } from "react";
import CopyURL from "./CopyURL";
import OpenNotion from "./OpenNotion";
import Embed from "./Embed";
import DateTimePick from "./DateTimePick";
import Countdown from "../Countdown";
const afterOneHour = new Date();
afterOneHour.setHours(afterOneHour.getHours() + 1);

const Flow = () => {
  const [due, setDue] = useState<Date>(afterOneHour);
  const [url, setUrl] = useState<string>("");
  useEffect(() => {
    setUrl(`${process.env.NEXT_PUBLIC_URL}/watch?t=${due.getTime()}`);
  }, [due]);
  return (
    <section className="text-gray-600 body-font">
      <Countdown t={due} />
      <div className="md:px-5 py-2 mx-auto flex flex-wrap">
        <DateTimePick due={due} setDue={setDue} />
        <CopyURL url={url} />
        <OpenNotion />
        <Embed />
      </div>
    </section>
  );
};

export default React.memo(Flow);
