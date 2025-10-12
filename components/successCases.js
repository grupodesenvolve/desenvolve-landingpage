import React from "react";
import Container from "./container";

export default function SuccessCases() {
  const cases = [
    {
      title: "Seleção Artemísia e Umane",
      description: "Reconhecimento no processo seletivo das principais aceleradoras de impacto social do Brasil",
      icon: "🏆",
      category: "Aceleração"
    },
    {
      title: "Incubação Parque Supera",
      description: "Selecionados para o programa de incubação do maior parque tecnológico da América Latina",
      icon: "🚀",
      category: "Incubação"
    },
    {
      title: "Capital Empreendedor",
      description: "Aprovados no programa de investimento e aceleração para empresas inovadoras",
      icon: "💡",
      category: "Investimento"
    },
    {
      title: "Congresso Startups",
      description: "Participação em importantes eventos do ecossistema de inovação brasileiro",
      icon: "🎤",
      category: "Networking"
    }
  ];

  return (
    <Container>
      <div className="flex flex-col justify-center">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            Cases de Sucesso
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Reconhecimento e validação do mercado
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-center">
                <div className="text-4xl mb-4">{caseItem.icon}</div>
                <div className="inline-block px-3 py-1 text-xs font-semibold text-indigo-600 bg-indigo-100 rounded-full mb-3">
                  {caseItem.category}
                </div>
                <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                  {caseItem.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {caseItem.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
