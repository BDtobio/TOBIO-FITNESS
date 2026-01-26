"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RutinaForm() {
  const router = useRouter();
type RutinaFormData = {
  nombre: string;
  edad: string;
  peso: string;
  altura: string;
  objetivo: string;
  experiencia: string;
  dias: string;
  lesiones: string;
  equipamiento: string;
};

  const [form, setForm] = useState<RutinaFormData>({
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
  const { name, value } = e.target;

  // Nombre: solo letras y espacios
  if (name === "nombre") {
    const cleanValue = value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "");
    setForm({ ...form, nombre: cleanValue });
    return;
  }

  // Edad: solo números (máx 2 dígitos)
  if (name === "edad") {
    const cleanValue = value.replace(/\D/g, "").slice(0, 2);
    setForm({ ...form, edad: cleanValue });
    return;
  }

  // Altura: solo números, exactamente 3 dígitos
  if (name === "altura") {
    const cleanValue = value.replace(/\D/g, "").slice(0, 3);
    setForm({ ...form, altura: cleanValue });
    return;
  }

  // Peso: solo números (opcional pero recomendado)
  if (name === "peso") {
    const cleanValue = value.replace(/\D/g, "").slice(0, 3);
    setForm({ ...form, peso: cleanValue });
    return;
  }

  setForm({ ...form, [name]: value });
};

  const handleSubmit = () => {
    const dias = Number(form.dias);
    const tieneLesiones = form.lesiones.trim().length > 3;




    if (
  form.nombre.length < 3 ||
  form.edad.length < 2 ||
  form.altura.length !== 3
) {
  alert("Revisá los datos ingresados");
  return;
}

    let tipo: "rutina" | "programa" | "personalizado" = "rutina";
    let nivel: "principiante" | "intermedio" | "avanzado" = "principiante";

    
    // -------- NIVEL --------
    if (form.experiencia === "Intermedio") nivel = "intermedio";
    if (form.experiencia === "Avanzado") nivel = "avanzado";

    // -------- TIPO --------
    if (
      tieneLesiones ||
      form.objetivo === "Rendimiento / fuerza"
    ) {
      tipo = "personalizado";
    } else if (
      form.experiencia !== "Principiante" &&
      dias >= 4
    ) {
      tipo = "programa";
    } else {
      tipo = "rutina";
    }
    const edad = Number(form.edad);
const altura = Number(form.altura);
const diasNum = Number(form.dias);

if (
  form.nombre.length < 3 ||
  edad < 10 || edad > 80 ||
  altura < 140 || altura > 220 ||
  diasNum < 1 || diasNum > 7
) {
  alert("Revisá los datos ingresados");
  return;
}


    localStorage.setItem(
      "recomendacionEntrenamiento",
      JSON.stringify({ tipo, nivel })
    );

    router.push(`/planes#${tipo}-${nivel}`);
  };

  return (
    <main className="max-w-lg mx-auto px-4 py-12">
      <h1 className="text-2xl font-semibold mb-2">
        Descubrí qué plan es mejor para vos
      </h1>

      <p className="text-sm text-neutral-600 mb-6">
        Respondé estas preguntas y te recomendamos la mejor opción según tu nivel
        y objetivo.
      </p>

      <section className="space-y-4">
      {(
  [
    ["nombre", "Nombre"],
    ["edad", "Edad"],
    ["peso", "Peso (kg)"],
    ["altura", "Altura (cm)"],
  ] as Array<[keyof RutinaFormData, string]>
).map(([name, label]) => (

          <div key={name} className="flex flex-col">
            <label className="text-sm">{label}</label>
         <input
  name={name}
  value={form[name]}
  onChange={handleChange}
  placeholder={
    name === "nombre"
      ? "Ej: Juan Pérez"
      : name === "edad"
      ? "Ej: 25"
      : name === "peso"
      ? "Ej: 80"
      : "Ej: 175"
  }
  inputMode={
    name === "nombre" ? "text" : "numeric"
  }
  className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
/>

          </div>
        ))}

        <div className="flex flex-col">
          <label className="text-sm">Objetivo</label>
          <select
            name="objetivo"
            value={form.objetivo}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Elegir...</option>
            <option>Ganar masa muscular</option>
            <option>Perder grasa</option>
            <option>Recomposición corporal</option>
            <option>Rendimiento / fuerza</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm">Experiencia entrenando</label>
          <select
            name="experiencia"
            value={form.experiencia}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          >
            <option value="">Elegir...</option>
            <option>Principiante</option>
            <option>Intermedio</option>
            <option>Avanzado</option>
          </select>
        </div>

        <div className="flex flex-col">
          <label className="text-sm">Días disponibles por semana</label>
          <input
            name="dias"
            value={form.dias}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm">Lesiones o molestias (opcional)</label>
          <textarea
            name="lesiones"
            value={form.lesiones}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <div className="flex flex-col">
          <label className="text-sm">Equipamiento disponible</label>
          <textarea
            name="equipamiento"
            value={form.equipamiento}
            onChange={handleChange}
            className="border border-neutral-300 rounded-lg px-3 py-2 text-sm"
          />
        </div>

        <button
          onClick={handleSubmit}
          className="w-full bg-neutral-900 text-white rounded-full py-3 mt-4 hover:bg-black transition text-sm"
        >
          Ver recomendación
        </button>
      </section>
    </main>
  );
}
