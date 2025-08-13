import { SortOrder } from "../../types/task";

interface SortFilterProps {
  order: SortOrder;
  onSort: (newSortOrder: SortOrder) => void;
}

export default function SortFilter({ order, onSort }: SortFilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSort(event.target.value as SortOrder);
  };

  return (
    <select value={order} onChange={handleChange}>
      <option value="desc">Completed first</option>
      <option value="asc">Completed last</option>
    </select>
  );
}
