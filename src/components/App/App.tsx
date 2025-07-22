import AppBar from "../AppBar";
import CatList from "../CatList";
import myCats from "../../cats.json";
import css from "./App.module.css";

const availableCats = myCats.filter((cat) => cat.available);

const takenCats = myCats.filter((cat) => !cat.available);

export default function App() {
  return (
    <div className={css.container}>
      <AppBar />
      <hr />
      <CatList items={availableCats} />
      <hr />
      <CatList items={takenCats} />
    </div>
  );
}
