import React, { useState } from "react";
import { Listbox, ListboxItem } from "@nextui-org/react";
import { IconWrapper } from "@/components/IconWrapper";
import { BugIcon } from "@/components/BugIcon";
import { PullRequestIcon } from "@/components/PullRequestIcon";
import { ChatIcon } from "@/components/ChatIcon";
import { PlayCircleIcon } from "@/components/PlayCircleIcon";
import { LayoutIcon } from "@/components/LayoutIcon";
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedItem } from '../redux/actions';

interface RootState {
  selectedItem: string; // Asegúrate de que el tipo coincida con el estado en tu aplicación
  // ... otros estados ...
}

export default function Sidebar() {

  const selectedItem = useSelector((state:RootState) => state.selectedItem); // Accede al estado global
  const dispatch = useDispatch();


  const handleItemClick = (key: any) => {
    // Despacha la acción para almacenar el nombre del elemento seleccionado en el estado global
    dispatch(setSelectedItem(key as string)); // Convierte a string si es necesario
  }
  
  
  return (
    <div>
      <Listbox
        aria-label="User Menu"
        onAction={handleItemClick} // Cuando se hace clic, llama a la función handleItemClick
        className="p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 max-w-[300px] overflow-visible shadow-small rounded-medium h-[540px]"
        itemClasses={{
          base:
            "px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80",
        }}
      >
        <ListboxItem
          key="clase"
          startContent={
            <IconWrapper className="bg-success/10 text-success">
              <BugIcon className="text-lg " />
            </IconWrapper>
          }
          className={`${
            selectedItem === "clase" ? "pointer-events-none bg-success" : ""
          }`}
        >
          Clases
        </ListboxItem>
        <ListboxItem
          key="taller"
          startContent={
            <IconWrapper className="bg-primary/10 text-primary">
              <PullRequestIcon className="text-lg " />
            </IconWrapper>
          }
          className={`${
            selectedItem === "taller" ? "pointer-events-none bg-success" : ""
          }`}
        >
          Talleres
        </ListboxItem>
        <ListboxItem
          key="parcial"
          startContent={
            <IconWrapper className="bg-secondary/10 text-secondary">
              <ChatIcon className="text-lg " />
            </IconWrapper>
          }
          className={`${
            selectedItem === "parcial" ? "pointer-events-none bg-success" : ""
          }`}
        >
          Parciales
        </ListboxItem>
        <ListboxItem
          key="video"
          startContent={
            <IconWrapper className="bg-warning/10 text-warning">
              <PlayCircleIcon className="text-lg " />
            </IconWrapper>
          }
          className={`${
            selectedItem === "video" ? "pointer-events-none bg-success" : ""
          }`}
        >
          Videos
        </ListboxItem>
        <ListboxItem
          key="ejercicio"
          startContent={
            <IconWrapper className="bg-default/50 text-foreground">
              <LayoutIcon className="text-lg " />
            </IconWrapper>
          }
          className={`${
            selectedItem === "ejercicio" ? "pointer-events-none bg-success" : ""
          }`}
        >
          Ejercicios
        </ListboxItem>
      </Listbox>
      
    </div>
  );
}
