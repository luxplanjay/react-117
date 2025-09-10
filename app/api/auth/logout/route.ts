// app/api/auth/logout/route.ts

import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { api } from "../../api";

export async function POST() {
  // Передаємо поточні cookie до API
  const cookieStore = await cookies();
  await api.post("auth/logout", null, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  // Очищаємо токени після запиту
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");

  return NextResponse.json({ message: "Logged out successfully" });
}
