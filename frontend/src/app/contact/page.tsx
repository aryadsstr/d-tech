"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      setStatus("✅ Message sent!");
      form.reset();
    } else {
      setStatus("❌ Failed to send, try again later.");
    }
  }

  return (
    <section className="max-w-lg mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="p-3 rounded-lg bg-transparent border border-primary/40 focus:border-primary outline-none"
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          required
          className="p-3 rounded-lg bg-transparent border border-primary/40 focus:border-primary outline-none"
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your Message"
          required
          className="p-3 rounded-lg bg-transparent border border-primary/40 focus:border-primary outline-none"
        />
        <button
          type="submit"
          className="px-5 py-3 bg-primary text-black font-medium rounded-lg hover:opacity-90"
        >
          {status || "Send Message"}
        </button>
      </form>
    </section>
  );
}
