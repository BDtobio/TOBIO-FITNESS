"use client";

import { motion } from "framer-motion";

const rutinas = [
  {
    titulo: "Arnold Split",
    descripcion:
      "La clásica rutina inspirada en Arnold. Ideal para maximizar la hipertrofia con una alta frecuencia de entrenamiento.",
    planes: [
      {
        nivel: "Principiante",
        precio: "$12.000",
        descripcion: "Ideal para empezar desde cero.",
      },
      {
        nivel: "Intermedio",
        precio: "$15.000",
        descripcion: "Más volumen e intensidad.",
      },
      {
        nivel: "Avanzado",
        precio: "$18.000",
        descripcion: "Pensada para quienes ya entrenan hace tiempo.",
      },
    ],
  },
  {
    titulo: "Push Pull Legs (PPL)",
    descripcion:
      "Una de las divisiones más utilizadas actualmente para desarrollar fuerza y masa muscular.",
    planes: [
      {
        nivel: "Principiante",
        precio: "$12.000",
        descripcion: "Aprendé la técnica correcta desde el inicio.",
      },
      {
        nivel: "Intermedio",
        precio: "$15.000",
        descripcion: "Mayor frecuencia y progresión.",
      },
      {
        nivel: "Avanzado",
        precio: "$18.000",
        descripcion: "Más volumen para seguir progresando.",
      },
    ],
  },
];

export default function RutinasPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-14">

      {/* HERO */}

      <section className="text-center mb-20">

        <span className="inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 px-4 py-1 text-xs mb-5">
          🧩 Rutinas prearmadas
        </span>

        <h1 className="font-HighTrial text-4xl md:text-6xl mb-5">
          Elegí una rutina lista para empezar hoy
        </h1>

        <p className="max-w-2xl mx-auto text-neutral-600 dark:text-neutral-300 leading-relaxed">
          Rutinas completas listas para descargar. Diseñadas para ayudarte a
          ganar masa muscular y aumentar fuerza sin perder tiempo armando tu
          propio entrenamiento.
        </p>

      </section>

      {rutinas.map((grupo, index) => (

        <section key={index} className="mb-24">

          <h2 className="font-HighTrial text-3xl mb-3">
            {grupo.titulo}
          </h2>

          <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-3xl">
            {grupo.descripcion}
          </p>

          <div className="grid gap-6 md:grid-cols-3">

            {grupo.planes.map((plan, i) => (

              <motion.article
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition"
              >

                <span className="inline-block rounded-full bg-neutral-100 dark:bg-neutral-800 px-3 py-1 text-xs mb-4">
                  🧩 Rutina
                </span>

                <h3 className="text-xl font-semibold mb-2">
                  {plan.nivel}
                </h3>

                <p className="text-2xl font-bold mb-3">
                  {plan.precio}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-5">
                  {plan.descripcion}
                </p>

                <ul className="space-y-2 text-sm mb-7">
                  <li>✔ Calentamiento</li>
                  <li>✔ Rutina completa</li>
                  <li>✔ Vuelta a la calma</li>
                  <li>✔ PDF descargable</li>
                  <li>✔ Pago único</li>
                </ul>

                <a
                  href={`https://wa.me/5493816437392?text=Hola%20Tobias!%20Quiero%20la%20rutina%20${grupo.titulo}%20${plan.nivel}.`}
                  target="_blank"
                  className="block rounded-full bg-neutral-900 text-white text-center py-3 hover:bg-black transition"
                >
                  Quiero esta rutina
                </a>

              </motion.article>

            ))}

          </div>

        </section>

      ))}

      {/* BENEFICIOS */}

      <section className="rounded-3xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 p-10 mb-20">

        <h2 className="font-HighTrial text-3xl text-center mb-10">
          ¿Por qué elegir una rutina?
        </h2>

        <div className="grid gap-6 md:grid-cols-5 text-center">

          <div>
            🔥
            <p className="mt-2 text-sm">Calentamiento</p>
          </div>

          <div>
            💪
            <p className="mt-2 text-sm">Rutina completa</p>
          </div>

          <div>
            🧘
            <p className="mt-2 text-sm">Vuelta a la calma</p>
          </div>

          <div>
            📄
            <p className="mt-2 text-sm">PDF descargable</p>
          </div>

          <div>
            💳
            <p className="mt-2 text-sm">Pago único</p>
          </div>

        </div>

      </section>

      {/* CTA */}

      <section className="text-center">

        <h2 className="font-HighTrial text-3xl mb-4">
          ¿No sabés cuál elegir?
        </h2>

        <p className="text-neutral-600 dark:text-neutral-300 mb-8 max-w-xl mx-auto">
          Contame cuál es tu objetivo y te recomiendo la rutina que mejor se adapte a vos.
        </p>

        <a
          href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Necesito%20ayuda%20para%20elegir%20una%20rutina."
          target="_blank"
          className="inline-flex items-center justify-center rounded-full px-8 py-4 bg-neutral-900 text-white hover:bg-black transition"
        >
          Hablar por WhatsApp
        </a>

      </section>

    </main>
  );
}