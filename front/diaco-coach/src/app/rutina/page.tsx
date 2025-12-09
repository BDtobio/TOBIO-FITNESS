/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RutinaForm() {
  const router = useRouter();

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

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const diasNum = Number(form.dias);
    let plan = "";

    // 📌 Lógica para recomendar plan
    if (form.experiencia === "Principiante" || diasNum <= 3) {
      plan = "inicial";
    } else if (
      (form.experiencia === "Intermedio" && diasNum >= 3) ||
      (form.objetivo === "Recomposición corporal" && diasNum >= 4)
    ) {
      plan = "progreso";
    } else if (
      form.experiencia === "Avanzado" ||
      form.objetivo === "Rendimiento / fuerza" ||
      diasNum >= 5
    ) {
      plan = "premium";
    } else {
      plan = "inicial";
    }

    // Guardamos la recomendación
    localStorage.setItem("rutinaPlanRecomendado", plan);

    // Redirigimos a la sección del plan
    router.push(`/planes#${plan}`);
  };

  return (
    <main className="max-w-lg mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-2">Formulario para rutina personalizada</h1>

      <section className="space-y-4">
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
          <label>Objetivo</label>
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
          <label>Experiencia entrenando</label>
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

        {/* DÍAS */}
        <div className="flex flex-col">
          <label>Días disponibles por semana</label>
          <input
            name="dias"
            value={form.dias}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* LESIONES */}
        <div className="flex flex-col">
          <label>Lesiones (opcional)</label>
          <textarea
            name="lesiones"
            value={form.lesiones}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* EQUIPAMIENTO */}
        <div className="flex flex-col">
          <label>Equipamiento disponible</label>
          <textarea
            name="equipamiento"
            value={form.equipamiento}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        {/* BOTÓN */}
        <button
          onClick={handleSubmit}
          className="w-full bg-neutral-900 text-white rounded-full py-2.5 mt-3 hover:bg-black transition text-sm"
        >
          Ver mi plan recomendado
        </button>
      </section>
    </main>
  );
}
