import { Cat } from "../../types/cat";
import css from "./CatInfo.module.css";

interface CatInfoProps {
  cat: Cat;
}

export default function CatInfo({ cat: { name, age, image } }: CatInfoProps) {
  return (
    <div className={css.container}>
      <img src={image} alt={name} width="80" height="80" />
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
}
