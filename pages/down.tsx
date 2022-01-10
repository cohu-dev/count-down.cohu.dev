import { useRouter } from "next/router";
import React, { useState } from "react";
import useInterval from "use-interval";
import Card from "../components/Card";

const down = () => {
  const router = useRouter();
  const { t } = router.query;
  if (!t) return <></>;
  const now = new Date().getTime();
  const [time, setTime] = useState(0);
  useInterval(() => {
    setTime(() => Number(t) - Math.floor(now));
  }, 1000);
  if (time < 0)
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        {now}
        このカウントダウンは既に終了しています
      </div>
    );
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-4 gap-2">
        <Card n={Math.floor(time / (1000 * 60 * 60 * 24))} digit="Days" />
        <Card n={new Date(time).getUTCHours()} digit="Hours" />
        <Card n={new Date(time).getMinutes()} digit="Minutes" />
        <Card n={new Date(time).getSeconds()} digit="Seconds" />
      </div>
    </div>
  );
};

export default down;
