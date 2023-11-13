"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import einsteinImage from "./img/einstein.jpg";
const TitleHome = () => {
  return (
    <section className="lg:py-16">
    <div className="grid grid-cols-1 sm:grid-cols-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-9 place-self-center text-center sm:text-left justify-self-start"
      >
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Unidad De Ayuda
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Einstein Dijo..",
                1000,
                '"'+'El Genio se hace',
                1000,
                "con 1% de talento",
                1000,
                'y un 99% de trabajo'+'"',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="light light:text-black  dark dark:text-white"
            />
          </h1>
          <div>
            <Link
              href="/materias"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Ir a materias
              </span>
            </Link>
          </div>
      </motion.div>
    </div>
  </section>
  
  );
};

export default TitleHome;
