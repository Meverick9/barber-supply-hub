import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  // MVP stub: persist to DB later
  console.log("add-tool", body);
  return NextResponse.json({ ok: true });
}
