"use client";

type ProgramCardProps = {
  title: string;
  subtitle: string;
  price: string;
  features: string[];
};

export default function ProgramCard({
  title,
  subtitle,
  price,
  features,
}: ProgramCardProps) {
  return (
    <div className="rounded-2xl border-2 border-neutral-900 dark:border-white p-6 shadow-md hover:shadow-xl transition flex flex-col justify-between">
      
      <div>
        <h3 className="font-semibold text-xl mb-1">{title}</h3>
        <p className="text-neutral-500 mb-4">{subtitle}</p>

        <p className="text-2xl font-bold mb-5">{price}</p>

        <ul className="space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
          {features.map((f, i) => (
            <li key={i} className="flex gap-2">
              <span>✔</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>

      <a
        href="#"
        className="mt-6 block text-center rounded-full bg-neutral-900 text-white py-3 hover:bg-black transition"
      >
        Comprar programa
      </a>
    </div>
  );
}