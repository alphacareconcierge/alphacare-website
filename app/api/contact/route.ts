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

function formatResendError(error: unknown) {
  if (!error) {
    return "Unknown Resend error";
  }

  if (error instanceof Error) {
    return error.message;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return String(error);
  }
}

const acknowledgementHtml = `
  <div style="display: none; max-height: 0; overflow: hidden; opacity: 0; color: transparent; line-height: 1px;">
    Your message reached us directly. Take a quiet breath—we are here beside you.
  </div>
  <div style="margin: 0; padding: 40px 20px; background: #F4EFEA;">
    <div style="max-width: 540px; margin: 40px auto; padding: 48px 40px; background: #FAF7F2; border: 1px solid #E3DBCF; box-shadow: 0 4px 20px rgba(12, 29, 51, 0.04);">
      <div style="text-align: center;">
        <div style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 18px; font-weight: 400; letter-spacing: 0.2em; line-height: 1.2; color: #0C1D33; text-transform: uppercase;">
          ALPHACARE
        </div>
        <div style="margin-top: 4px; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 10px; font-weight: 400; letter-spacing: 0.14em; line-height: 1.4; color: #BA8338; text-transform: uppercase;">
          CONCIERGE CARE MANAGEMENT
        </div>
        <div style="width: 48px; border-top: 1px solid #BA8338; margin: 24px auto;"></div>
      </div>

      <div style="font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 14.5px; font-weight: 300; line-height: 1.8; color: #383431;">
        <p style="margin: 0 0 22px;">Hello,</p>

        <p style="margin: 0 0 22px;">Reaching out during a care transition takes emotional energy, especially when you are carrying the weight of keeping everyone safe and informed.</p>

        <p style="margin: 0 0 22px;">Take a quiet breath. Your message has reached our private office directly.</p>

        <p style="margin: 0 0 22px;">We treat every family's circumstances with the utmost discretion and clinical attentiveness. We are reviewing what you shared and will connect with you via your preferred method shortly so you don't have to carry the next steps alone.</p>

        <p style="margin: 0 0 24px;">Warmly,</p>

        <div style="font-family: 'Cormorant Garamond', Georgia, serif; font-size: 16px; font-weight: 500; line-height: 1.3; color: #0C1D33;">
          AlphaCare Concierge
        </div>
        <div style="margin-top: 4px; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 400; letter-spacing: 0.08em; line-height: 1.4; color: #BA8338; text-transform: uppercase;">
          Private Concierge Care Management
        </div>
        <div style="margin-top: 4px; font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; font-size: 11px; font-weight: 400; line-height: 1.4; color: #706E6B;">
          Boston &amp; Across Massachusetts
        </div>
      </div>
    </div>
  </div>`;

async function sendClientAcknowledgement(resend: Resend, email: string) {
  const acknowledgementConfig = {
    to: [email],
    subject: "We have your note | AlphaCare Concierge",
    html: acknowledgementHtml
  };
  const preferredFrom = "AlphaCare Concierge <inquiries@alphacareconcierge.com>";
  const fallbackFrom = "AlphaCare Concierge <onboarding@resend.dev>";

  try {
    const { error } = await resend.emails.send({
      ...acknowledgementConfig,
      from: preferredFrom
    });

    if (!error) {
      return;
    }

    console.error(`AlphaCare client acknowledgement failed from ${preferredFrom}: ${formatResendError(error)}`);
  } catch (error) {
    console.error(`AlphaCare client acknowledgement threw from ${preferredFrom}: ${formatResendError(error)}`);
  }

  try {
    const { error } = await resend.emails.send({
      ...acknowledgementConfig,
      from: fallbackFrom
    });

    if (error) {
      console.error(`AlphaCare client acknowledgement fallback failed from ${fallbackFrom}: ${formatResendError(error)}`);
    }
  } catch (error) {
    console.error(`AlphaCare client acknowledgement fallback threw from ${fallbackFrom}: ${formatResendError(error)}`);
  }
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
    getString(payload, "preferredMethod") || getString(payload, "preferredContactMethod") || "Either";

  if (missingField) {
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

  const { data, error } = await resend.emails.send({
    to: ["hello@alphacareconcierge.com"],
    from: "AlphaCare Inquiries <onboarding@resend.dev>",
    replyTo: email,
    subject: `New Inquiry from ${name} | AlphaCare Concierge`,
    html
  });

  if (error) {
    console.error(`AlphaCare admin inquiry failed: ${formatResendError(error)}`);
    return NextResponse.json({ error: "Unable to submit inquiry" }, { status: 502 });
  }

  await sendClientAcknowledgement(resend, email);

  return NextResponse.json({ success: true, data });
}
