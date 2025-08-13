import css from "./SearchBox.module.css";

interface SearchBoxProps {
  text: string;
  onSearch: (newSearchQuery: string) => void;
}

export default function SearchBox({ text, onSearch }: SearchBoxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

  return (
    <input
      type="text"
      className={css.searchInput}
      defaultValue={text}
      onChange={handleChange}
    />
  );
}
