import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import useInterval from "use-interval";
import Card from "../components/Card";
import Link from "next/link";

const watch: NextPage = () => {
  const router = useRouter();
  const { t } = router.query;
  if (!t) return <></>;
  const replacedT = t.toString().replace(/\//g, "");
  const now = Date.now();
  const [time, setTime] = useState(0);
  useInterval(() => {
    setTime(() => Number(replacedT) - now);
    if (isNaN(+replacedT)) router.push("/");
  }, 1000);
  if (time < 0)
    return (
      <div className="h-screen flex flex-col items-center justify-center text-2xl">
        <p>このカウントダウンは既に終了しています</p>
        <p>
          <Link href="/" className="text-blue-500 underline">
            トップへ戻る
          </Link>
        </p>
      </div>
    );
  return (
    <>
      <Head>
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_URL}/watch?t=${t}`}
        ></meta>
      </Head>
      <div className="h-screen flex items-center justify-center">
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

export default watch;
