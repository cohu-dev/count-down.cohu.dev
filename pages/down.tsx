import { useRouter } from "next/router";
import React, { useState } from "react";
import useInterval from "use-interval";
type CardProps = {
  n: number;
  digit: string;
};
const Card: React.FC<CardProps> = ({ n, digit }) => {
  return (
    <p className="rounded-md bg-amber-100 w-24 h-24 flex items-center justify-center text-6xl font-extrabold">
      {n}
      <span className="text-base align-bottom">{digit}</span>
    </p>
  );
};

const cd = () => {
  const router = useRouter();
  const { t } = router.query;
  if (!t) return <></>;
  const now = new Date().getTime();
  const [time, setTime] = useState(0);
  useInterval(() => {
    setTime(() => Number(t) - now);
  }, 1000);
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
        <Card n={Math.floor(time / (1000 * 60 * 60 * 24))} digit="日" />
        <Card n={new Date(time).getHours()} digit="時間" />
        <Card n={new Date(time).getMinutes()} digit="分" />
        <Card n={new Date(time).getSeconds()} digit="秒" />
      </div>
    </div>
  );
};

export default cd;
