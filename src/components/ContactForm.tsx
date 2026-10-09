"use client";

import { useId, useState, useSyncExternalStore, type FormEvent } from "react";
import { Arrow } from "./Button";

type ContactFormProps = {
  variant?: "contact" | "professional";
  tone?: "light" | "dark";
};

const interests = [
  "Professional samples (when available)",
  "Shavista starter kit (when available)",
  "Shavista training",
  "Recurring product supply",
  "Becoming a Shavista partner",
];

/** CTAs link to these anchors; the matching interest is pre-ticked. */
const HASH_TO_INTEREST: Record<string, string> = {
  "#request-samples": interests[0],
  "#request-starter-kit": interests[1],
};

function subscribeToHash(onChange: () => void) {
  window.addEventListener("hashchange", onChange);
  // Re-read once after mount: client-side navigation can update the URL after first render.
  const t = window.setTimeout(onChange, 0);
  return () => {
    window.removeEventListener("hashchange", onChange);
    window.clearTimeout(t);
  };
}

/**
 * UI-only form. No backend is connected: submissions are validated
 * in the browser and then discarded. Wire `handleSubmit` to an API
 * route or form service before launch.
 */
export default function ContactForm({ variant = "contact", tone = "light" }: ContactFormProps) {
  const id = useId();
  const [submitted, setSubmitted] = useState(false);
  const [toggled, setToggled] = useState<Record<string, boolean>>({});
  const hash = useSyncExternalStore(subscribeToHash, () => window.location.hash, () => "");
  const preselected = HASH_TO_INTEREST[hash];
  const isChecked = (interest: string) => toggled[interest] ?? interest === preselected;
  const dark = tone === "dark";

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Intentionally not sent anywhere until a backend is configured.
    setSubmitted(true);
  }

  const field = `w-full border-0 border-b bg-transparent px-0 pb-3 pt-2 text-base outline-none transition-colors duration-500 ${
    dark
      ? "border-cream/30 text-cream focus:border-terracotta-light"
      : "border-espresso/25 text-espresso focus:border-terracotta-deep"
  }`;
  const labelCls = `block mb-1 text-sm font-medium ${dark ? "text-cream/75" : "text-muted"}`;
  const muted = dark ? "text-cream/75" : "text-muted";
  const box = `h-[1.1rem] w-[1.1rem] shrink-0 cursor-pointer appearance-none rounded-[4px] border transition-colors ${
    dark
      ? "border-cream/50 checked:border-terracotta-light checked:bg-terracotta-light"
      : "border-espresso/40 checked:border-terracotta-deep checked:bg-terracotta-deep"
  }`;
  const optionText = dark ? "text-cream/90" : "text-espresso";

  return (
    <div>
      <div
        role="note"
        className={`mb-12 flex gap-4 rounded-r-lg border-l-2 border-terracotta py-3 pl-5 pr-4 text-sm leading-relaxed ${
          dark ? "bg-cream/5" : "bg-sand/60"
        } ${muted}`}
      >
        <p>
          <span className={`label mb-1 block ${dark ? "text-terracotta-light" : "text-terracotta-deep"}`}>
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
                    checked={isChecked(interest)}
                    onChange={(e) => setToggled((t) => ({ ...t, [interest]: e.target.checked }))}
                    className={box}
                  />
                  <span className={optionText}>{interest}</span>
                </label>
              ))}
            </div>
            <p className={`mt-4 text-sm leading-relaxed ${muted}`}>
              Samples and starter kits are not available yet. Selecting them registers your interest
              in future availability.
            </p>
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
            className={`mt-0.5 ${box}`}
          />
          <span className={optionText}>
            I am a licensed barber or barbershop professional.
          </span>
        </label>

        <div className="flex flex-col gap-6 sm:col-span-2 sm:flex-row sm:items-center">
          <button
            type="submit"
            className={`group inline-flex items-center justify-center rounded-full px-7 py-4 text-[0.95rem] font-medium transition-colors duration-500 ${
              dark ? "bg-cream text-espresso hover:bg-sand" : "bg-espresso text-cream hover:bg-terracotta-deep"
            }`}
          >
            {variant === "professional" ? "Request professional information" : "Send message"}
            <Arrow />
          </button>
          <p aria-live="polite" className={`text-sm leading-relaxed ${muted}`}>
            {submitted &&
              "Thank you! This form is a preview, so nothing was sent. Submissions will open once our professional inquiry system is live."}
          </p>
        </div>
      </form>
    </div>
  );
}
