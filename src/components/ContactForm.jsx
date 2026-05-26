"use client";

import { useState } from "react";

const inputClass =
  "w-full rounded-xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-500 outline-none ring-0 transition duration-200 focus:border-cyan-400/60 focus:bg-slate-900/80";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("loading");

    const formData = new FormData(event.target);

    const response = await fetch("https://formspree.io/f/your-form-id", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      setStatus("success");
      event.target.reset();
    } else {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/5 p-10 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-emerald-400">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="mt-4 font-semibold text-white">Message sent!</p>
        <p className="mt-2 text-sm text-slate-400">I will get back to you shortly.</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-xl border border-white/10 px-5 py-2 text-sm text-slate-300 transition hover:bg-white/10 hover:text-white"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          disabled={status === "loading"}
          className={inputClass}
        />
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          disabled={status === "loading"}
          className={inputClass}
        />
      </div>
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        disabled={status === "loading"}
        className={inputClass}
      />
      <textarea
        name="message"
        placeholder="Tell me about your project or opportunity..."
        rows={5}
        required
        disabled={status === "loading"}
        className={inputClass}
      />

      {status === "error" && (
        <p className="rounded-xl border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-400">
          Something went wrong. Please try again or email me directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </>
        ) : (
          <>
            Send Message
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
    </form>
  );
}
