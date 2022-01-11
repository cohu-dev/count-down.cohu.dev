import React, { useState } from "react";
import useInterval from "use-interval";
import Card from "./Card";
type Props = { t: Date };

const Countdown: React.VFC<Props> = ({ t }) => {
  const now = Date.now();
  const [time, setTime] = useState<number>(0);
  useInterval(() => {
    setTime(() => t.getTime() - now);
  }, 1000);
  if (time < 0)
    return (
      <div className="h-20 mx-auto flex items-center justify-center text-xl">
        このカウントダウンは既に終了しています
      </div>
    );
  return (
    <>
      <p className="text-center mx-auto font-semibold mt-2">デモ</p>
      <div className="p-2 mx-auto flex items-center justify-center">
        <div className="grid grid-cols-4 gap-2">
          <Card n={Math.floor(time / (1000 * 60 * 60 * 24))} digit="Days" />
          <Card n={new Date(time).getUTCHours()} digit="Hours" />
          <Card n={new Date(time).getMinutes()} digit="Minutes" />
          <Card n={new Date(time).getSeconds()} digit="Seconds" />
        </div>
      </div>
    </>
  );
};

export default React.memo(Countdown);
