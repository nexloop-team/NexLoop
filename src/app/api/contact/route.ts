import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const dataDir = path.join(process.cwd(), "data");
    await fs.mkdir(dataDir, { recursive: true });

    const filePath = path.join(dataDir, "submissions.json");

    let submissions: unknown[] = [];
    try {
      const existing = await fs.readFile(filePath, "utf8");
      submissions = JSON.parse(existing || "[]");
    } catch (err) {
      submissions = [];
    }

    const entry = { ...body, createdAt: new Date().toISOString() };
    submissions.push(entry);

    await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf8");

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ ok: false, error: "Failed to save submission" }, { status: 500 });
  }
}
