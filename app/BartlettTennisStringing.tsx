"use client";

import React from "react";
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

const GREEN = "#2d5a3d";
const CREAM = "#e8e8d5";
const WHITE = "#ffffff";

const STRINGS = [
  {
    tier: "Recreational",
    items: [
      {
        name: "Babolat Synthetic Gut",
        type: "Synthetic Gut",
        totalPrice: 32,
        tagline: "Comfortable. Consistent. Affordable.",
        description:
          "A sensible all-around string for casual players and beginners. Reliable feel at an accessible price — no frills, just playability.",
      },
      {
        name: "Tecnifibre 4S",
        type: "Polyester",
        totalPrice: 38,
        tagline: "The gateway poly.",
        description:
          "Softer and more forgiving than performance polys. A natural first step for players moving away from synthetic gut without punishing slower swing speeds.",
      },
    ],
  },
  {
    tier: "Intermediate – Advanced",
    items: [
      {
        name: "Solinco Hyper-G",
        type: "Polyester",
        totalPrice: 39,
        tagline: "More spin. More depth.",
        description:
          "Square-shaped poly that bites into the ball aggressively. Best for players with a developed swing who want to shape shots with heavier topspin.",
      },
      {
        name: "Yonex Polytour Drive",
        type: "Polyester",
        totalPrice: 35,
        tagline: "Control with comfort.",
        description:
          "Performance-level control without the stiffness. Softer and rounder than Hyper-G, with more feel and touch on finesse shots.",
      },
    ],
  },
  {
    tier: "Advanced / Tour",
    items: [
      {
        name: "Babolat RPM Blast",
        type: "Polyester",
        totalPrice: 47,
        tagline: "Nadal's string. Heavy spin.",
        description:
          "Slick co-polyester construction promotes aggressive snap-back for heavy topspin at high swing speeds. The spin-first tour choice.",
      },
      {
        name: "Luxilon ALU Power",
        type: "Polyester",
        totalPrice: 47,
        tagline: "The ATP standard.",
        description:
          "The most widely used string on the ATP tour. Benchmark tension retention, predictability, and feel for players who generate pace consistently.",
      },
    ],
  },
  {
    tier: "Multifilament",
    items: [
      {
        name: "Wilson Sensation Plus",
        type: "Multifilament",
        totalPrice: 41,
        tagline: "Arm-friendly. Natural feel.",
        description:
          "Mimics the lively comfort of natural gut at a fraction of the cost. Great standalone or as a cross string in a hybrid setup paired with poly mains.",
      },
    ],
  },
];

function LogoBadge() {
  return (
    <svg
      viewBox="0 0 340 310"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <defs>
        <path id="textArc" d="M 24 172 A 146 146 0 0 1 316 172" />
      </defs>
      {/* Arch badge background */}
      <path
        d="M 15 310 L 15 158 A 155 155 0 0 1 325 158 L 325 310 Z"
        fill={WHITE}
      />
      {/* Tennis ball */}
      <circle cx="170" cy="182" r="88" fill={GREEN} />
      {/* Ball seam left */}
      <path
        d="M 100 148 Q 136 182 100 216"
        stroke={WHITE}
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      {/* Ball seam right */}
      <path
        d="M 240 148 Q 204 182 240 216"
        stroke={WHITE}
        strokeWidth="9"
        fill="none"
        strokeLinecap="round"
      />
      {/* EST pill */}
      <rect x="30" y="255" width="58" height="26" rx="13" fill={GREEN} />
      <text
        x="59"
        y="273"
        fontFamily="Arial Black, Arial"
        fontSize="11"
        fontWeight="900"
        fill={WHITE}
        textAnchor="middle"
      >
        EST
      </text>
      {/* 2026 pill */}
      <rect x="252" y="255" width="58" height="26" rx="13" fill={GREEN} />
      <text
        x="281"
        y="273"
        fontFamily="Arial Black, Arial"
        fontSize="11"
        fontWeight="900"
        fill={WHITE}
        textAnchor="middle"
      >
        2026
      </text>
      {/* Curved "STRING THEORY NYC" text */}
      <text
        fontFamily="Arial Black, Arial"
        fontSize="23"
        fontWeight="900"
        fill={GREEN}
        letterSpacing="3"
      >
        <textPath href="#textArc" startOffset="50%" textAnchor="middle">
          STRING THEORY NYC
        </textPath>
      </text>
      {/* Bottom left */}
      <text
        x="28"
        y="292"
        fontFamily="Arial Black, Arial"
        fontSize="9.5"
        fontWeight="900"
        fill={GREEN}
        letterSpacing="1"
      >
        TENNIS RACQUET
      </text>
      <text
        x="28"
        y="305"
        fontFamily="Arial Black, Arial"
        fontSize="9.5"
        fontWeight="900"
        fill={GREEN}
        letterSpacing="1"
      >
        STRINGING
      </text>
      {/* Bottom right */}
      <text
        x="312"
        y="292"
        fontFamily="Arial Black, Arial"
        fontSize="9.5"
        fontWeight="900"
        fill={GREEN}
        letterSpacing="1"
        textAnchor="end"
      >
        MANHATTAN
      </text>
      <text
        x="312"
        y="305"
        fontFamily="Arial Black, Arial"
        fontSize="9.5"
        fontWeight="900"
        fill={GREEN}
        letterSpacing="1"
        textAnchor="end"
      >
        NYC
      </text>
    </svg>
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
          className="w-52 h-52 mb-10"
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
          Your Racket.
          <br />
          Freshly Strung.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl font-medium max-w-md mb-10 leading-relaxed"
          style={{ color: GREEN, opacity: 0.75 }}
        >
          Professional tennis racket stringing in Manhattan.
          Drop off. Pick up. Play.
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
                body: "Bring your racket to 347 E 76th St in Manhattan. We'll log your string preference and tension.",
              },
              {
                step: "02",
                title: "We String",
                body: "Expert stringing with your choice of string and tension. Every job done with care and consistency.",
              },
              {
                step: "03",
                title: "Pick Up",
                body: "We'll reach out when your racket is ready. Swing by, grab it, and get back on the court.",
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

          {/* Special orders note */}
          <div
            className="mt-10 rounded-2xl px-6 py-5 flex flex-col sm:flex-row sm:items-center gap-3"
            style={{ backgroundColor: GREEN, color: WHITE }}
          >
            <span className="text-2xl">🎾</span>
            <p className="text-sm font-semibold leading-relaxed">
              <strong>Need a string not listed?</strong> We take special orders
              — natural gut, hybrid setups, custom requests, or your own string. Allow 5–7 days.
              Small sourcing fee may apply.
            </p>
          </div>
        </div>
      </section>

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
            Upper East Side, Manhattan
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
            Ready to Book?
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
