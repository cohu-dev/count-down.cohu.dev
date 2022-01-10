import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { registerLocale } from "react-datepicker";
import ja from "date-fns/locale/ja";
registerLocale("ja", ja);

type Props = {
  due: Date;
  setDue: React.Dispatch<React.SetStateAction<Date>>;
};
const Datetime: React.FC<Props> = ({ due, setDue }) => {
  return (
    <DatePicker
      selected={due}
      onChange={(date: Date) => setDue(date)}
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={15}
      timeCaption="時間"
      dateFormat="MMMM d, yyyy h:mm aa"
      locale="ja"
    />
  );
};

export default React.memo(Datetime);
