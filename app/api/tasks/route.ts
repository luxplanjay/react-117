import { NextResponse } from "next/server";
import { api, ApiError } from "../api";

// GET localhost:3000/api/tasks
export async function GET() {
  try {
    const res = await api.get("/tasks");
    return NextResponse.json(res.data);
  } catch (err) {
    const error = err as ApiError;
    return NextResponse.json(
      {
        error: error.response?.data.error ?? error.message,
      },
      { status: error.status }
    );
  }
}

// POST localhost:3000/api/tasks
export async function POST() {}
