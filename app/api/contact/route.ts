import { NextResponse } from "next/server";
import { Resend } from "resend";

const requiredFields = ["name", "email", "message"];

function getString(payload: Record<string, unknown>, field: string) {
  const value = payload[field];
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatRow(label: string, value: string) {
  return `
    <tr>
      <th align="left" style="padding: 12px 16px; border-bottom: 1px solid #E3DBCF; color: #0C1D33; font-family: Arial, sans-serif; font-size: 14px; vertical-align: top; width: 190px;">
        ${escapeHtml(label)}
      </th>
      <td style="padding: 12px 16px; border-bottom: 1px solid #E3DBCF; color: #2C353F; font-family: Arial, sans-serif; font-size: 14px; line-height: 1.6; vertical-align: top;">
        ${escapeHtml(value).replace(/\n/g, "<br />")}
      </td>
    </tr>`;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  const missingField = requiredFields.find((field) => {
    return getString(payload, field).length === 0;
  });
  const preferredMethod =
    getString(payload, "preferredMethod") || getString(payload, "preferredContactMethod");

  if (missingField || !preferredMethod) {
    return NextResponse.json({ error: "Missing required field" }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json({ error: "Email service is not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const name = getString(payload, "name");
  const email = getString(payload, "email");
  const phone = getString(payload, "phone") || "Not provided";
  const message = getString(payload, "message");

  const html = `
    <div style="background: #FAF7F2; padding: 32px;">
      <div style="max-width: 680px; margin: 0 auto; background: #ffffff; border: 1px solid #E3DBCF;">
        <div style="padding: 24px 28px; border-bottom: 2px solid #BA8338;">
          <p style="margin: 0 0 8px; color: #BA8338; font-family: Arial, sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase;">
            AlphaCare Concierge
          </p>
          <h1 style="margin: 0; color: #0C1D33; font-family: Georgia, serif; font-size: 28px; font-weight: 400; line-height: 1.25;">
            New Website Inquiry
          </h1>
        </div>
        <table role="presentation" cellspacing="0" cellpadding="0" style="border-collapse: collapse; width: 100%;">
          <tbody>
            ${formatRow("Name", name)}
            ${formatRow("Email", email)}
            ${formatRow("Phone", phone)}
            ${formatRow("Preferred contact method", preferredMethod)}
            ${formatRow("Message", message)}
          </tbody>
        </table>
      </div>
    </div>`;

  const { error } = await resend.emails.send({
    to: "hello@alphacareconcierge.com",
    from: "AlphaCare Website <onboarding@resend.dev>",
    replyTo: email,
    subject: `New Inquiry from ${name} | AlphaCare Concierge`,
    html
  });

  if (error) {
    return NextResponse.json({ error: "Unable to submit inquiry" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
