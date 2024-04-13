import React from "react";
import { BsClock, BsGithub, BsTwitterX } from "react-icons/bs";
const Header = () => {
  return (
    <header className="flex justify-between items-center bg-gradient-to-r from-green-100 to-blue-100 w-full py-3 px-5 rounded-md">
      <a
        href={`${process.env.NEXT_PUBLIC_URL}`}
        className="font-bold text-sm md:text-2xl flex items-center justify-center"
      >
        <BsClock className="mr-4" /> Notion
        <br className="md:hidden" />
        カウントダウンメーカー
      </a>
      <p className="flex">
        <a
          className="flex items-center"
          href="https://twitter.com/cohu_dev"
          target="_blank"
        >
          <BsTwitterX className="h-6 w-6 text-gray-600 mr-4" />
        </a>
        <a href="https://github.com/cota-eng/notion-count-down" target="_blank">
          <BsGithub className="h-6 w-6 text-gray-800" />
        </a>
        <span className="ml-4 hidden md:inline">update: 2024.04.13</span>
      </p>
    </header>
  );
};

export default Header;
