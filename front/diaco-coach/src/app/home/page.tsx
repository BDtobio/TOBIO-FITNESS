"use client";

export default function Home() {
  return (
    <main className="max-w-5xl mx-auto px-4 py-8 md:py-14">
      {/* HERO */}
      <section
        id="inicio"
        className="grid gap-6 md:grid-cols-[1.4fr,1fr] items-center mb-12 md:mb-20"
      >
        <div>
          <p className="inline-flex items-center text-[10px] tracking-wide border border-neutral-200 rounded-full px-2.5 py-1 bg-neutral-50 text-neutral-500 mb-3">
            Tobio Diaco Coach · Entrenamiento online
          </p>

          <h1 className="text-2xl md:text-4xl font-semibold leading-tight mb-2">
            Entrená con un plan diseñado para{" "}
            <span className="underline underline-offset-4 decoration-2">
              tu cuerpo y tu objetivo
            </span>
            .
          </h1>

          <p className="text-sm text-neutral-600 max-w-xl mb-5 leading-relaxed">
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

        <div className="hidden md:block border border-neutral-200 rounded-xl p-4 bg-neutral-50">
          <p className="text-[11px] uppercase tracking-[0.16em] text-neutral-500 mb-2">
            Entrenamiento 100% online
          </p>
          <h2 className="text-base font-semibold mb-2">
            Rutinas personalizadas. Seguimiento real.
          </h2>
          <p className="text-sm text-neutral-600">
            Planes mensuales con distintos niveles de acompañamiento.
          </p>
        </div>
      </section>

      {/* SOBRE MÍ */}
      <section id="sobre-mi" className="mb-14">
        <h2 className="text-lg md:text-2xl font-semibold mb-2">Sobre mí</h2>
        <div className="mt-3 max-w-2xl space-y-3 text-[13px] md:text-sm text-neutral-700 leading-relaxed">
          <p className="font-medium text-neutral-900">
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
      </section>

      {/* PLANES */}
      <section id="planes" className="mb-14">
        <h2 className="text-lg md:text-2xl font-semibold mb-1">
          Planes de entrenamiento online
        </h2>
        <p className="text-[13px] md:text-sm text-neutral-600 max-w-xl mb-6 leading-relaxed">
          Elegí tu nivel de seguimiento. Contratá por WhatsApp o pagá directo.
        </p>

        {/* GRID RESPONSIVE */}
        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          
          {/* --- PLAN INICIAL --- */}
          <article className="group border border-neutral-200 rounded-2xl p-4 bg-white flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <span className="text-[11px] px-2 py-1 rounded-full bg-neutral-100 text-neutral-600 mb-2 w-fit">
              💡 Ideal para empezar
            </span>

            <h3 className="text-base font-semibold mb-1">Plan Inicial</h3>
            <p className="text-lg font-bold text-neutral-900 mb-2">$10.000 / mes</p>

            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              Para quienes arrancan o vuelven al gym.
            </p>

            <ul className="text-sm text-neutral-700 space-y-1.5 mb-6">
              <li>• Rutina personalizada</li>
              <li>• 1 ajuste mensual</li>
              <li>• Soporte básico</li>
            </ul>

            <button
              onClick={() =>
                alert(
                  "Alias MP: tobio.diaco\nMonto: $10.000\n\nLuego enviá el comprobante por WhatsApp."
                )
              }
              className="w-full bg-neutral-900 text-white rounded-full py-2.5 text-sm font-medium hover:bg-black transition"
            >
              Pagar
            </button>

            <a
              href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Pagué%20el%20Plan%20Inicial.%20Te%20envío%20el%20comprobante."
              target="_blank"
              className="block text-center border border-neutral-300 rounded-full py-2.5 text-sm hover:bg-neutral-100 transition mt-2"
            >
              Enviar comprobante
            </a>
          </article>

          {/* --- PLAN PROGRESO --- */}
          <article className="group border-2 border-neutral-900 rounded-2xl p-4 bg-white flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="text-[11px] px-2 py-1 rounded-full bg-neutral-900 text-white mb-2 w-fit">
              ⭐ Más elegido
            </span>

            <h3 className="text-base font-semibold mb-1">Plan Progreso</h3>
            <p className="text-lg font-bold text-neutral-900 mb-2">$25.000 / mes</p>

            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              Evolución real con seguimiento.
            </p>

            <ul className="text-sm text-neutral-700 space-y-1.5 mb-6">
              <li>• Rutina dividida</li>
              <li>• Ajustes cada 2 semanas</li>
              <li>• Corrección técnica</li>
              <li>• Guía nutricional</li>
            </ul>

            <button
              onClick={() =>
                alert(
                  "Alias MP: tobio.diaco\nMonto: $25.000\n\nLuego enviá el comprobante por WhatsApp."
                )
              }
              className="w-full bg-neutral-900 text-white rounded-full py-2.5 text-sm font-medium hover:bg-black transition"
            >
              Pagar
            </button>

            <a
              href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Pagué%20el%20Plan%20Progreso.%20Te%20envío%20el%20comprobante."
              target="_blank"
              className="block text-center border border-neutral-300 rounded-full py-2.5 text-sm hover:bg-neutral-100 transition mt-2"
            >
              Enviar comprobante
            </a>
          </article>

          {/* --- PLAN PREMIUM --- */}
          <article className="group border border-neutral-200 rounded-2xl p-4 bg-white flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <span className="text-[11px] px-2 py-1 rounded-full bg-yellow-100 text-yellow-700 mb-2 w-fit">
              🔥 Transformación total
            </span>

            <h3 className="text-base font-semibold mb-1">Plan Premium</h3>
            <p className="text-lg font-bold text-neutral-900 mb-2">$40.000 / mes</p>

            <p className="text-sm text-neutral-600 mb-4 leading-relaxed">
              Acompañamiento completo.
            </p>

            <ul className="text-sm text-neutral-700 space-y-1.5 mb-6">
              <li>• Rutina detallada</li>
              <li>• Ajustes semanales</li>
              <li>• Seguimiento full</li>
              <li>• Guía nutricional avanzada</li>
              <li>• Videollamada mensual</li>
            </ul>

            <button
              onClick={() =>
                alert(
                  "Alias MP: tobio.diaco\nMonto: $40.000\n\nLuego enviá el comprobante por WhatsApp."
                )
              }
              className="w-full bg-neutral-900 text-white rounded-full py-2.5 text-sm font-medium hover:bg-black transition"
            >
              Pagar
            </button>

            <a
              href="https://wa.me/5493816437392?text=Hola%20Tobias!%20Pagué%20el%20Plan%20Premium.%20Te%20envío%20el%20comprobante."
              target="_blank"
              className="block text-center border border-neutral-300 rounded-full py-2.5 text-sm hover:bg-neutral-100 transition mt-2"
            >
              Enviar comprobante
            </a>
          </article>
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
              className="border border-neutral-200 rounded-lg p-3 bg-white text-sm"
            >
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full border border-neutral-800 text-[11px] font-semibold mb-2">
                {i + 1}
              </span>
              <h3 className="font-medium mb-1">{t}</h3>
              <p className="text-neutral-600 text-[13px] leading-relaxed">
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
            ["¿Cómo recibo mi rutina?", "En PDF o imagen organizada por WhatsApp."],
            ["¿Qué pasa si tengo poco tiempo?", "Adaptamos la rutina a tu disponibilidad real."],
            ["¿Puedo entrenar en casa?", "Sí, ajusto según tu equipamiento."],
            ["¿Puedo cambiar de plan?", "Sí, podés subir o bajar en cualquier momento."]
          ].map(([q, a], i) => (
            <details
              key={i}
              className="border border-neutral-200 rounded-lg px-3 py-2 bg-white text-sm"
            >
              <summary className="cursor-pointer font-medium text-neutral-900">
                {q}
              </summary>
              <p className="mt-2 text-neutral-600 text-[13px]">{a}</p>
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
