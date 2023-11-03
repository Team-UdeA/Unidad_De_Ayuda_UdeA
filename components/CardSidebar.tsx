'use client'
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

// Definir una interfaz para la respuesta de la API
interface Recurso {
  materia: string;
  parcial: {
    fecha1: string;
    fecha2: string;
    fecha3: string;
    fecha4: string;
  };
}

// Definir una función para realizar la solicitud a la API
async function fetchData(slug: string): Promise<Recurso | undefined> {
  const response = await fetch("https://6513538b8e505cebc2e9c6bc.mockapi.io/api/v1/recursos");
  const data = await response.json();
  const resource = data.find((item: Recurso) => item.materia === slug);

  return resource;
}

export default function CardSidebar({ slug }: { slug: string }) {
  const [parcialDates, setParcialDates] = useState<string[]>([]);

  useEffect(() => {
    // Llamar a la función fetchData para obtener el recurso correspondiente
    fetchData(slug)
      .then((resource) => {
        if (resource) {
          const parcialDates = Object.values(resource.parcial);
          setParcialDates(parcialDates);
        }
      })
      .catch((error) => {
        console.error("Error al obtener los datos de la API", error);
      });
  }, [slug]);

  return (
    <div>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">NextUI</p>
            <p className="text-small text-default-500">nextui.org</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          {parcialDates.length > 0 && (
            <div>
              <p>Fechas de parciales:</p>
              <ul>
                {parcialDates.map((date, index) => (
                  <li key={index}>{date}</li>
                ))}
              </ul>
            </div>
          )}
        </CardBody>
        <Divider />
        <CardFooter>
          <Link isExternal showAnchorIcon href="https://github.com/nextui-org/nextui">
            Ver calendario Oficial
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
