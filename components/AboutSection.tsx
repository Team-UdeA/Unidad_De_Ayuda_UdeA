"use client";
import React from "react";


const AboutSection: React.FC = () => {
  return (
    <section className="light light:text-black  dark dark:text-white mb-32 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal" id="about">
      <div className="md:grid md:grid-cols-1 gap-8 items-center py-8 w-90 px-4 xl:gap-10 sm:py-10 xl:px-10">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h3 className="text-4xl text-center  sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">Objetivo</h3>
          <p className="text-2xl lg:text-2x1">
          Unidad de Ayuda es una plataforma diseñada para
          ofrecer contenido complementario a los estudiantes de los primeros semestres
          de las carreras de ingeniería en la Universidad de Antioquia. Con un enfoque
          en ayudar en la búsqueda de material de estudio adicional, la página
          proporciona acceso a diversos recursos académicos esenciales, como clases,
          talleres, parciales, videos y ejercicios, todo organizado de manera eficiente
          para facilitar la experiencia de aprendizaje en los cursos del tronco común.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

