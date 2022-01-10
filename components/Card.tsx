import React from "react";
type Props = {
  n: number;
  digit: string;
};
const Card: React.FC<Props> = ({ n, digit }) => {
  return (
    <div className="bg-orange-100 w-16 h-16 md:w-24 md:h-24 p-2 rounded-lg">
      <p className="flex items-center justify-center text-xl md:text-6xl font-extrabold">
        {n}
      </p>
      <span className="block text-right text-xs font-semibold align-bottom">
        {digit}
      </span>
    </div>
  );
};

export default React.memo(Card);
