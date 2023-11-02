'use client'
import React, { useState, useEffect } from "react";
import Show from "@/components/Show";
import Sidebar from "@/components/Sidebar";
import CardSidebar from "@/components/CardSidebar";
import TapPartial from "@/components/TabPartial";

interface ApiElement {
  nombre: string;
  materia: string;
  tipo: string;
  periodo: string;
  ruta: string;
}

export default function Page({ params }: { params: { slug: string } }) {
  const [tabValue, setTabValue] = useState("");
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
    if (tabValue === "") {
      setFilteredData(apiData);
    } else {
      const filtered = apiData.filter((item) => item.periodo.includes(tabValue));
      setFilteredData(filtered);
    }
  }, [tabValue, apiData]);

  const handleButtonClick = (buttonText: string) => {
    console.log(`Clic en el botón "${buttonText}"`);
    setTabValue(buttonText);
  };

  return (
    <div>
      My Post: {params.slug}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleButtonClick('Parcial 1')}>Parcial 1</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleButtonClick('Parcial 2')}>Parcial 2</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleButtonClick('Parcial 3')}>Parcial 3</button>
        <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={() => handleButtonClick('Parcial 4')}>Parcial 4</button>
      </div>

      <div className="flex">
        <div className="w-1/5 bg-red-700" style={{ height: '100vh' }}>
          <Sidebar />
        </div>

        <div className="w-3/5 bg-blue-500">
          valor del tab: {tabValue}
          {filteredData.map((item, index) => (
            <div key={index}>
              <p>Nombre: {item.nombre}</p>
              <p>Materia: {item.materia}</p>
              <p>Tipo: {item.tipo}</p>
              <p>Periodo: {item.periodo}</p>
              <p>Ruta: {item.ruta}</p>
            </div>
          ))}
        </div>

        <div className="w-1/5 bg-green-500">
          <CardSidebar />
        </div>
      </div>
    </div>
  );
}
