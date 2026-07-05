"use client";

import { useState } from "react";
import ThemeToggle from "../bottomTheme/theme";

const linkBase =
  "text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition-colors";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className="
          fixed top-0 left-0 z-50 w-full
          border-b border-neutral-200/70 dark:border-neutral-800/70
          bg-white/80 dark:bg-neutral-950/80
          backdrop-blur-lg
        "
      >
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          
          {/* LOGO */}
          <a
            href="/home"
            className="
              text-2xl font-semibold tracking-tight
              text-neutral-900 dark:text-neutral-100
              hover:opacity-80 transition
            "
          >
            <span className="font-HighTrial">TOBIO COACH</span> 
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <a href="/home" className={linkBase}>
              Inicio
            </a>
            <a href="/home#planes" className={linkBase}>
              Planes
            </a>
            <a href="/rutina" className={linkBase}>
              Descubrí tu plan ideal
            </a>
            <a
              href="https://wa.me/5493816437392"
              target="_blank"
              className={linkBase}
            >
              WhatsApp
            </a>

            {/* TOGGLE */}
            <ThemeToggle />
          </div>

          {/* HAMBURGER */}
          <button
            aria-label="Abrir menú"
            className="
              md:hidden p-2 rounded-lg
              text-neutral-800 dark:text-neutral-200
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition
            "
            onClick={() => setOpen(true)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* MOBILE MENU */}
      <aside
        className={`
          fixed top-0 right-0 z-50 h-full w-72
          bg-white dark:bg-neutral-950
          shadow-2xl
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-5 border-b border-neutral-200 dark:border-neutral-800">
          <span className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Menú
          </span>
          <button
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            className="
              p-1 rounded-md
              text-neutral-700 dark:text-neutral-300
              hover:bg-neutral-100 dark:hover:bg-neutral-800
              transition
            "
          >
            ✕
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-5 px-5 py-6 text-base font-medium">
          <a onClick={() => setOpen(false)} href="/home" className={linkBase}>
            Inicio
          </a>
          <a onClick={() => setOpen(false)} href="/home#planes" className={linkBase}>
            Planes
          </a>
          <a onClick={() => setOpen(false)} href="/rutina" className={linkBase}>
            Descubrí tu plan ideal
          </a>
          <a
            href="https://wa.me/5493816437392"
            target="_blank"
            onClick={() => setOpen(false)}
            className={linkBase}
          >
            WhatsApp
          </a>

          {/* TOGGLE */}
          <div className="pt-2">
            <ThemeToggle />
          </div>

          {/* CTA */}
          <a
            href="https://wa.me/5493816437392?text=Hola%20Tobio!%20Quiero%20arrancar%20una%20rutina."
            target="_blank"
            className="
              mt-4 inline-flex items-center justify-center
              rounded-full py-3 px-4
              bg-neutral-900 text-white
              dark:bg-white dark:text-black
              font-semibold
              hover:scale-[1.04]
              transition shadow-lg
            "
          >
            Empezar ahora 💪
          </a>
        </div>
      </aside>
    </>
  );
}
