import Head from "next/head";

import Flow from "../components/Flow";
import Header from "../components/Header";
export default function Home() {
  return (
    <div className="flex flex-col justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Flow />
    </div>
  );
}
