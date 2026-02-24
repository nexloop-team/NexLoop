import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name: string;
  email: string;
  business: string;
  message: string;
}

export async function POST(req: NextRequest) {
  try {
    const body: ContactPayload = await req.json();

    const { name, email, business, message } = body;

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields: name, email, message" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
    }

    // In production, integrate with your email provider (Resend, SendGrid, etc.)
    // Example: await resend.emails.send({ from, to, subject, html })
    console.log("📬 New OrbitWin Lead:", {
      timestamp: new Date().toISOString(),
      name,
      email,
      business: business || "Not specified",
      message,
    });

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! We'll be in touch within 24 hours.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ status: "OrbitWin Contact API is live." });
}
