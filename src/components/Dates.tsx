import { useState } from "react";

export default function Dates() {
  const [dates, setDates] = useState<number[]>([]);

  const addDate = () => {
    setDates([...dates, Date.now()]);
  };

  const deleteDate = (dateToDelete: number) => {
    setDates(dates.filter((date) => date !== dateToDelete));
  };

  return (
    <div>
      <button onClick={addDate}>Add new date</button>
      {dates.length > 0 && (
        <ul>
          {dates.map((date) => (
            <li key={date}>
              {date} <button onClick={() => deleteDate(date)}>-</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
