'use client'
import React, { useEffect, useState } from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
import {Chip} from "@nextui-org/react";
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
const color = ["primary","secondary","success","warning"];

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
            src="https://static.arteinformado.com/resources/app/docs/organizacion/20/119620/universidad_de_antioquia.jpg"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">Parciales</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          {parcialDates.length > 0 && (
            <div>
              <ul>
                  {parcialDates.map((date, index) => (
                    <div className="flex gap-4 ">
                      <div className="space-y-6">
                        <Chip color={color[index]} className=" mr-5 " variant="dot">Parcial {1+index}</Chip>
                        <Chip color={color[index]} className="text-white" variant="shadow">
                        <li key={index}>{date}</li>
                        </Chip>
                      </div>
                    </div>
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
