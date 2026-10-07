"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Send } from "lucide-react";
import { contactEmail } from "@/lib/site";

const SUBJECTS = [
  "General enquiry",
  "Family Law",
  "Property / Conveyancing",
  "Business & Commercial",
  "Immigration",
  "Legal Aid",
  "Book a consultation",
];

const field =
  "w-full border border-ink/15 bg-transparent px-4 py-3.5 text-[0.95rem] text-ink transition-colors placeholder:text-stone focus:border-forest focus:outline-none";

const label =
  "mb-2 block text-[0.7rem] font-bold tracking-[0.2em] text-ink/60 uppercase";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: SUBJECTS[0],
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const body = [
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Subject: ${form.subject}`,
      "",
      form.message,
    ].join("\n");

    const url = `mailto:${contactEmail}?subject=${encodeURIComponent(
      `[Jay Law] ${form.subject} — ${form.name}`
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = url;
    setSent(true);
  };

  if (sent) {
    return (
      <div
        className="anim-rise border border-forest/20 bg-forest/[0.04] p-10 text-center"
        role="status"
      >
        <CheckCircle2 className="mx-auto text-forest" size={40} />
        <h3 className="mt-5 font-serif text-2xl text-ink">Thank you.</h3>
        <p className="mt-3 text-warmgrey">
          Your email client should now be open with your enquiry. We reply
          within one working day.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm font-semibold text-forest underline-offset-4 hover:underline"
        >
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate={false}>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>
            Name
          </label>
          <input
            id="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={field}
            autoComplete="name"
          />
        </div>
        <div>
          <label htmlFor="email" className={label}>
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={field}
            autoComplete="email"
          />
        </div>
      </div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={label}>
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className={field}
            autoComplete="tel"
          />
        </div>
        <div>
          <label htmlFor="subject" className={label}>
            Subject
          </label>
          <select
            id="subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            className={field}
          >
            {SUBJECTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className={label}>
          How can we help?
        </label>
        <textarea
          id="message"
          required
          rows={6}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className={field}
        />
      </div>
      <p className="text-[0.82rem] leading-relaxed text-stone">
        Please tell us briefly about your situation — you don&apos;t need to
        include confidential details at this stage.
      </p>
      <button type="submit" className="btn btn-primary w-full sm:w-auto">
        Send Enquiry
        <Send size={17} />
      </button>
    </form>
  );
}
