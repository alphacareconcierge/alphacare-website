import { NextResponse } from "next/server";

const requiredFields = ["name", "email", "relationship", "preferredContactMethod", "message"];

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const missingField = requiredFields.find((field) => {
    const value = payload[field];
    return typeof value !== "string" || value.trim().length === 0;
  });

  if (missingField) {
    return NextResponse.json({ error: "Missing required field" }, { status: 400 });
  }

  if (process.env.CONTACT_WEBHOOK_URL) {
    const response = await fetch(process.env.CONTACT_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...payload,
        source: "alphacareconcierge.com"
      })
    });

    if (!response.ok) {
      return NextResponse.json({ error: "Unable to submit inquiry" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}
