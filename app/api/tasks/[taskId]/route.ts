import { NextResponse, type NextRequest } from "next/server";
import { api, ApiError } from "../../api";

// GET localhost:3000/api/tasks/:taskId
export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ taskId: string }> }
) {
  console.log("3 - Next Server GET");
  try {
    const { taskId } = await params;
    const res = await api.get(`/tasks/${taskId}`);
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

// DELETE localhost:3000/api/tasks/:taskId
// export async function DELETE() {}
