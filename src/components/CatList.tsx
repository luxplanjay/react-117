import CatInfo from "./CatInfo/CatInfo";
import { Cat } from "../types/cat";

interface CatListProps {
  items: Cat[];
}

export default function CatList({ items }: CatListProps) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <CatInfo cat={item} />
        </li>
      ))}
    </ul>
  );
}
