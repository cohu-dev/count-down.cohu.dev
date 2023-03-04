import { NextPage } from "next";
import Head from "next/head";
import Flow from "../components/Flow/Flow";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta property="og:url" content={process.env.NEXT_PUBLIC_URL}></meta>
      </Head>
      <div className="flex flex-col justify-center">
        <Header />
        <Flow />
      </div>
    </>
  );
};

export default Home;
