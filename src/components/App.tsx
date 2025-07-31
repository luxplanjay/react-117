// import axios from "axios";
import { useState, useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
// import Timer from "./Timer";
import Sidebar from "./Sidebar";

export default function App() {
  // const [character, setCharacter] = useState(null);
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await axios.get(`https://swapi.info/api/people/${count}`);
  //     setCharacter(res.data);
  //   }

  //   fetchData();
  // }, [count]);

  // const [isTimerVisible, setIsTimerVisible] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useLocalStorage(
    "sidebar-state",
    false
  );

  const openSidebar = () => setIsSidebarOpen(true);
  const closeSidebar = () => setIsSidebarOpen(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={openSidebar}>Open sidebar</button>
      {isSidebarOpen && <Sidebar onClose={closeSidebar} />}

      <button onClick={() => setIsOpen(true)}>Open second sidebar</button>
      {isOpen && <Sidebar onClose={() => setIsOpen(false)} />}

      {/* <button onClick={() => setCount(count + 1)}>Count {count}</button>
      {character && <pre>{JSON.stringify(character, null, 2)}</pre>} */}
      {/* <button onClick={() => setIsTimerVisible(!isTimerVisible)}>Toggle</button>
      {isTimerVisible && <Timer />} */}
    </>
  );
}

// const [isSidebarOpen, setIsSidebarOpen] = useState(() => {
//   const savedState = localStorage.getItem("sidebar-state");
//   if (savedState !== null) {
//     return JSON.parse(savedState);
//   }
//   return false;
// });

// const openSidebar = () => setIsSidebarOpen(true);
// const closeSidebar = () => setIsSidebarOpen(false);

// useEffect(() => {
//   localStorage.setItem("sidebar-state", JSON.stringify(isSidebarOpen));
// }, [isSidebarOpen]);
