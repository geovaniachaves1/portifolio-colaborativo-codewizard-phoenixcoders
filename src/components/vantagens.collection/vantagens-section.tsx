import React from "react";
import { GoTelescope, GoShieldCheck } from "react-icons/go";
import { LuClipboardCheck } from "react-icons/lu";
import { GrCubes } from "react-icons/gr";
import { AiOutlineSelect } from "react-icons/ai";

const Advantage = ({ title, description, Icon }) => {
  return (
    <div className="bg-dark-color-secondary flex flex-col md:flex-row rounded-lg p-4 md:p-6">
    <div className="md:w-80 flex items-start gap-4">
          <Icon className="text-lime-primary w-32 h-10 " />
      <div>
        <p className="text-light-color font-mulish text-lg font-bold">{title}</p>
        <p className="text-light-color text-sm font-mulish pt-2">{description}</p>
      </div>
    </div>
  </div>
);
};
          
const Vantagens = () => {
  return (
    <section className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 
        lg:grid-cols-3 gap-4 mt-6">
        <div className="bg-dark-color p-4 flex flex-col sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h2 className="font-inconsolata text-2xl md:text-3xl font-extrabold leading-snug text-left">
              Vantagens do <br /> projeto
            </h2>
            <div className="w-full md:w-300 border-t-2 border-dark-color mt-7"></div>
            <p className="font-mulish text-base md:text-lg leading-relaxed text-left">
              Participar de um projeto em grupo para aprender programação web frontend e desenvolver um portfólio colaborativo oferece uma série de vantagens!
            </p>
          </div>
          </div>
          
        <Advantage
          title="Diversidade de habilidades:"
          description="Ao trabalhar em equipe, você pode aprender com os
           outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          Icon={AiOutlineSelect}
        />
        <Advantage
          title ="Divisão de tarefas:"
          description="Trabalhar em equipe permite distribuir o trabalho 
          de forma eficiente, acelerando o progresso e
          permitindo que cada membro se concentre em suas áreas de especialização."
          Icon={LuClipboardCheck}
        />
        
        <Advantage
          title="Aprendizado colaborativo:"
          description="Ao trabalhar em equipe, você pode aprender com os outros membros do grupo. Cada pessoa traz suas habilidades e conhecimentos únicos, permitindo trocas constantes de aprendizado e a oportunidade de explorar diferentes abordagens para resolver problemas."
          Icon={GrCubes}
        />
        <Advantage
          title="Diversidade de perspectivas:"
          description="Trabalhar com pessoas diferentes traz uma variedade de perspectivas e abordagens para resolver problemas. Isso pode levar a soluções mais criativas e inovadoras, já que cada membro do grupo pode contribuir com suas ideias únicas."
          Icon={GoTelescope}
        />
        <Advantage
          title="Habilidades interpessoais:"
          description="Trabalhar em equipe ajuda a aprimorar habilidades de comunicação, colaboração e trabalho em grupo. Essas habilidades são essenciais no ambiente de trabalho, não apenas na área de programação, mas em muitos outros campos também."
          Icon={GoShieldCheck}
        />
      </div>
    </section>
  );
};

export default Vantagens;