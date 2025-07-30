/**
 * - Запустити інтервал при монтуванні
 * - Розібрати чому запускається два інтервала (Strict Mode)
 * - Очистити інтервал при розмонтуванні компонента
 */

import { useEffect, useState } from "react";

// mount  setInterval > unmount clearInterval > mount setInterval

export default function Timer() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    console.log("useEffect", id);

    return () => {
      console.log("Cleanup", id);
      clearInterval(id);
    };
  }, []);

  return <p>{time.toLocaleTimeString()}</p>;
}
