import { title } from "@/components/primitives";
import React from "react";
import { Image } from "@nextui-org/image";
import { Chip } from "@nextui-org/chip";
import Link from "next/link";

const callouts = [
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/B7MoOlj.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    slug: "descubriendo-la-fisica",
    chipTitle: "D. la Física",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/RMbJBv4.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    slug: "geometria-vectorial",
    chipTitle: "G. Vectorial",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/KuIceJr.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    slug: "calculo-diferencial",
    chipTitle: "C. Diferencial",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/GZjiTw0.jpg",
    imageAlt:
      "Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.",
    slug: "algebra-y-trigonometria",
    chipTitle: "Algebra y T",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/VNSapZE.jpg",
    imageAlt:
      "Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.",
    slug: "algebra-lineal",
    chipTitle: "A. Lineal",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/tASsRUz.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    slug: "calculo-integral",
    chipTitle: "C. Integral",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/uQ70PEL.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    slug: "fisica-mecanica",
    chipTitle: "F. Mecánica",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/yRy945s.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    slug: "teoria-de-probabilida-y-colas",
    chipTitle: "Teoría  PyC",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/YMDKw8u.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    slug: "ecuaciones-diferenciales",
    chipTitle: "E. Diferenciales",
  },
  {
    name: "",
    description: "",
    imageSrc: "https://i.imgur.com/Ku35Rzb.jpg",
    imageAlt: "Collection of four insulated travel bottles on wooden shelf.",
    slug: "metodos-estadisticos",
    chipTitle: "M. Estadísticos",
  },
];
export default function Materias() {
  return (
    <div className="dark:bg-[#000000] rounded-large">
      <div className="mx-auto w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-10">
          <h2 className="text-2xl font-bold light light:text-black  dark dark:text-white">
            Materias Tronco Común
          </h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-5 lg:gap-x-6 lg:space-y-0">
            {callouts.map((callout,i) => (
              <div key={i} className="group relative">
                <div className="relative h-80 w-full overflow-hidden mt-10 rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                  <div className="relative">
                      <Link href={"/materias/" + callout.slug}>
                        <Image
                          isZoomed
                          width={240}
                          style={{ height: "320px"}}
                          src={callout.imageSrc}
                          alt={callout.imageAlt}
                        />
                        <div
                          className="absolute top-4 left-4 z-10"
                          style={{
                            width: "120px",

                            background: "linear-gradient(45deg, #6574cd, #f66d9b)",
                            border: "1px solid white",
                            boxShadow: "0 2px 5px rgba(255, 105, 180, 0.3)",
                            borderRadius: "4px",
                            color: "white",
                            padding: "4px",
                            marginTop: "10px",
                          }}
                        >
                          <div style={{ textAlign: "left" }}>
                            {callout.chipTitle}
                          </div>{" "}
                          {/* Utiliza el título personalizado del chip */}
                        </div>
                      </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
