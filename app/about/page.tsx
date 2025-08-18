import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  description: "About page descr",
};

export default function About() {
  return (
    <div>
      <h1>This is About Page</h1>
    </div>
  );
}
