"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
function Carousel() {
  const images = ["/gym.png", "/gym.png", "/gym.png"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setIndex((prev) => (prev + 1) % images.length),
      4000
    );
    return () => clearInterval(interval);
  }, []);

 return (
  <div className="relative h-[320px] sm:h-[300px] md:h-[500px]">
    {/* IMÁGENES */}
    {images.map((src, i) => (
      <div
        key={i}
        className={`absolute inset-0 transition-opacity duration-700 ${
          i === index ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={src}
          alt={`Slide ${i + 1}`}
          fill
          className="object-cover"
          priority={i === 0}
        />
      </div>
    ))}

    {/* OVERLAY OSCURO (opcional pero recomendado) */}
    <div className="absolute inset-0 bg-black/40" />

    {/* TEXTO CENTRADO */}
    <div className="absolute inset-0 flex items-center justify-center">
      <h2 className="text-white text-3xl sm:text-4xl md:text-6xl font-bold tracking-wide">
        TOBIAS DIACO
      </h2>
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
  mb-3">

            Tobio Diaco Coach · Entrenamiento online
          </p>

        <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-2
  text-neutral-900 dark:text-neutral-100">

            Entrená con un plan diseñado para{" "}
            <span className="underline underline-offset-4 decoration-2">
              tu cuerpo y tu objetivo
            </span>
            .
          </h1>

         <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xl mb-5 leading-relaxed">

            Basta de rutinas genéricas. Empezá a entrenar con un plan creado para vos, tu nivel
            y tu tiempo disponible.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#planes"
              className="inline-flex items-center justify-center rounded-full w-full sm:w-auto px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white hover:bg-black transition"
            >
              Ver planes
            </a>

            <a
              href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Quiero%20info%20sobre%20tus%20rutinas."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full w-full sm:w-auto px-5 py-2.5 text-sm font-medium border border-neutral-300 text-neutral-800 hover:bg-neutral-100 transition"
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


  <main className="max-w-5xl mx-auto px-4 py-8 md:py-14">
    {/* HERO */}
    ...
  </main>
</>


      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="mb-14">
       <h2 className="text-lg md:text-2xl font-semibold mb-2
  text-neutral-900 dark:text-neutral-100">
Sobre mí</h2>
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
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium bg-neutral-900 text-white hover:bg-black transition w-full sm:w-auto"
          >
            Hablar con Diaco Coach
          </a>
        </div>
      </section>{/* PLANES */}
<section id="planes" className="mb-20">
  <h2 className="text-lg md:text-2xl font-semibold mb-1">
    Planes de entrenamiento
  </h2>
  <p className="text-[13px] md:text-sm text-neutral-600 max-w-xl mb-8 leading-relaxed">
    Elegí según tu nivel y objetivo. Todos son de pago único.
  </p>

  {/* ================= RUTINAS PREARMADAS ================= */}
  <h3 className="text-base font-semibold mb-4">Rutinas prearmadas</h3>

  <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 mb-12">
    {[
      { nivel: "Principiante", precio: "$12.000", desc: "Ideal para empezar desde cero." },
      { nivel: "Intermedio", precio: "$15.000", desc: "Para quienes ya entrenan." },
      { nivel: "Avanzado", precio: "$18.000", desc: "Mayor volumen e intensidad." }
    ].map((r, i) => (
      <article
        key={i}
         className="group
    border border-neutral-200 dark:border-neutral-800
    rounded-2xl p-4
    bg-white dark:bg-neutral-900
    shadow-sm
    transition-all duration-300 ease-out
    hover:shadow-xl hover:-translate-y-1
    hover:border-neutral-900 dark:hover:border-neutral-100">
      <span className="text-[11px] px-2 py-1 rounded-full
  bg-neutral-100 dark:bg-neutral-800
  text-neutral-600 dark:text-neutral-300 mb-2 w-fit
  transition group-hover:bg-neutral-900 group-hover:text-white">

          🧩 Rutina
        </span>

        <h4 className="text-base font-semibold mb-1
  text-neutral-900 dark:text-neutral-100">
{r.nivel}</h4>
        <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-4">
{r.precio}</p>

        <p className="text-sm text-neutral-600 mb-4">{r.desc}</p>

       <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1.5 mb-5">

          <li>• Objetivo definido</li>
          <li>• Duración 6–8 semanas</li>
          <li>• Formato PDF</li>
        </ul>

        <a
          href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Quiero%20una%20rutina%20prearmada."
          target="_blank"
          className="block text-center bg-neutral-900 text-white rounded-full py-2.5 text-sm
                     transition hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
        >
          Comprar
        </a>
      </article>
    ))}
  </div>

  {/* ================= PROGRAMAS ================= */}
  <h3 className="text-base font-semibold mb-4">Programas de entrenamiento</h3>

  <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 mb-16">
    {[
      { nivel: "Principiante", precio: "$30.000" },
      { nivel: "Intermedio", precio: "$35.000" },
      { nivel: "Avanzado", precio: "$40.000" }
    ].map((p, i) => (
      <article
        key={i}
        className="group
    border-2 border-neutral-900 dark:border-neutral-100
    rounded-2xl p-4
    bg-white dark:bg-neutral-900
    shadow-md
    transition-all duration-300 ease-out
    hover:shadow-2xl hover:-translate-y-2 hover:scale-[1.02]">
        <span className="text-[11px] px-2 py-1 rounded-full bg-neutral-900 text-white mb-2 w-fit
                         transition group-hover:scale-105">
          ⭐ Programa
        </span>

        <h4 className="text-base font-semibold mb-1
  text-neutral-900 dark:text-neutral-100">
{p.nivel}</h4>
        <p className="text-lg font-bold mb-2">{p.precio}</p>

       <ul className="text-sm text-neutral-700 dark:text-neutral-300 space-y-1.5 mb-6">

          <li>• Periodización</li>
          <li>• Progresión de cargas</li>
          <li>• Volumen e intensidad planificados</li>
          <li>• Gimnasio o casa</li>
        </ul>

        <a
          href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Quiero%20un%20programa%20de%20entrenamiento."
          target="_blank"
          className="block text-center bg-neutral-900 text-white rounded-full py-2.5 text-sm
                     transition hover:bg-black hover:scale-[1.02] active:scale-[0.98]"
        >
          Comprar
        </a>
      </article>
    ))}
  </div>

  {/* ================= PERSONALIZADO PREMIUM ================= */}
 <div
  className="group
  border border-yellow-400
  bg-gradient-to-br
  from-yellow-50 to-white
  dark:from-yellow-900/20 dark:to-neutral-900
  rounded-3xl p-6 max-w-3xl mx-auto text-center
  shadow-lg transition-all duration-300
  hover:shadow-2xl hover:-translate-y-2
  hover:ring-2 hover:ring-yellow-300"
>
    <span className="inline-block text-[11px] px-3 py-1 rounded-full bg-yellow-200 text-yellow-800 mb-3">
      🔥 Servicio premium
    </span>

    <h3 className="text-lg font-semibold mb-2">
      Entrenamiento 100% personalizado
    </h3>

    <p className="text-sm text-neutral-700 mb-4 max-w-xl mx-auto">
      Plan creado desde cero según tu cuerpo, objetivos, tiempos y experiencia.
      Seguimiento real y ajustes según progreso.
    </p>

    <p className="text-2xl font-bold mb-5 transition group-hover:scale-110">
      $50.000
    </p>

    <a
      href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Quiero%20un%20entrenamiento%20personalizado."
      target="_blank"
      className="inline-flex items-center justify-center bg-neutral-900 text-white rounded-full px-6 py-3 text-sm
                 transition hover:bg-black hover:scale-[1.03] active:scale-[0.97]"
    >
      Hablar con vos
    </a>
  </div>
</section>



      {/* CÓMO FUNCIONA */}
      <section id="como-funciona" className="mb-14">
        <h2 className="text-lg md:text-2xl font-semibold mb-1">¿Cómo funciona?</h2>
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
