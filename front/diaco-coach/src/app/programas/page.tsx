"use client";

import { motion } from "framer-motion";
import ProgramCard from "@/src/components/ProgramCard/ProgramCard";

export default function ProgramasPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-14">

      {/* HERO */}
      <motion.section
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block rounded-full bg-neutral-900 text-white px-4 py-1 text-xs mb-4">
          ⭐ Programas completos
        </span>

        <h1 className="font-HighTrial text-4xl md:text-6xl mb-5">
          Programas diseñados para progresar
        </h1>

        <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Mucho más que una rutina. Cada programa fue diseñado para ayudarte a
          progresar durante varios meses con una planificación completa,
          alimentación y entrenamiento organizado.
        </p>
      </motion.section>

      {/* ===================== */}
      {/* HIPERTROFIA */}
      {/* ===================== */}

      <section className="mb-20">
        <h2 className="font-HighTrial text-3xl mb-2">Hipertrofia</h2>

        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          Programa enfocado en aumentar masa muscular con una progresión clara y
          organizada.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <ProgramCard
            title="Hipertrofia Principiante"
            subtitle="Ideal si recién empezás"
            price="$30.000"
            features={[
              "Guía de alimentación",
              "Calentamiento",
              "Rutina completa",
              "Vuelta a la calma",
              "Progresión de cargas",
              "PDF completo",
            ]}
          />

          <ProgramCard
            title="Hipertrofia Intermedio"
            subtitle="Mayor volumen y planificación"
            price="$35.000"
            features={[
              "Progresión semanal",
              "Mayor volumen de entrenamiento",
              "Rutina estructurada",
              "Control de cargas",
              "PDF completo",
            ]}
          />

          <ProgramCard
            title="Hipertrofia Avanzado"
            subtitle="Máximo nivel de detalle"
            price="$40.000"
            features={[
              "Alta intensidad",
              "Periodización avanzada",
              "Optimización de fuerza e hipertrofia",
              "Seguimiento estructurado",
              "PDF premium",
            ]}
          />

        </div>
      </section>

      {/* ===================== */}
      {/* POWERBUILDING */}
      {/* ===================== */}

      <section className="mb-20">
        <h2 className="font-HighTrial text-3xl mb-2">Powerbuilding</h2>

        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          Combina fuerza e hipertrofia para mejorar rendimiento y estética al
          mismo tiempo.
        </p>

        <div className="grid gap-6 md:grid-cols-3">

          <ProgramCard
            title="Powerbuilding Principiante"
            subtitle="Introducción al Powerbuilding"
            price="$32.000"
            features={[
              "Base de fuerza",
              "Hipertrofia inicial",
              "Rutina completa",
              "Progresión simple",
              "PDF incluido",
            ]}
          />

          <ProgramCard
            title="Powerbuilding Intermedio"
            subtitle="Equilibrio fuerza + masa"
            price="$37.000"
            features={[
              "Fuerza progresiva",
              "Hipertrofia estructurada",
              "Planificación semanal",
              "Control de cargas",
              "PDF completo",
            ]}
          />

          <ProgramCard
            title="Powerbuilding Avanzado"
            subtitle="Alto rendimiento"
            price="$42.000"
            features={[
              "Fuerza máxima",
              "Periodización avanzada",
              "Volumen optimizado",
              "Seguimiento profesional",
              "PDF premium",
            ]}
          />

        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="rounded-3xl border-2 border-neutral-900 dark:border-white p-10 mb-20">
        <h2 className="font-HighTrial text-3xl text-center mb-10">
          ¿Por qué elegir un programa?
        </h2>

        <div className="grid gap-6 md:grid-cols-6 text-center">
          <div>🥗<p className="mt-2 text-sm">Guía de alimentación</p></div>
          <div>🔥<p className="mt-2 text-sm">Calentamiento</p></div>
          <div>💪<p className="mt-2 text-sm">Rutina completa</p></div>
          <div>🧘<p className="mt-2 text-sm">Vuelta a la calma</p></div>
          <div>📈<p className="mt-2 text-sm">Progresión de cargas</p></div>
          <div>📄<p className="mt-2 text-sm">PDF completo</p></div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center">
        <h2 className="font-HighTrial text-3xl mb-4">
          ¿No sabés qué programa elegir?
        </h2>

        <p className="text-neutral-600 dark:text-neutral-300 mb-8">
          Escribime por WhatsApp y te recomiendo el programa ideal según tu
          experiencia y objetivo.
        </p>

        <a
          href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Necesito%20ayuda%20para%20elegir%20un%20programa."
          target="_blank"
          className="inline-block rounded-full bg-neutral-900 text-white px-8 py-4 hover:bg-black transition"
        >
          Hablar por WhatsApp
        </a>
      </section>

    </main>
  );
}