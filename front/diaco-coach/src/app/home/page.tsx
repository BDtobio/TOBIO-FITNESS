"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

export default function Home() {
function Carousel() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowLogo((prev) => !prev);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[320px] sm:h-[300px] md:h-[900px] overflow-hidden">

      {/* VIDEO BACKGROUND */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/HomeVideo.mp4" type="video/mp4" />
      </video>

      {/* OVERLAY OSCURO */}
      <div className="absolute inset-0 bg-black/30" />

 {/* TEXTO / LOGO */}
<div className="absolute inset-0 flex items-center justify-center text-white">
  <AnimatePresence mode="wait">
    {showLogo ? (
      <motion.div
        key="logo"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src="/logoTOBIO2.png"
          alt="Logo Tobias Diaco"
          width={400}
          height={400}
          className="object-contain w-[140px] sm:w-[180px] md:w-[300px] h-auto"
        />
      </motion.div>
    ) : (
      <motion.h2
        key="text"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="font-HighTrial text-white text-3xl sm:text-4xl md:text-9xl tracking-[0.4em] text-center"
      >
        TOBIAS DIACO
      </motion.h2>
    )}
  </AnimatePresence>
</div>

{/* BOTÓN FIJO */}
<div className="absolute bottom-10 md:bottom-20 left-1/2 -translate-x-1/2 z-20">
  <a
    href="#planes"
    className="px-7 py-3 rounded-full border border-white bg-white/10 backdrop-blur-md
               text-white font-medium hover:bg-white hover:text-black
               transition-all duration-300"
  >
    Descubrir planes ↓
  </a>
</div>

    </div>
  );
}

  return (
    <main className="max-w-5xl mx-auto px-4 py-8 md:py-14">
      {/* HERO */}
      <section
        id="inicio"
        className="grid gap-6 md:grid-cols-[1.4fr,1fr] items-center mb-12 md:mb-20"
      >
        <div>
          <p className="inline-flex items-center text-[10px] tracking-wide
  border border-neutral-200 dark:border-neutral-800
  rounded-full px-2.5 py-1
  bg-neutral-50 dark:bg-neutral-900
  text-neutral-500 dark:text-neutral-400
  mb-3 ">

            Tobio Diaco Coach · Entrenamiento online
          </p>

      <h1 className="text-2xl md:text-4xl font-HighTrial leading-tight mb-2 text-neutral-900 dark:text-neutral-100 max-w-xl">

            Entrená con un plan diseñado para{" "}
            <span className="underline underline-offset-4 decoration-2">
              tu cuerpo y tu objetivo
            </span>
            .
          </h1>

        <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-md mb-5 leading-relaxed">

            Basta de rutinas genéricas. Empezá a entrenar con un plan creado para vos, tu nivel
            y tu tiempo disponible.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#planes"
            className="inline-flex items-center justify-center rounded-full w-full sm:w-auto px-5 py-2.5 text-sm font-medium
bg-neutral-900 text-white hover:bg-black
dark:bg-white dark:text-black dark:hover:bg-neutral-200
transition"
            >
              Ver planes
            </a>

            <a
              href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Quiero%20info%20sobre%20tus%20rutinas."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full w-full sm:w-auto px-5 py-2.5 text-sm font-medium border
bg-neutral-900 text-white hover:bg-black
dark:bg-white dark:text-black dark:hover:bg-neutral-200
transition"
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>

      <div className="hidden md:block
  border border-neutral-200 dark:border-neutral-800
  rounded-xl p-4
  bg-neutral-50 dark:bg-neutral-900">

          <p className="text-[11px] uppercase tracking-[0.16em]
  text-neutral-500 dark:text-neutral-400 mb-2">

            Entrenamiento 100% online
          </p>
         <h2 className="text-base font-semibold mb-2
  text-neutral-900 dark:text-neutral-100">

            Rutinas personalizadas. Seguimiento real.
          </h2>
         <p className="text-sm text-neutral-600 dark:text-neutral-300">

            Planes mensuales con distintos niveles de acompañamiento.
          </p>
        </div>
      </section>
<>
  {/* CARRUSEL FULL WIDTH */}
  <section className="w-screen relative left-1/2 -translate-x-1/2 mb-16">
  <Carousel />
</section>



</>


      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="mb-14">
       <h2 className="text-2xl md:text-3xl font-HighTrial mb-2
  text-neutral-900 dark:text-neutral-100">
SOBRE MÍ</h2>
       <div className="mt-3 max-w-2xl space-y-3
  text-[13px] md:text-sm
  text-neutral-700 dark:text-neutral-300
  leading-relaxed">

         <p className="font-medium text-neutral-900 dark:text-neutral-100">

            Soy Tobías Diaco — creador de Diaco Coach.
          </p>
          <p>
            Entreno hace varios años y ayudo a personas a ganar masa muscular, perder grasa y
            mejorar su estética sin locuras ni rutinas copiadas.
          </p>
          <p>
            Mi enfoque es simple: plan claro, progreso real y un acompañamiento que se adapte
            a la vida de cada persona.
          </p>
          <p>
            Si querés que veamos tu caso puntual, escribime por WhatsApp.
          </p>

          <a
            href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Quiero%20ver%20qué%20plan%20me%20recomendás."
            target="_blank"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium w-full sm:w-auto
bg-neutral-900 text-white hover:bg-black
dark:bg-white dark:text-black dark:hover:bg-neutral-200
transition"
          >
            Hablar con Diaco Coach
          </a>
        </div>
      </section>
    {/* ================= PLANES ================= */}
<motion.section
  id="planes"
  className="mb-20"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
  <h2 className="text-3xl md:text-4xl font-HighTrial text-center mb-3">
    ELEGÍ TU PLAN
  </h2>

  <p className="text-center text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto mb-12">
    No todos necesitan lo mismo. Elegí la opción que mejor se adapte a tu objetivo.
  </p>

  {/* ================= OPCIONES ================= */}

  <div className="grid md:grid-cols-2 gap-8">

    {/* RUTINAS */}
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border border-neutral-200 dark:border-neutral-800 p-8 shadow-sm hover:shadow-xl transition"
    >
      <span className="inline-block mb-3 text-xs rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1">
        📄 Rutinas
      </span>

      <h3 className="font-HighTrial text-3xl mb-4">
        RUTINAS PREARMADAS
      </h3>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">
        Ideales si buscás empezar hoy mismo con una rutina completa y efectiva.
      </p>

      <ul className="space-y-2 text-sm mb-8">
        <li>✔ Calentamiento incluido</li>
        <li>✔ Rutina completa</li>
        <li>✔ Vuelta a la calma</li>
        <li>✔ PDF descargable</li>
        <li>✔ Pago único</li>
      </ul>

      <div className="border-t pt-5">
        <p className="text-xs text-neutral-500 mb-4">
          Encontrá rutinas Arnold Split y próximamente PPL.
        </p>

        <a
          href="/rutinas"
          className="block text-center rounded-full bg-neutral-900 text-white py-3 hover:bg-black transition"
        >
          VER RUTINAS →
        </a>
      </div>
    </motion.div>

    {/* PROGRAMAS */}
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl border-2 border-neutral-900 dark:border-white p-8 shadow-lg hover:shadow-2xl transition"
    >
      <span className="inline-block mb-3 text-xs rounded-full bg-neutral-900 text-white px-3 py-1">
        ⭐ Recomendado
      </span>

      <h3 className="font-HighTrial text-3xl mb-4">
        PROGRAMAS
      </h3>

      <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6">
        Planes mucho más completos para progresar durante varios meses.
      </p>

      <ul className="space-y-2 text-sm mb-8">
        <li>✔ Guía de alimentación</li>
        <li>✔ Calentamiento</li>
        <li>✔ Rutina completa</li>
        <li>✔ Vuelta a la calma</li>
        <li>✔ Progresión de cargas</li>
        <li>✔ PDF completo</li>
      </ul>

      <div className="border-t pt-5">
        <p className="text-xs text-neutral-500 mb-4">
          Hipertrofia y Powerbuilding.
        </p>

        <a
          href="/programas"
          className="block text-center rounded-full bg-neutral-900 text-white py-3 hover:bg-black transition"
        >
          VER PROGRAMAS →
        </a>
      </div>
    </motion.div>

  </div>
</motion.section>

      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="mb-14">
        <h2 className="text-2xl md:text-2xl font-HighTrial mb-1">¿Cómo funciona?</h2>
        <p className="text-[13px] text-neutral-600 max-w-xl mb-5 leading-relaxed">
          Un proceso simple y claro para empezar.
        </p>

        <div className="grid gap-3 sm:grid-cols-2 md:grid-cols-4">
          {[
            "Elegís tu plan",
            "Me hablás o pagás online",
            "Respondés unas preguntas",
            "Armamos tu rutina"
          ].map((t, i) => (
            <div
              key={i}
              className="border border-neutral-200 dark:border-neutral-800
    rounded-lg p-3
    bg-white dark:bg-neutral-900
    text-sm
    text-neutral-800 dark:text-neutral-200">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-neutral-800 text-[11px] font-semibold mb-2">
                {i + 1}
              </span>
              <h3 className="font-medium mb-1">{t}</h3>
             <p className="text-neutral-600 dark:text-neutral-300 text-[13px] leading-relaxed">

                {i === 0 &&
                  "Según tu objetivo, experiencia y tiempo disponible."}
                {i === 1 &&
                  "Podés contratar por WhatsApp o pagar directo desde la web."}
                {i === 2 &&
                  "Datos clave: peso, altura, horarios, lesiones, equipamiento."}
                {i === 3 &&
                  "Creación de una rutina personalizada lista para seguir."}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-20">
        <h2 className="text-lg md:text-2xl font-semibold mb-1">Preguntas frecuentes</h2>
        <p className="text-[13px] text-neutral-600 max-w-xl mb-3">
          Algunas dudas típicas antes de empezar.
        </p>

        <div className="space-y-2">
          {[
            ["¿Necesito experiencia previa?", "No. Ajusto todo a tu nivel."],
            ["¿Cómo recibo mi rutina?", "En formato PDF."],
            ["¿Qué pasa si tengo poco tiempo?", "Adaptamos la rutina a tu disponibilidad real."],
            ["¿Puedo entrenar en casa?", "Sí, ajusto según tu equipamiento."],
            ["¿Puedo cambiar de plan?", "Sí, podés subir o bajar en cualquier momento."]
          ].map(([q, a], i) => (
            <details
              key={i}
              className="border border-neutral-200 dark:border-neutral-800
    rounded-lg px-3 py-2
    bg-white dark:bg-neutral-900
    text-sm">
             <summary className="cursor-pointer font-medium
  text-neutral-900 dark:text-neutral-100">

                {q}
              </summary>
             <p className="mt-2 text-neutral-600 dark:text-neutral-300 text-[13px]">
{a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* WHATSAPP FLOAT BUTTON */}
      <a
        href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Vengo%20de%20tu%20web%20y%20quiero%20información."
        target="_blank"
        className="fixed right-3 bottom-3 w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl shadow-lg hover:bg-emerald-600 transition md:right-5 md:bottom-5"
      >
        💬
      </a>
    </main>
  );
}
