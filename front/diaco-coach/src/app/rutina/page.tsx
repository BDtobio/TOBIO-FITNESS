/* eslint-disable @typescript-eslint/no-explicit-any */
// app/rutina/page.tsx
"use client";

import { useState } from "react";

export default function RutinaForm() {
  const [form, setForm] = useState({
    nombre: "",
    edad: "",
    peso: "",
    altura: "",
    objetivo: "",
    experiencia: "",
    dias: "",
    lesiones: "",
    equipamiento: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const msg = encodeURIComponent(
      `Hola Tobias! Quiero una rutina personalizada.\n\n` +
        `👤 Nombre: ${form.nombre}\n` +
        `🎯 Objetivo: ${form.objetivo}\n` +
        `📅 Experiencia: ${form.experiencia}\n` +
        `💪 Días disponibles: ${form.dias}\n` +
        `⚖️ Peso: ${form.peso} kg\n` +
        `📏 Altura: ${form.altura} cm\n` +
        `🩺 Lesiones: ${form.lesiones}\n` +
        `🏋 Equipamiento: ${form.equipamiento}\n\n` +
        `Edad: ${form.edad}`
    );

    window.open(`https://wa.me/5493816437392?text=${msg}`, "_blank");
  };

  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">Formulario para rutina personalizada</h1>
      <p className="text-neutral-600 mb-6 text-sm">
        Completá estos datos y te armo una rutina adaptada a tu nivel, objetivo y horarios.
      </p>

      <section className="space-y-4">
        {/* FORM INPUTS */}
        {[
          ["nombre", "Nombre completo"],
          ["edad", "Edad"],
          ["peso", "Peso (kg)"],
          ["altura", "Altura (cm)"],
        ].map(([name, label]) => (
          <div key={name} className="flex flex-col">
            <label className="text-sm text-neutral-700">{label}</label>
            <input
              name={name}
              value={(form as any)[name]}
              onChange={handleChange}
              className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
            />
          </div>
        ))}

        {/* OBJETIVO */}
        <div className="flex flex-col">
          <label className="text-sm text-neutral-700">Objetivo</label>
          <select
            name="objetivo"
            value={form.objetivo}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Elegir...</option>
            <option value="Ganar masa muscular">Ganar masa muscular</option>
            <option value="Perder grasa">Perder grasa</option>
            <option value="Recomposición corporal">Recomposición corporal</option>
            <option value="Rendimiento / fuerza">Rendimiento / fuerza</option>
          </select>
        </div>

        {/* EXPERIENCIA */}
        <div className="flex flex-col">
          <label className="text-sm text-neutral-700">Experiencia entrenando</label>
          <select
            name="experiencia"
            value={form.experiencia}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Elegir...</option>
            <option value="Principiante">Principiante</option>
            <option value="Intermedio">Intermedio</option>
            <option value="Avanzado">Avanzado</option>
          </select>
        </div>

        {/* DÍAS DISPONIBLES */}
        <div className="flex flex-col">
          <label className="text-sm text-neutral-700">Días disponibles por semana</label>
          <input
            name="dias"
            value={form.dias}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* LESIONES */}
        <div className="flex flex-col">
          <label className="text-sm text-neutral-700">Lesiones (opcional)</label>
          <textarea
            name="lesiones"
            value={form.lesiones}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* EQUIPAMIENTO */}
        <div className="flex flex-col">
          <label className="text-sm text-neutral-700">Equipamiento disponible</label>
          <textarea
            name="equipamiento"
            value={form.equipamiento}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* BOTÓN ENVIAR */}
        <button
          onClick={handleSubmit}
          className="w-full bg-neutral-900 text-white rounded-full py-2.5 mt-3 hover:bg-black transition text-sm"
        >
          Enviar por WhatsApp
        </button>
      </section>
    </main>
  );
}
