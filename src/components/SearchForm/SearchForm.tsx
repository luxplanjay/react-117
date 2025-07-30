import css from "./SearchForm.module.css";

interface SearchFormProps {
  onSearch: (newTopic: string) => Promise<void>;
}

export default function SearchForm({ onSearch }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    onSearch(topic);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <input className={css.input} type="text" name="topic" />
      <button type="submit">Search</button>
    </form>
  );
}
