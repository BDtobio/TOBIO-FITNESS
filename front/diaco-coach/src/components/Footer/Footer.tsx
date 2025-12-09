export default function Footer() {
  return (
    <footer className="w-full mt-20 py-10 border-t border-neutral-200 bg-white">

      <div className="max-w-5xl mx-auto px-4 text-center text-sm">
        
        {/* BRAND */}
        <p className="text-neutral-900 font-semibold tracking-tight">
          Diaco Coach
        </p>

        <p className="text-neutral-600 mt-1">
          Entrenamiento online · Rutinas personalizadas
        </p>

        {/* CONTACTO */}
        <a
          href="https://wa.me/5493816437392"
          target="_blank"
          className="inline-block mt-4 px-5 py-2.5 rounded-full bg-neutral-900 text-white text-sm font-medium hover:bg-black transition"
        >
          Contactar por WhatsApp
        </a>

        {/* COPYRIGHT */}
        <p className="mt-6 text-neutral-500">
          © {new Date().getFullYear()} Tobías Diaco — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}
