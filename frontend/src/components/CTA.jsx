import { useState } from "react";

export default function CTA() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.target);

    const res = await fetch("https://formspree.io/f/xbdorlgv", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (res.ok) {
      setStatus("success");
      e.target.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 bg-[#0B0F14] text-white">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-semibold mb-6">
          Book a free automation audit
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Honeypot (spam protection) */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
          />

          <input
            name="name"
            required
            placeholder="Your name or nickname"
            className="w-full px-4 py-3 bg-[#111826] border border-white/10 rounded"
          />

          <input
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full px-4 py-3 bg-[#111826] border border-white/10 rounded"
          />

          <textarea
            name="message"
            required
            placeholder="What’s breaking, slow, or manual in your workflow?"
            rows={4}
            className="w-full px-4 py-3 bg-[#111826] border border-white/10 rounded"
          />

          <button
            type="submit"
            disabled={status === "loading"}
            className="w-full py-3 bg-[#E3B341] text-black font-medium rounded"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>

          {status === "success" && (
            <p className="text-green-400 text-sm mt-2">
              ✅ Message sent. We’ll get back to you shortly.
            </p>
          )}

          {status === "error" && (
            <p className="text-red-400 text-sm mt-2">
              ❌ Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
