import { useState } from "react";
import ClickCounter from "./ClickCounter";
import CountDisplay from "./CountDisplay";
import ToggleExample from "./ToggleExample";
import TagWidget from "./TagWidget";
import Dates from "./Dates";

export default function App() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <>
      <CountDisplay count={clicks} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} />
      <hr />
      <ToggleExample />
      <hr />
      <TagWidget />
      <hr />
      <Dates />
    </>
  );
}
