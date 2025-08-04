import { toast } from "sonner";

interface SearchFormProps {
  onSubmit: (topic: string) => void;
}

export default function SearchForm({ onSubmit }: SearchFormProps) {
  const handleSubmit = (formData: FormData) => {
    const topic = formData.get("topic") as string;
    if (topic === "") {
      toast.error("Please enter search topic!");
      return;
    }
    onSubmit(topic);
  };

  return (
    <div>
      <form action={handleSubmit}>
        <input type="text" name="topic" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
