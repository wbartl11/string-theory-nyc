"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Phone, MapPin } from "lucide-react";

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const GREEN = "#26623d";
const CREAM = "#ebebd2";
const WHITE = "#ffffff";

const STRINGS = [
  {
    tier: "Easy & Arm-Friendly",
    items: [
      {
        name: "Dunlop S-Gut (17/1.25mm)",
        type: "Synthetic Gut",
        totalPrice: 32,
        tagline: "Comfortable. Consistent. Affordable.",
        description:
          "A sensible all-around string for casual players and beginners. Reliable feel at an accessible price — no frills, just playability.",
        ratings: { spin: 2, power: 4, control: 3, comfort: 4, durability: 2 },
      },
      {
        name: "Wilson Sensation Plus (17/1.28mm)",
        type: "Multifilament",
        totalPrice: 41,
        tagline: "Arm-friendly. Natural feel.",
        description:
          "Mimics the lively comfort of natural gut at a fraction of the cost. Great standalone or as a cross string in a hybrid setup paired with poly mains.",
        ratings: { spin: 2, power: 5, control: 3, comfort: 5, durability: 2 },
      },
    ],
  },
  {
    tier: "Performance Polyester",
    items: [
      {
        name: "Yonex Polytour Drive (16/1.25mm)",
        type: "Polyester",
        totalPrice: 35,
        tagline: "Control with comfort.",
        description:
          "Performance-level control without the stiffness. Softer and rounder than Hyper-G, with more feel and touch on finesse shots.",
        ratings: { spin: 4, power: 3, control: 4, comfort: 3, durability: 4 },
      },
      {
        name: "Head Hawk Touch (17/1.25mm)",
        type: "Polyester",
        totalPrice: 40,
        tagline: "Polyester without the punishment.",
        description:
          "A softer co-poly built for feel and arm comfort. A great pick for players who want poly-level control but find traditional polys too stiff or harsh on the elbow.",
        ratings: { spin: 3, power: 4, control: 4, comfort: 4, durability: 3 },
      },
      {
        name: "Solinco Hyper-G (16/1.30mm)",
        type: "Polyester",
        totalPrice: 39,
        tagline: "More spin. More depth.",
        description:
          "Square-shaped poly that bites into the ball aggressively. Best for players with a developed swing who want to shape shots with heavier topspin.",
        ratings: { spin: 5, power: 2, control: 5, comfort: 2, durability: 4 },
      },
      {
        name: "Babolat RPM Blast (16/1.30mm)",
        type: "Polyester",
        totalPrice: 47,
        tagline: "Nadal's string. Heavy spin.",
        description:
          "Slick co-polyester construction promotes aggressive snap-back for heavy topspin at high swing speeds. The spin-first tour choice.",
        ratings: { spin: 5, power: 3, control: 4, comfort: 2, durability: 4 },
      },
    ],
  },
];

const ALL_STRINGS = STRINGS.flatMap((t) => t.items);
const RATING_LABELS: Array<{ key: keyof typeof ALL_STRINGS[0]["ratings"]; label: string }> = [
  { key: "spin", label: "Spin" },
  { key: "power", label: "Power" },
  { key: "control", label: "Control" },
  { key: "comfort", label: "Comfort" },
  { key: "durability", label: "Durability" },
];

function RatingBar({ value }: { value: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="h-2 flex-1 rounded-full"
          style={{
            backgroundColor: GREEN,
            opacity: i <= value ? 0.9 : 0.12,
          }}
        />
      ))}
    </div>
  );
}

