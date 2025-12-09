"use client";
import { useEffect, useState } from "react";

export default function Planes() {
  const [planRecomendado, setPlanRecomendado] = useState("");

  useEffect(() => {
    const plan = localStorage.getItem("rutinaPlanRecomendado");
    if (plan) setPlanRecomendado(plan);
  }, []);

  return (
    <main className="px-4 py-10">

      {/* 🔥 cartel arriba del todo */}
      {planRecomendado && (
        <div className="p-3 mb-6 bg-yellow-100 text-yellow-800 rounded-xl text-sm font-medium">
          ⭐ Este es el plan ideal para vos según tus datos:
          <span className="font-bold uppercase ml-1">{planRecomendado}</span>
        </div>
      )}

      <section className="grid gap-6">

        {/* --- PLAN INICIAL --- */}
        <article
          id="inicial"
          className="group border border-neutral-200 rounded-2xl p-4 bg-white flex flex-col shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
        >
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
        <article
          id="progreso"
          className="group border-2 border-neutral-900 rounded-2xl p-4 bg-white flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
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
        <article
          id="premium"
          className="group border border-neutral-200 rounded-2xl p-4 bg-white flex flex-col shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
        >
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

      </section>
    </main>
  );
}
