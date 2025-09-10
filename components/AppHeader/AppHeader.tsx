"use client";

import Link from "next/link";
import css from "./AppHeader.module.css";
import { useAuthStore } from "@/lib/store/authStore";
import { logout } from "@/lib/clientApi";
import { useRouter } from "next/navigation";

export default function AppHeader() {
  const router = useRouter();

  // Отримуємо поточну сесію та юзера
  const { isAuth, user } = useAuthStore();
  // Отримуємо метод очищення глобального стану
  const clearIsAuthenticated = useAuthStore((state) => state.clearIsAuth);

  const handleLogout = async () => {
    // Викликаємо logout
    await logout();
    // Чистимо глобальний стан
    clearIsAuthenticated();
    // Виконуємо навігацію на сторінку авторизації
    router.push("/sign-in");
  };

  return (
    <header className={css.header}>
      <ul style={{ display: "flex", gap: 8 }}>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>

      {isAuth ? (
        <div>
          <p>{user?.userName}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <ul style={{ display: "flex", gap: 8 }}>
          <li>
            <Link href="/sign-in">Login</Link>
          </li>
          <li>
            <Link href="/sign-up">Register</Link>
          </li>
        </ul>
      )}
    </header>
  );
}