function CompareTool() {
  const [selected, setSelected] = useState<string[]>(["Solinco Hyper-G (16/1.30mm)", "Head Hawk Touch (17/1.25mm)"]);

  const toggle = (name: string) => {
    setSelected((prev) => {
      if (prev.includes(name)) return prev.filter((n) => n !== name);
      if (prev.length >= 3) return [...prev.slice(1), name];
      return [...prev, name];
    });
  };

  const chosen = ALL_STRINGS.filter((s) => selected.includes(s.name));

  return (
    <section id="compare" className="px-6 py-20" style={{ backgroundColor: WHITE }}>
      <div className="max-w-5xl mx-auto">
        <p
          className="text-xs font-black tracking-widest uppercase mb-3 text-center"
          style={{ color: GREEN, opacity: 0.45 }}
        >
          Compare Strings
        </p>
        <h2
          className="text-3xl md:text-4xl font-black tracking-tight text-center mb-4"
          style={{ color: GREEN }}
        >
          Find Your Match
        </h2>
        <p
          className="text-base font-medium text-center mb-10 max-w-lg mx-auto leading-relaxed"
          style={{ color: GREEN, opacity: 0.65 }}
        >
          Pick up to 3 strings to see them side-by-side. Ratings reflect typical play
          characteristics on a 1–5 scale.
        </p>

        {/* Chips */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ALL_STRINGS.map((s) => {
            const active = selected.includes(s.name);
            return (
              <button
                key={s.name}
                onClick={() => toggle(s.name)}
                className="px-4 py-2 rounded-full text-xs font-bold tracking-wide transition-opacity hover:opacity-80"
                style={{
                  backgroundColor: active ? GREEN : "transparent",
                  color: active ? WHITE : GREEN,
                  border: `1.5px solid ${GREEN}`,
                }}
              >
                {s.name}
              </button>
            );
          })}
        </div>

        {/* Comparison grid */}
        {chosen.length === 0 ? (
          <p
            className="text-center text-sm font-semibold py-12"
            style={{ color: GREEN, opacity: 0.5 }}
          >
            Select at least one string above to compare.
          </p>
        ) : (
          <div
            className={`grid gap-4 ${
              chosen.length === 1
                ? "grid-cols-1 max-w-md mx-auto"
                : chosen.length === 2
                ? "grid-cols-1 md:grid-cols-2"
                : "grid-cols-1 md:grid-cols-3"
            }`}
          >
            {chosen.map((s) => (
              <div
                key={s.name}
                className="rounded-2xl p-6 flex flex-col gap-4"
                style={{ backgroundColor: CREAM }}
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h3
                      className="text-base font-black leading-tight"
                      style={{ color: GREEN }}
                    >
                      {s.name}
                    </h3>
                    <span
                      className="text-xs font-semibold tracking-wide uppercase"
                      style={{ color: GREEN, opacity: 0.4 }}
                    >
                      {s.type}
                    </span>
                  </div>
                  <span
                    className="text-xl font-black shrink-0"
                    style={{ color: GREEN }}
                  >
                    ${s.totalPrice}
                  </span>
                </div>

                <p
                  className="text-xs font-black tracking-wide uppercase"
                  style={{ color: GREEN, opacity: 0.5 }}
                >
                  {s.tagline}
                </p>

                <div className="flex flex-col gap-2.5 pt-2">
                  {RATING_LABELS.map(({ key, label }) => (
                    <div key={key} className="flex items-center gap-3">
                      <span
                        className="text-xs font-bold tracking-wide uppercase w-20 shrink-0"
                        style={{ color: GREEN, opacity: 0.7 }}
                      >
                        {label}
                      </span>
                      <div className="flex-1">
                        <RatingBar value={s.ratings[key]} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function LogoBadge() {
  return (
    <Image
      src="/logo.png"
      alt="String Theory NYC logo"
      width={520}
      height={520}
      priority
      unoptimized
      className="w-full h-full object-contain"
    />
  );
}

export default function StringTheoryNYC() {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: CREAM, color: GREEN }}>

      {/* ── NAV ──────────────────────────────────────────────── */}
      <nav
        className="sticky top-0 z-50 flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: WHITE, borderBottom: `1px solid rgba(45,90,61,0.12)` }}
      >
        <span className="text-sm font-black tracking-widest uppercase" style={{ color: GREEN }}>
          String Theory NYC
        </span>
        <div className="flex items-center gap-5">
          <a
            href="#strings"
            className="hidden sm:block text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity"
            style={{ color: GREEN }}
          >
            Strings
          </a>
          <a
            href="#compare"
            className="hidden sm:block text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity"
            style={{ color: GREEN }}
          >
            Compare
          </a>
          <a
            href="#contact"
            className="hidden sm:block text-sm font-semibold tracking-wide hover:opacity-70 transition-opacity"
            style={{ color: GREEN }}
          >
            Contact
          </a>
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-opacity hover:opacity-80"
            style={{ backgroundColor: GREEN, color: WHITE }}
          >
            Book Now
          </a>
        </div>
      </nav>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        className="flex flex-col items-center text-center px-6 py-20 md:py-28"
        style={{ backgroundColor: CREAM }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-80 h-80 md:w-96 md:h-96 mb-10"
        >
          <LogoBadge />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-6xl font-black tracking-tight leading-tight max-w-2xl mb-5"
          style={{ color: GREEN }}
        >
          Don&apos;t Blame Your Game.
          <br />
          Blame Your Strings.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-medium max-w-md mb-10 leading-relaxed"
          style={{ color: GREEN, opacity: 0.75 }}
        >
          NYC tennis stringing services. Quick turnaround times, without the shop mark-up. By local tennis players, for local tennis players.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-full font-bold text-base tracking-wide transition-opacity hover:opacity-80"
            style={{ backgroundColor: GREEN, color: WHITE }}
          >
            Book a Stringing
          </a>
          <a
            href="#strings"
            className="px-8 py-3.5 rounded-full font-bold text-base tracking-wide border-2 transition-opacity hover:opacity-70"
            style={{ borderColor: GREEN, color: GREEN }}
          >
            See Our Strings ↓
          </a>
        </motion.div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: WHITE }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs font-black tracking-widest uppercase mb-3 text-center"
            style={{ color: GREEN, opacity: 0.45 }}
          >
            The Process
          </p>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight text-center mb-14"
            style={{ color: GREEN }}
          >
            How It Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                step: "01",
                title: "Drop Off",
                body: "Fill out the form below with your preferred setup and drop your racket off at our Upper East Side location. Racket drop off may also be feasible in Midtown midweek.",
              },
              {
                step: "02",
                title: "We String",
                body: "Detailed stringing with your choice of string and tension. Or consult us for a setup recommendation.",
              },
              {
                step: "03",
                title: "Pick Up",
                body: "Standard turnaround is 24–48 hours — we'll let you know when your racket is ready for pickup so you can get back out there. Same-day requests can be accommodated for an additional fee.",
              },
            ].map(({ step, title, body }) => (
              <div key={step} className="flex flex-col items-start">
                <span
                  className="text-6xl font-black mb-4 leading-none"
                  style={{ color: GREEN, opacity: 0.1 }}
                >
                  {step}
                </span>
                <h3
                  className="text-xl font-black tracking-tight mb-2"
                  style={{ color: GREEN }}
                >
                  {title}
                </h3>
                <p
                  className="text-base leading-relaxed font-medium"
                  style={{ color: GREEN, opacity: 0.65 }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STRINGS & PRICING ────────────────────────────────── */}
      <section id="strings" className="px-6 py-20" style={{ backgroundColor: CREAM }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs font-black tracking-widest uppercase mb-3 text-center"
            style={{ color: GREEN, opacity: 0.45 }}
          >
            What We Carry
          </p>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight text-center mb-4"
            style={{ color: GREEN }}
          >
            Strings & Pricing
          </h2>
          <p
            className="text-base font-medium text-center mb-14 max-w-md mx-auto leading-relaxed"
            style={{ color: GREEN, opacity: 0.65 }}
          >
            All prices include a{" "}
            <strong style={{ color: GREEN }}>$25 labor fee</strong>. Not sure
            which string is right for you? Just ask — we&apos;ll help you pick.
          </p>

          <div className="flex flex-col gap-12">
            {STRINGS.map(({ tier, items }) => (
              <div key={tier}>
                <div className="flex items-center gap-4 mb-5">
                  <span
                    className="text-xs font-black tracking-widest uppercase shrink-0"
                    style={{ color: GREEN, opacity: 0.45 }}
                  >
                    {tier}
                  </span>
                  <div
                    className="flex-1 h-px"
                    style={{ backgroundColor: GREEN, opacity: 0.12 }}
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {items.map(({ name, type, totalPrice, tagline, description }) => (
                    <div
                      key={name}
                      className="rounded-2xl p-6 flex flex-col gap-3"
                      style={{ backgroundColor: WHITE }}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3
                            className="text-base font-black leading-tight"
                            style={{ color: GREEN }}
                          >
                            {name}
                          </h3>
                          <span
                            className="text-xs font-semibold tracking-wide uppercase"
                            style={{ color: GREEN, opacity: 0.4 }}
                          >
                            {type}
                          </span>
                        </div>
                        <span
                          className="text-xl font-black shrink-0"
                          style={{ color: GREEN }}
                        >
                          ${totalPrice}
                        </span>
                      </div>
                      <p
                        className="text-xs font-black tracking-wide uppercase"
                        style={{ color: GREEN, opacity: 0.5 }}
                      >
                        {tagline}
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{ color: GREEN, opacity: 0.65 }}
                      >
                        {description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── COMPARE TOOL ─────────────────────────────────────── */}
      <CompareTool />

      {/* ── MAP ──────────────────────────────────────────────── */}
      <section className="px-6 py-20" style={{ backgroundColor: WHITE }}>
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs font-black tracking-widest uppercase mb-3 text-center"
            style={{ color: GREEN, opacity: 0.45 }}
          >
            Find Us
          </p>
          <h2
            className="text-3xl md:text-4xl font-black tracking-tight text-center mb-10"
            style={{ color: GREEN }}
          >
            Tennis Restringing in the Upper East Side, Manhattan
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: `1px solid rgba(45,90,61,0.1)` }}>
            <iframe
              src="https://www.google.com/maps?q=347+E+76th+St+New+York+NY+10021&output=embed"
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              title="String Theory NYC Location"
            />
          </div>
          <p
            className="text-center mt-4 text-sm font-semibold"
            style={{ color: GREEN, opacity: 0.55 }}
          >
            347 E 76th St, New York, NY 10021
          </p>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section
        id="contact"
        className="px-6 py-20"
        style={{ backgroundColor: GREEN, color: WHITE }}
      >
        <div className="max-w-4xl mx-auto">
          <p
            className="text-xs font-black tracking-widest uppercase mb-3 text-center"
            style={{ color: WHITE, opacity: 0.5 }}
          >
            Get In Touch
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-center mb-14 text-white">
            Ready to Book a Restring?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            {/* Contact info */}
            <div className="flex flex-col gap-6">
              {[
                {
                  icon: <Phone size={20} />,
                  label: "Call or Text",
                  value: "(203) 864-5462",
                  href: "tel:+12038645462",
                  sub: "Fastest way to book",
                },
                {
                  icon: <MapPin size={20} />,
                  label: "Drop-off & Pick-up",
                  value: "347 E 76th St, New York, NY 10021",
                  href: "https://maps.google.com/?q=347+E+76th+St+New+York+NY+10021",
                  sub: "Upper East Side, Manhattan",
                },
                {
                  icon: <InstagramIcon />,
                  label: "Instagram",
                  value: "@StringTheoryNYC",
                  href: "https://instagram.com/StringTheoryNYC",
                  sub: "DMs welcome",
                },
              ].map(({ icon, label, value, href, sub }) => (
                <div key={label} className="flex items-start gap-4">
                  <div
                    className="mt-1 p-2 rounded-xl"
                    style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                  >
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-black tracking-widest uppercase mb-0.5" style={{ opacity: 0.55 }}>
                      {label}
                    </p>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-base font-bold text-white hover:opacity-75 transition-opacity leading-snug block"
                    >
                      {value}
                    </a>
                    <p className="text-xs mt-0.5" style={{ opacity: 0.5 }}>
                      {sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Inquiry form */}
            <form
              action="https://formspree.io/f/xbdayagy"
              method="POST"
              className="flex flex-col gap-4"
            >
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none placeholder:opacity-50"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: WHITE, border: "1px solid rgba(255,255,255,0.2)" }}
              />
              <input
                type="text"
                placeholder="Phone or Email"
                name="contact"
                required
                className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none placeholder:opacity-50"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: WHITE, border: "1px solid rgba(255,255,255,0.2)" }}
              />
              <input
                type="text"
                placeholder="Preferred Tension (lbs)"
                name="tension"
                className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none placeholder:opacity-50"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: WHITE, border: "1px solid rgba(255,255,255,0.2)" }}
              />
              <textarea
                placeholder="String preference, racket model, or questions"
                name="message"
                rows={4}
                className="w-full px-4 py-3 rounded-xl text-sm font-semibold outline-none placeholder:opacity-50 resize-none"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: WHITE, border: "1px solid rgba(255,255,255,0.2)" }}
              />
              <button
                type="submit"
                className="w-full py-4 rounded-xl font-black tracking-wide text-sm transition-opacity hover:opacity-85"
                style={{ backgroundColor: WHITE, color: GREEN }}
              >
                Send Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── FOOTER ───────────────────────────────────────────── */}
      <footer
        className="px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-semibold"
        style={{ backgroundColor: "#1e3d29", color: "rgba(255,255,255,0.4)" }}
      >
        <span>© 2026 String Theory NYC. Manhattan, New York.</span>
        <div className="flex items-center gap-5">
          <a href="tel:+12038645462" className="hover:opacity-75 transition-opacity">
            (203) 864-5462
          </a>
          <a
            href="https://instagram.com/StringTheoryNYC"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-75 transition-opacity"
          >
            @StringTheoryNYC
          </a>
        </div>
      </footer>
    </div>
  );
}
