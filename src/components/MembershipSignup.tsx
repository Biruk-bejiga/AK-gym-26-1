"use client";

import { useMemo, useState } from "react";

import { site } from "@/content/site";
import { ButtonLink } from "@/components/ButtonLink";

function safeTrim(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

export function MembershipSignup() {
  const [plan, setPlan] = useState<string>(site.pricing.plans[1]?.name.en ?? "Monthly Membership");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [goal, setGoal] = useState("");
  const [preferredTime, setPreferredTime] = useState("");
  const [copied, setCopied] = useState(false);

  const message = useMemo(() => {
    const lines = [
      `Hello AK Gym 26, I want to join.`,
      `Plan: ${safeTrim(plan)}`,
      name ? `Name: ${safeTrim(name)}` : undefined,
      phone ? `Phone: ${safeTrim(phone)}` : undefined,
      goal ? `Goal: ${safeTrim(goal)}` : undefined,
      preferredTime ? `Preferred time: ${safeTrim(preferredTime)}` : undefined,
      `Location: ${site.location.fullAddress.en}`,
    ].filter(Boolean);

    return lines.join("\n");
  }, [goal, name, phone, plan, preferredTime]);

  async function copyToClipboard() {
    try {
      await navigator.clipboard.writeText(message);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Fallback: select the textarea contents for manual copy.
      const element = document.getElementById("signup-message") as HTMLTextAreaElement | null;
      element?.focus();
      element?.select();
    }
  }

  return (
    <div className="grid gap-6 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 md:grid-cols-12 md:items-start md:p-8">
      <div className="md:col-span-5">
        <h2 className="text-2xl font-extrabold text-white">{site.pricing.signup.title.en}</h2>
        <p className="mt-2 text-sm text-white/75">{site.pricing.signup.body.en}</p>
        <p className="mt-2 text-xs text-white/55" lang="am">
          {site.pricing.signup.body.am}
        </p>

        <ol className="mt-5 grid gap-3 text-sm text-white/75">
          {site.pricing.signup.steps.map((s) => (
            <li key={s.en} className="flex gap-3">
              <span className="mt-1 grid size-6 shrink-0 place-items-center rounded-full bg-white/10 text-xs font-extrabold text-white ring-1 ring-white/10">
                {site.pricing.signup.steps.findIndex((x) => x.en === s.en) + 1}
              </span>
              <span>
                {s.en}
                {s.am ? (
                  <span className="mt-1 block text-xs text-white/55" lang="am">
                    {s.am}
                  </span>
                ) : null}
              </span>
            </li>
          ))}
        </ol>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href={`tel:${site.contact.phoneE164}`} variant="primary">
            Call {site.contact.phoneDisplay}
          </ButtonLink>
          <ButtonLink href={site.contact.instagramUrl} variant="secondary" external>
            Message on Instagram
          </ButtonLink>
        </div>
      </div>

      <div className="md:col-span-7">
        <form className="grid gap-4" onSubmit={(e) => e.preventDefault()} aria-label="Membership interest form">
          <div className="grid gap-2 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-white/85">
              Choose a plan
              <select
                value={plan}
                onChange={(e) => setPlan(e.target.value)}
                className="h-11 rounded-xl bg-[color:var(--bg)] px-3 text-sm text-white ring-1 ring-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              >
                {site.pricing.plans.map((p) => (
                  <option key={p.name.en} value={p.name.en}>
                    {p.name.en}
                  </option>
                ))}
              </select>
            </label>

            <label className="grid gap-2 text-sm font-semibold text-white/85">
              Phone (optional)
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                inputMode="tel"
                placeholder="e.g. +251..."
                className="h-11 rounded-xl bg-[color:var(--bg)] px-3 text-sm text-white ring-1 ring-white/15 placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              />
            </label>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            <label className="grid gap-2 text-sm font-semibold text-white/85">
              Name (optional)
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="h-11 rounded-xl bg-[color:var(--bg)] px-3 text-sm text-white ring-1 ring-white/15 placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              />
            </label>

            <label className="grid gap-2 text-sm font-semibold text-white/85">
              Preferred time (optional)
              <input
                value={preferredTime}
                onChange={(e) => setPreferredTime(e.target.value)}
                placeholder="Morning / Afternoon / Evening"
                className="h-11 rounded-xl bg-[color:var(--bg)] px-3 text-sm text-white ring-1 ring-white/15 placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
              />
            </label>
          </div>

          <label className="grid gap-2 text-sm font-semibold text-white/85">
            Goal (optional)
            <input
              value={goal}
              onChange={(e) => setGoal(e.target.value)}
              placeholder="Strength / Weight loss / Fitness"
              className="h-11 rounded-xl bg-[color:var(--bg)] px-3 text-sm text-white ring-1 ring-white/15 placeholder:text-white/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            />
          </label>

          <div className="grid gap-2">
            <label className="text-sm font-semibold text-white/85" htmlFor="signup-message">
              Your message (copy & send)
            </label>
            <textarea
              id="signup-message"
              readOnly
              value={message}
              className="min-h-28 w-full resize-none rounded-2xl bg-[color:var(--bg)] p-3 text-sm text-white ring-1 ring-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
            />
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="button"
                onClick={copyToClipboard}
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--bg)]"
              >
                {copied ? "Copied" : "Copy message"}
              </button>
              <p className="text-xs text-white/55">
                Open Instagram and paste the message in DMs.
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
