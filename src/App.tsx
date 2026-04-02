import { useState } from "react";

/* ────────────────────────────────────────────
   HostREDNK  –  File Download Landing Page
   ──────────────────────────────────────────── */

export default function App() {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const fileName = "shotcut-win64-250816.exe";
  const fileSize = "115 MB";

  return (
    <div
      className="relative flex min-h-screen flex-col items-center justify-between overflow-hidden bg-black text-white selection:bg-red-600/40"
      style={{ animation: "fadeIn 1s ease-out forwards" }}
    >
      {/* ── Background grid ── */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(220,38,38,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(220,38,38,0.08) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          animation: "gridFade 2s ease-out forwards",
        }}
      />

      {/* ── Radial red glow (ambient) ── */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full bg-red-600/[0.07] blur-[120px]" />

      {/* ── Floating particles ── */}
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="pointer-events-none absolute rounded-full bg-red-500"
          style={{
            width: `${3 + i * 1.5}px`,
            height: `${3 + i * 1.5}px`,
            top: `${15 + i * 14}%`,
            left: `${10 + i * 15}%`,
            opacity: 0.25,
            animation: `${i % 2 === 0 ? "float" : "floatReverse"} ${4 + i}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* ── Scan-line ── */}
      <div
        className="pointer-events-none absolute left-0 h-[2px] w-full bg-gradient-to-r from-transparent via-red-500/30 to-transparent"
        style={{ animation: "scanline 6s linear infinite" }}
      />

      {/* ═══════════════════════════ HEADER ═══════════════════════════ */}
      <header
        className="relative z-10 w-full px-6 py-6 sm:px-10 sm:py-8"
        style={{ animation: "fadeIn 1s ease-out 0.2s both" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          {/* Logo / Brand */}
          <div className="flex items-center gap-3">
            {/* Icon */}
            <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-600/30 bg-red-600/10">
              <svg
                className="h-5 w-5 text-red-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
            </div>
            <h1
              className="text-xl font-bold tracking-widest uppercase sm:text-2xl"
              style={{ fontFamily: "'Orbitron', sans-serif" }}
            >
              <span className="text-white">Host</span>
              <span className="text-red-500">RED</span>
              <span className="text-white">NK</span>
            </h1>
          </div>

          {/* Small status badge */}
          <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs text-neutral-400 sm:flex">
            <span className="inline-block h-2 w-2 rounded-full bg-green-500 shadow-[0_0_6px_rgba(34,197,94,0.6)]" />
            Server Online
          </div>
        </div>
      </header>

      {/* ═══════════════════════════ MAIN ═══════════════════════════ */}
      <main
        className="relative z-10 flex flex-1 flex-col items-center justify-center px-6"
        style={{ animation: "fadeIn 1s ease-out 0.5s both" }}
      >
        {/* File info card */}
        <div className="mb-10 flex flex-col items-center gap-4">
          {/* Icon */}
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-red-600/20 bg-gradient-to-br from-red-600/10 to-transparent">
            <svg
              className="h-8 w-8 text-red-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
              <polyline points="14 2 14 8 20 8" />
              <line x1="12" y1="18" x2="12" y2="12" />
              <polyline points="9 15 12 18 15 15" />
            </svg>
          </div>

          {/* File name */}
          <h2
            className="text-center text-sm font-medium tracking-wide text-neutral-300 sm:text-base"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            {fileName}
          </h2>

          {/* Meta badges */}
          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1">
              Windows x64
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1">
              {fileSize}
            </span>
            <span className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1">
              v25.08.16
            </span>
          </div>
        </div>

        {/* ── DOWNLOAD BUTTON ── */}
        <button
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => {
            setIsHovered(false);
            setIsPressed(false);
          }}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          className="group relative cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl"
          aria-label="Download file"
        >
          {/* Outer glow ring */}
          <span
            className="absolute -inset-[3px] rounded-2xl transition-all duration-500"
            style={{
              background: isHovered
                ? "linear-gradient(135deg, #dc2626, #b91c1c, #dc2626)"
                : "linear-gradient(135deg, rgba(220,38,38,0.4), rgba(185,28,28,0.2), rgba(220,38,38,0.4))",
              animation: isHovered ? "pulseGlow 2s ease-in-out infinite" : "none",
              filter: isHovered ? "blur(2px)" : "blur(0px)",
              opacity: isHovered ? 1 : 0.6,
            }}
          />

          {/* Button body */}
          <span
            className="relative flex items-center gap-3 rounded-2xl border border-red-600/40 px-10 py-4 text-lg font-semibold tracking-wider uppercase transition-all duration-300 sm:px-14 sm:py-5 sm:text-xl"
            style={{
              fontFamily: "'Orbitron', sans-serif",
              background: isHovered
                ? "linear-gradient(135deg, #dc2626 0%, #991b1b 100%)"
                : "linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)",
              transform: isPressed ? "scale(0.97)" : isHovered ? "scale(1.03)" : "scale(1)",
              boxShadow: isHovered
                ? "0 0 40px rgba(220,38,38,0.4), inset 0 1px 0 rgba(255,255,255,0.1)"
                : "0 0 15px rgba(220,38,38,0.15), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {/* Arrow icon */}
            <svg
              className="h-5 w-5 transition-transform duration-300"
              style={{
                transform: isHovered ? "translateY(3px)" : "translateY(0)",
              }}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span
              style={{
                background: isHovered
                  ? "linear-gradient(90deg, #fff, #fca5a5, #fff)"
                  : "none",
                backgroundSize: "200% auto",
                WebkitBackgroundClip: isHovered ? "text" : "unset",
                WebkitTextFillColor: isHovered ? "transparent" : "#fff",
                animation: isHovered ? "shimmer 2.5s linear infinite" : "none",
              }}
            >
              Download Now
            </span>
          </span>
        </button>

        {/* Secure note */}
        <p
          className="mt-6 flex items-center gap-1.5 text-xs text-neutral-600"
          style={{ fontFamily: "'Inter', sans-serif" }}
        >
          <svg
            className="h-3.5 w-3.5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          Secure &amp; Verified Download
        </p>
      </main>

      {/* ═══════════════════════════ FOOTER ═══════════════════════════ */}
      <footer
        className="relative z-10 w-full px-6 py-6 sm:px-10 sm:py-8"
        style={{ animation: "fadeIn 1s ease-out 0.8s both" }}
      >
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2">
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-red-600/30 to-transparent" />
          <p
            className="text-xs tracking-widest text-neutral-600"
            style={{ fontFamily: "'Inter', sans-serif" }}
          >
            Created by <span className="text-neutral-400">Naveen</span>
          </p>
        </div>
      </footer>
    </div>
  );
}
