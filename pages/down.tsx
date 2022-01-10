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
    setTime(() => Number(t) - now);
  }, 1000);
  if (time < 0)
    return (
      <div className="h-screen flex items-center justify-center text-2xl">
        このカウントダウンは既に終了しています
      </div>
    );
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        <Card n={Math.floor(time / (1000 * 60 * 60 * 24))} digit="日" />
        <Card n={new Date(time).getHours()} digit="時間" />
        <Card n={new Date(time).getMinutes()} digit="分" />
        <Card n={new Date(time).getSeconds()} digit="秒" />
      </div>
    </div>
  );
};

export default down;
