// app/api/auth/register/route.ts

import { NextRequest, NextResponse } from "next/server";
import { api, ApiError } from "../../api";
// Імпортуємо parse з пакету cookie та cookies з next/headers:
import { parse } from "cookie";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  // Парсимо body
  const body = await req.json();
  try {
    // Запит до бекенду
    const apiRes = await api.post("auth/register", body);

    // Отримуємо інстанс для роботи з cookies
    const cookieStore = await cookies();
    // Отримуємо значення set-cookie з хедерів
    const setCookie = apiRes.headers["set-cookie"];

    // Додаємо перевірку існування setCookie
    if (setCookie) {
      // Примусово робимо масив
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

      // Проходимось по масиву та парсимо кожне значення
      // щоб отримати результат у вигляді обʼєкту
      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);
        // Створюємо налаштування для cookies
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed["Max-Age"]),
        };

        // Методом cookieStore.set додаємо кукі до нашого запиту
        if (parsed.accessToken) {
          // cookieStore.set('імʼя ключа',  'значення токену',  додаткові налаштування)
          cookieStore.set("accessToken", parsed.accessToken, options);
        }
        if (parsed.refreshToken) {
          cookieStore.set("refreshToken", parsed.refreshToken, options);
        }
      }

      // Тільки якщо є setCookie повертаємо результат
      return NextResponse.json(apiRes.data);
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch (error) {
    return NextResponse.json(
      {
        error:
          (error as ApiError).response?.data?.error ??
          (error as ApiError).message,
      },
      { status: (error as ApiError).status }
    );
  }
}
