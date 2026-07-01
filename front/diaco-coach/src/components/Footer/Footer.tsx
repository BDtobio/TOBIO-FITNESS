
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
export default function Footer() {
  return (
    <footer
      className="w-full mt-18 py-10 border-t border-neutral-200 bg-white
      dark:border-neutral-800 dark:bg-neutral-950"
    >
      <div className="max-w-5xl mx-auto px-4 text-center text-sm">

        {/* BRAND */}
        <p className="text-neutral-900 font-semibold tracking-tight dark:text-white">
          Diaco Coach
        </p>

        <p className="text-neutral-600 mt-1 dark:text-neutral-400">
          Entrenamiento online · Rutinas personalizadas
        </p>

        {/* BOTÓN */}
        <a
          href="https://wa.me/5493816437392"
          target="_blank"
          className="inline-block mt-4 px-5 py-2.5 rounded-full
          bg-neutral-900 text-white text-sm font-medium
          hover:bg-black transition
          dark:bg-white dark:text-black dark:hover:bg-neutral-200"
        >
          Contactar por WhatsApp
        </a>

        {/* REDES */}
        <div className="mt-8">
          <p className="text-xs uppercase tracking-[0.25em] text-neutral-500 mb-4">
            Seguime
          </p>

         <div className="flex justify-center gap-6 mt-8">
  <a
    href="https://instagram.com/TUUSUARIO"
    target="_blank"
    rel="noreferrer"
    className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition hover:scale-110"
  >
    <FaInstagram size={24} />
  </a>

  <a
    href="https://tiktok.com/@TUUSUARIO"
    target="_blank"
    rel="noreferrer"
    className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition hover:scale-110"
  >
    <FaTiktok size={22} />
  </a>

  <a
    href="https://youtube.com/@TUUSUARIO"
    target="_blank"
    rel="noreferrer"
    className="text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition hover:scale-110"
  >
    <FaYoutube size={24} />
  </a>
</div>
        </div>

        {/* COPYRIGHT */}
        <p className="mt-8 text-neutral-500 dark:text-neutral-500">
          © {new Date().getFullYear()} Tobías Diaco — Todos los derechos reservados
        </p>
      </div>
    </footer>
  );
}