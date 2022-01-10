import React from "react";
type CardProps = {
  n: number;
  digit: string;
};
const Card: React.FC<CardProps> = ({ n, digit }) => {
  return (
    <p className="rounded-md bg-orange-200 w-24 h-24 flex items-center justify-center text-6xl font-extrabold">
      {n}
      <span className="text-base align-bottom">{digit}</span>
    </p>
  );
};

export default Card;
