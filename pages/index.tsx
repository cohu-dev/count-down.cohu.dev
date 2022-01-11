import { NextPage } from "next";
import Flow from "../components/Flow/Flow";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col justify-center">
      <Header />
      <Flow />
    </div>
  );
};

export default Home;
