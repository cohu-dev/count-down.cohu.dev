import React from "react";
import { BsTwitter } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex justify-between items-end bg-gradient-to-r from-green-100 to-blue-100 w-full py-5 px-5 rounded-md">
      <p className="font-bold text-2xl">Notionカウントダウンメーカー</p>
      <a href="https://twitter.com/cohu_dev" target="_blank">
        <BsTwitter className="h-6 w-6 text-blue-400" />
      </a>
    </header>
  );
};

export default Header;
