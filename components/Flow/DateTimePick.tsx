import React from "react";
import { AiOutlineCalendar } from "react-icons/ai";
import Datetime from "../Datetime";
import FlowCard from "./FlowCard";
type Props = {
  due: Date;
  setDue: React.Dispatch<React.SetStateAction<Date>>;
};
const DateTimePick: React.VFC<Props> = ({ due, setDue }) => {
  return (
    <FlowCard
      flowNumber={1}
      Icon={AiOutlineCalendar}
      heading=" 予定の日時を選ぼう"
      content={<Datetime due={due} setDue={setDue} />}
    />
  );
};

export default DateTimePick;
