import React from "react";
type Props = {
  n: number;
  digit: string;
};
const Card: React.FC<Props> = ({ n, digit }) => {
  return (
    <div className="bg-amber-100 w-24 h-24 p-2 rounded-lg">
      <p className="flex items-center justify-center text-6xl font-extrabold">
        {n}
      </p>
      <span className="block text-right font-semibold align-bottom">
        {digit}
      </span>
    </div>
  );
};

export default Card;
