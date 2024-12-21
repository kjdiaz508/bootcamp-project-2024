import { NextResponse } from "next/server";
import emailjs from "@emailjs/browser";
export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const serviceID = "service_y2prtbm";
    const templateID = "template_d5y020a";
    const publicKey = "RiVNKpiIXFkHIIB-X";

    const templateParams = {
      from_name: name,
      to_name: "Kevin",
      reply_to: email,
      message,
    };

    // Using EmailJS (client library can also work on server, but see docs)
    await emailjs.send(serviceID, templateID, templateParams, { publicKey });

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { error: "Could not send email" },
      { status: 500 },
    );
  }
}
