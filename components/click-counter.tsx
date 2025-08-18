"use client";

import { useState } from "react";

type Props = {
  initialCount?: number;
};

export default function ClickCounter({ initialCount = 0 }: Props) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Click counter</h2>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}
