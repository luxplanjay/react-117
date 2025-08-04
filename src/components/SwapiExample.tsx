import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

interface Character {
  name: string;
  height: string;
  mass: string;
}

const fetchCharacter = async (id: number) => {
  const res = await axios.get<Character>(`https://swapi.info/api/people/${id}`);
  return res.data;
};

export default function SwapiExample() {
  const [count, setCount] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["character", count],
    queryFn: () => fetchCharacter(count),
    enabled: count > 0,
  });

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>
        Fetch next character with ID {count}
      </button>
      {isLoading && <div>Loading data...</div>}
      {isError && <div>Error...</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
