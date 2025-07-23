import { useState } from "react";

interface Tags {
  html: number;
  js: number;
  react: number;
}

export default function TagWidget() {
  const [tags, setTags] = useState<Tags>({
    html: 0,
    js: 0,
    react: 0,
  });

  const updateTag = (tagName: keyof Tags) => {
    setTags({
      ...tags,
      [tagName]: tags[tagName] + 1,
    });
  };

  return (
    <div>
      <button onClick={() => updateTag("html")}>html {tags.html}</button>
      <button onClick={() => updateTag("js")}>js {tags.js}</button>
      <button onClick={() => updateTag("react")}>react {tags.react}</button>
    </div>
  );
}
