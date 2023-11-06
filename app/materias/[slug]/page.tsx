'use client'
import React, { useState, useEffect } from "react";
import Show from "@/components/Show";
import Sidebar from "@/components/Sidebar";
import CardSidebar from "@/components/CardSidebar";
import TapPartial from "@/components/TabPartial";
import { useSelector } from 'react-redux';
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import { button } from "@nextui-org/theme";


interface ApiElement {
  nombre: string;
  materia: string;
  tipo: string;
  periodo: string;
  ruta: string;
  img:string;
  parcial:{
    fecha1: string;
    fecha2: string;
    fecha3: string;
    fecha4: string;
  };
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
  const [activeButton, setActiveButton] = useState<string | null>(null);

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
    if (activeButton === buttonText) {
      setActiveButton(buttonText);
    } else {
      setActiveButton(buttonText);
    }
  };

  React.useEffect(() => {
    console.log('Estado de Redux:', selectedItem);
  }, [selectedItem]);

  return (
    <div>
      My Post: {params.slug}
      <div className="flex justify-center mb-5">
        <Button 
          variant={activeButton === 'Parcial 1' ? 'flat' : undefined}
          className="text-white px-4 py-2 rounded mr-2" 
          color="success" 
          onClick={() => handleButtonClick('Parcial 1')}
        >
          Parcial 1
        </Button>
        <Button
          variant={activeButton === 'Parcial 2' ? 'flat' : undefined}
          className="text-white px-4 py-2 rounded mr-2"
          color="success" onClick={() => handleButtonClick('Parcial 2')}
        >
          Parcial 2
        </Button>
        <Button
          variant={activeButton === 'Parcial 3' ? 'flat' : undefined}
          className="text-white px-4 py-2 rounded mr-2"
          color="success" onClick={() => handleButtonClick('Parcial 3')}
        >
          Parcial 3
        </Button>
        <Button 
          variant={activeButton === 'Parcial 4' ? 'flat' : undefined}
          className="text-white px-4 py-2 rounded"
          color="success" onClick={() => handleButtonClick('Parcial 4')}
        >
          Parcial 4
        </Button>
      </div>

      <div className="flex" style={{ height: '540px' }}>
        <div className="w-1/5  ml-3 mr-3" >
          <Sidebar />
        </div>
        
        <div className="w-3/5 p-5 pt-0  overflow-auto ">
          <div className="w-500  gap-5 h-500  grid grid-cols-2 sm:grid-cols-3 " style={{ justifyContent: 'center' }}>
            {filteredData.map((item, index) => (
              
                <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
                  <Link className="w-full" href={item.ruta} target="_blank">
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
                  </Link>
                </Card>
              
            ))}
          </div>
        </div>

        <div className="w-1/5 mr-3 ml-3">
          <CardSidebar slug={params.slug}/>
        </div>
      </div>
    </div>
  );
}