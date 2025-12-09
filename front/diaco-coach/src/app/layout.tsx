import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";


export const metadata: Metadata = {
  title: "Tobio Coach | Entrenamiento Online Personalizado",
  description:
    "Planes de entrenamiento online personalizados por Tobías Diaco. Rutinas a medida, seguimiento por WhatsApp y distintos niveles de acompañamiento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <html lang="es">
      <body className="bg-white text-neutral-900">
        <Navbar />
        <div className="pt-20">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}