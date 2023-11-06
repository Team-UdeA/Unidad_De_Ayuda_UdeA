'use client'
import { Code } from "@nextui-org/code";
import TextAnimation from "@/components/TextAnimation";
import MathSymbolAnimation from "@/components/MathSymbolAnimation";
import { Textarea } from "@nextui-org/react";

export default function Home() {
  return (
    <div className="font-times-new-roman">
      <TextAnimation />
      <MathSymbolAnimation />
      <div className="flex flex-col" style={{ height: '600px' }}>
        <div className="m-5 mr-auto" >
          <Code className="text-justify" color="success">
            Nuestra misión es brindar apoyo a los estudiantes de los primeros semestres de las diversas carreras de la<br />
            Facultad de Ingeniería de la Universidad de Antioquia. Sabemos que el inicio de tu vida universitaria puede<br />
            ser un desafío, y estamos aquí para facilitar tu camino hacia el éxito académico.
          </Code>
        </div>
        <div className="flex gap-10 items-center h-screen mx-auto">
          <Textarea
            isReadOnly
            label="Recursos de Ayuda: "
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue="No estás solo en este viaje. Si necesitas orientación académica o consejos específicos, nuestro equipo de asesores está listo para ayudarte. Puedes ponerte en contacto con ellos a través de nuestro sistema de soporte."
            className="max-w-md"
          />
          <Textarea
            isReadOnly
            label="Asesoría Personalizada: "
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue="Hemos recopilado una amplia variedad de materiales de estudio, guías, tutoriales y recursos útiles para tus cursos. Navega por nuestra biblioteca y encuentra lo que necesitas para fortalecer tus conocimientos."
            className="max-w-md"
          />
          <Textarea
            isReadOnly
            label="Comunidad de Estudiantes: "
            variant="bordered"
            labelPlacement="outside"
            placeholder="Enter your description"
            defaultValue="Conéctate con tus compañeros de clase, comparte experiencias y resuelve dudas en nuestro espacio de comunidad. Juntos, podemos superar cualquier obstáculo."
            className="max-w-md"
          />
        </div>
        <div className="m-5 ml-auto mt-auto">
          <Code color="warning">
            <p>
              Nuestro compromiso es reducir la deserción estudiantil y fomentar un entorno de aprendizaje exitoso. Creemos que todos<br />
              los estudiantes tienen el potencial de alcanzar sus metas académicas, y estamos aquí para hacerlo posible.
            </p>
            <p>
              Explora nuestro sitio y descubre cómo podemos ayudarte en tu viaje universitario. ¡Estamos emocionados de acompañarte<br />
              en esta etapa crucial de tu vida!
            </p>
            <p>
              ¡Juntos, alcanzaremos el éxito!
            </p>
        </Code>
        </div>
      </div>
    </div>
  );
}
