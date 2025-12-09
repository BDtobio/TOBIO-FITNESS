"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md fixed top-0 left-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">

          {/* LOGO */}
          <a
            href="/home"
            className="font-semibold text-lg tracking-tight hover:opacity-80 transition"
          >
            <span className="font-bold">Diaco</span> Coach
          </a>

          {/* DESKTOP LINKS */}
          <div className="hidden md:flex gap-6 text-sm font-medium text-neutral-700">
            <a href="/home" className="hover:text-black transition">Inicio</a>
            <a href="/home#planes" className="hover:text-black transition">Planes</a>
            <a href="/rutina" className="hover:text-black transition">Rutina personalizada</a>
            <a
              href="https://wa.me/5493816437392"
              target="_blank"
              className="hover:text-black transition"
            >
              WhatsApp
            </a>
          </div>

          {/* HAMBURGER MOBILE */}
          <button
            className="md:hidden text-neutral-800 p-1"
            onClick={() => setOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7"
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 animate-fadeIn"
          onClick={() => setOpen(false)}
        />
      )}

      {/* SLIDE PANEL MOBILE */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="p-5 flex justify-between items-center border-b border-neutral-200">
          <span className="font-semibold text-lg">Menú</span>
          <button onClick={() => setOpen(false)} className="text-lg">
            ✕
          </button>
        </div>

        {/* MENU LINKS */}
        <div className="flex flex-col px-5 py-5 gap-5 text-base font-medium text-neutral-700">

          <a href="/home" onClick={() => setOpen(false)} className="hover:text-black transition">
            Inicio
          </a>

          <a href="/home#planes" onClick={() => setOpen(false)} className="hover:text-black transition">
            Planes
          </a>

          <a href="/rutina" onClick={() => setOpen(false)} className="hover:text-black transition">
            Rutina personalizada
          </a>

          <a
            href="https://wa.me/5493816437392"
            target="_blank"
            className="hover:text-black transition"
            onClick={() => setOpen(false)}
          >
            WhatsApp
          </a>

          {/* CTA Mobile */}
          <a
            href="https://wa.me/5493816437392?text=Hola%20Tobio!%20Quiero%20arrancar%20una%20rutina."
            target="_blank"
            className="mt-4 inline-flex items-center justify-center bg-neutral-900 text-white rounded-full py-3 px-4 hover:bg-black transition shadow-md"
          >
            Empezar ahora 💪
          </a>
        </div>
      </div>
    </>
  );
}
