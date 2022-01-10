import React, { useEffect, useState } from "react";
import CopyURL from "./CopyURL";
import OpenNotion from "./OpenNotion";
import Embed from "./Embed";
import DateTimePick from "./DateTimePick";
import Countdown from "../Countdown";

const Flow = () => {
  const after = new Date();
  after.setHours(after.getHours() + 1);
  const [due, setDue] = useState(after);
  const [url, setUrl] = useState("");
  useEffect(() => {
    setUrl(
      `${process.env.NEXT_PUBLIC_URL}/watch?t=${Math.floor(
        due.getTime() / 1000
      )}`
    );
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
