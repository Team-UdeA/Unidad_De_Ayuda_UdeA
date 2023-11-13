"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Eloquent JavaScript",
    description: "¡Descubre el Poder de JavaScript! 🚀",
    image:'https://eloquentjavascript.net/img/cover.jpg',
    tag: ["Todo", "Programacion"],
    gitUrl: "https://eloquentjavascript.net/",
    previewUrl: "https://eloquentjavascript.net/",
  },
  {
    id: 4,
    title: "ESL English Language Learning",
    description: "🌟 ¡Desarrolla tu habilidades en inglés! 🎧📚",
    image: "https://youtalkonline.com/wp-content/webp-express/webp-images/uploads/inglés-en-casa-725x408.jpg.webp",
    tag: ["Todo", "Ingles"],
    gitUrl: "https://esl-bits.net/",
    previewUrl: "https://esl-bits.net/",
  },
  {
    id: 4,
    title: "MemRise",
    description: "✨¡aprende cualquier tematica!🚀📚",
    image: "https://play-lh.googleusercontent.com/EqkWPEGYgzjwZF1eDJl1pcpf9BG65SIpgJSyDdgRNO4iQzZip_48SoxDIsl_EQHmTQ",
    tag: ["Todo", "Ingles"],
    gitUrl: "https://www.memrise.com/es/",
    previewUrl: "https://www.memrise.com/es/",
  }
];

const ArticleSection = () => {
  const [tag, setTag] = useState("Todo");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) =>
   {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="h-350 w-full">
      <h2 className="text-center text-4xl font-bold light light:text-black  dark dark:text-white mt-4 mb-8 md:mb-12">
        Recursos Adicionales
      </h2>
      <div className="flex flex-row light light:text-black  dark dark:text-white justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todo"
          isSelected={tag === "Todo"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Programacion"
          isSelected={tag === "Programacion"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Ingles"
          isSelected={tag === "Ingles"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12 light light:text-black  dark dark:text-white">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ArticleSection;
