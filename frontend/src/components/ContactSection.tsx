"use client";
import { useState } from "react";
import MagneticButton from "./MagneticButton";

export default function ContactSection() {
  const [status, setStatus] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("Sending...");

    const form = e.currentTarget;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const message = (form[2] as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Message sent!");
        form.reset();
      } else {
        setStatus("Failed to send.");
      }
    } catch (err) {
      setStatus("Error sending message.");
      console.error(err);
    }
  }

  return (
    <section id="contact" className="max-w-xl mx-auto px-6 py-24 text-center">
      <h2 className="text-3xl font-bold text-primary mb-6">Get in Touch</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="p-3 rounded bg-transparent border border-primary/30 focus:border-primary outline-none"
          placeholder="Your Name"
          required
        />
        <input
          className="p-3 rounded bg-transparent border border-primary/30 focus:border-primary outline-none"
          type="email"
          placeholder="Your Email"
          required
        />
        <textarea
          className="p-3 rounded bg-transparent border border-primary/30 focus:border-primary outline-none"
          rows={5}
          placeholder="Your Message"
          required
        />
        <MagneticButton>
          {status || "Send Message"}
        </MagneticButton>
      </form>
    </section>
  );
}
