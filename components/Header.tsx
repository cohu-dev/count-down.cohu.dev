import React from "react";
import { BsClock, BsGithub, BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-green-100 to-blue-100 w-full py-3 px-5 rounded-md">
      <a
        href={`${process.env.NEXT_PUBLIC_URL}`}
        className="font-bold text-xl md:text-2xl flex items-center justify-center"
      >
        <BsClock className="mr-4" /> Notionカウントダウン用
        <br className="block md:hidden" />
        ウィジェットメーカー
      </a>
      <p className="flex">
        <a
          className="flex items-center"
          href="https://twitter.com/cohu_dev"
          target="_blank"
        >
          <BsTwitter className="h-6 w-6 text-blue-400 mr-4" />
        </a>
        <a href="https://github.com/cota-eng/notion-count-down" target="_blank">
          <BsGithub className="h-6 w-6 text-black-400" />
        </a>
      </p>
    </header>
  );
};

export default Header;
