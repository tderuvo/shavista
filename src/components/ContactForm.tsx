"use client";

import { useId, useState, type FormEvent } from "react";
import { Arrow } from "./Button";

type ContactFormProps = {
  variant?: "contact" | "professional";
  tone?: "light" | "dark";
};

const interests = [
  "Professional starter kits",
  "Shavista training",
  "Recurring product supply",
  "Becoming a Shavista partner",
];

/**
 * UI-only form. No backend is connected: submissions are validated
 * in the browser and then discarded. Wire `handleSubmit` to an API
 * route or form service before launch.
 */
export default function ContactForm({ variant = "contact", tone = "light" }: ContactFormProps) {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);
  const dark = tone === "dark";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Intentionally not sent anywhere until a backend is configured.
    setSubmitted(true);
  }

  const field = `w-full border-0 border-b bg-transparent px-0 pb-3 pt-2 text-base outline-none transition-colors duration-500 ${
    dark
      ? "border-ivory/25 text-ivory focus:border-bronze"
      : "border-charcoal/25 text-charcoal focus:border-bronze-deep"
  }`;
  const labelCls = `label block mb-1 text-[0.62rem] ${dark ? "text-ivory/60" : "text-ink-muted"}`;
  const muted = dark ? "text-ivory/60" : "text-ink-muted";

  return (
    <div>
      <div
        role="note"
        className={`mb-12 flex gap-4 border-l-2 border-bronze py-1 pl-5 text-sm leading-relaxed ${muted}`}
      >
        <p>
          <span className={`label mb-1 block text-[0.62rem] ${dark ? "text-bronze" : "text-bronze-deep"}`}>
            Form preview · Not yet active
          </span>
          Submissions are not active until a backend is configured. Information entered here will
          not be sent or stored.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-x-10 gap-y-10 sm:grid-cols-2">
        <div>
          <label htmlFor={`${id}-name`} className={labelCls}>
            Name
          </label>
          <input id={`${id}-name`} name="name" autoComplete="name" required className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-business`} className={labelCls}>
            Barbershop / Business
          </label>
          <input id={`${id}-business`} name="business" autoComplete="organization" className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelCls}>
            Email
          </label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" required className={field} />
        </div>
        <div>
          <label htmlFor={`${id}-city`} className={labelCls}>
            City / State
          </label>
          <input id={`${id}-city`} name="location" autoComplete="address-level2" className={field} />
        </div>

        {variant === "professional" && (
          <fieldset className="sm:col-span-2">
            <legend className={labelCls}>Areas of interest</legend>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {interests.map((interest) => (
                <label key={interest} className="group flex cursor-pointer items-center gap-4 text-sm">
                  <input
                    type="checkbox"
                    name="interests"
                    value={interest}
                    className={`h-4 w-4 shrink-0 cursor-pointer appearance-none border transition-colors checked:border-bronze checked:bg-bronze ${
                      dark ? "border-ivory/40" : "border-charcoal/40"
                    }`}
                  />
                  <span className={dark ? "text-ivory/85" : "text-charcoal/85"}>{interest}</span>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div className="sm:col-span-2">
          <label htmlFor={`${id}-message`} className={labelCls}>
            Message
          </label>
          <textarea id={`${id}-message`} name="message" rows={4} className={`${field} resize-none`} />
        </div>

        <label className="flex cursor-pointer items-start gap-4 text-sm leading-relaxed sm:col-span-2">
          <input
            type="checkbox"
            name="licensed"
            required
            className={`mt-1 h-4 w-4 shrink-0 cursor-pointer appearance-none border transition-colors checked:border-bronze checked:bg-bronze ${
              dark ? "border-ivory/40" : "border-charcoal/40"
            }`}
          />
          <span className={dark ? "text-ivory/85" : "text-charcoal/85"}>
            I am a licensed barber or barbershop professional.
          </span>
        </label>

        <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center">
          <button
            type="submit"
            className={`label group inline-flex items-center justify-center border px-8 py-5 transition-colors duration-500 ${
              dark
                ? "border-ivory bg-ivory text-charcoal hover:bg-transparent hover:text-ivory"
                : "border-charcoal bg-charcoal text-ivory hover:bg-transparent hover:text-charcoal"
            }`}
          >
            {variant === "professional" ? "Request professional information" : "Send message"}
            <Arrow />
          </button>
          <p aria-live="polite" className={`text-sm leading-relaxed ${muted}`}>
            {submitted &&
              "Thank you. This form is a preview — nothing was sent. Submissions will open once our professional enquiry system is live."}
          </p>
        </div>
      </form>
    </div>
  );
}
