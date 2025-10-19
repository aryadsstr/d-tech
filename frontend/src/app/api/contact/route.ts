import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_SENDER || "arya@d-tech.dev",
      to: process.env.CONTACT_RECEIVER || "aryadisastra63@gmail.com",
      subject: `New Message from ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;">
          <h3>📩 New Contact Form Submission</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to send message" }), { status: 500 });
  }
}
