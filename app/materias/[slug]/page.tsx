'use client'
import React, { useState, useEffect } from "react";
import Show from "@/components/Show";
import Sidebar from "@/components/Sidebar";
import CardSidebar from "@/components/CardSidebar";
import TapPartial from "@/components/TabPartial";
import { useSelector } from 'react-redux';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from "next/link";


interface ApiElement {
  nombre: string;
  materia: string;
  tipo: string;
  periodo: string;
  ruta: string;
  img:string;
}

interface RootState {
  selectedItem: string;
  // ... otros estados ...
}

export default function Page({ params }: { params: { slug: string } }) {
  const selectedItem = useSelector((state: RootState) => state.selectedItem);
  const [tabValue, setTabValue] = useState(""); // Inicializa tabValue con un valor vacío
  const [apiData, setApiData] = useState<ApiElement[]>([]);
  const [filteredData, setFilteredData] = useState<ApiElement[]>([]);

  useEffect(() => {
    fetch("https://6513538b8e505cebc2e9c6bc.mockapi.io/api/v1/recursos")
      .then((response) => response.json())
      .then((data: ApiElement[]) => {
        setApiData(data);
      });
  }, []);

  useEffect(() => {
    if (tabValue) { // Verifica si tabValue no está vacío
      const filtered = apiData.filter((item) => {
        return (
          item.materia.includes(params.slug) &&
          item.tipo.includes(selectedItem) &&
          item.periodo.includes(tabValue)
        );
      });

      setFilteredData(filtered);
    } else {
      setFilteredData([]); // No muestra nada si tabValue está vacío
    }
  }, [tabValue, apiData, params.slug, selectedItem]);

  const handleButtonClick = (buttonText: string) => {
    setTabValue(buttonText);
  };

  React.useEffect(() => {
    console.log('Estado de Redux:', selectedItem);
  }, [selectedItem]);

  return (
    <div>
      My Post: {params.slug}
      <p>Item seleccionado: {selectedItem}</p>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleButtonClick('Parcial 1')}>Parcial 1</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleButtonClick('Parcial 2')}>Parcial 2</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleButtonClick('Parcial 3')}>Parcial 3</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleButtonClick('Parcial 4')}>Parcial 4</button>
      </div>

      <div className="flex" style={{ height: '100vh' }}>
        <div className="w-1/5 bg-red-700" >
          <Sidebar />
        </div>

        <div className="w-3/5 bg-blue-500   ">
          <div className="w-500  gap-5 h-500 m-10 grid grid-cols-2 sm:grid-cols-3" style={{ justifyContent: 'center' }}>
            {filteredData.map((item, index) => (
              <Link className="w-full h-full" href={item.ruta} target="_blank">
                <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                  <CardBody className="overflow-visible p-0">
                    <Image
                      shadow="sm"
                      radius="lg"
                      width="100%"
                      alt={item.nombre}
                      className="w-full object-cover h-[140px]"
                      src={item.img}
                    />
                  </CardBody>
                  <CardFooter className="text-small justify-between">
                    <b>{item.nombre}</b>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        <div className="w-1/5 bg-green-500">
          <CardSidebar />
        </div>
      </div>
    </div>
  );
}