"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useLangStore } from "@/stores/langStore";

export default function AppHeader() {
  const lang = useLangStore((state) => state.lang);
  const changeLang = useLangStore((state) => state.changeLang);

  return (
    <header className={css.header}>
      <ul className={css.nav}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/tasks">Tasks</Link>
        </li>
      </ul>
      <select value={lang} onChange={(e) => changeLang(e.target.value)}>
        <option value="en">EN</option>
        <option value="uk">UK</option>
        <option value="pl">PL</option>
      </select>
    </header>
  );
}
