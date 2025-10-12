import React from "react";
import Container from "./container";

export default function Results() {
  const results = [
    {
      number: "80+",
      label: "municípios transformados",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      number: "3mil+",
      label: "profissionais capacitados",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      )
    },
    {
      number: "80M+",
      label: "em recursos para hospitais do SUS",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: "100%",
      label: "de incorporação de produtos no SUS pelas indústrias farmacêuticas atendidas",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <Container>
      <div className="flex flex-col justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 lg:text-4xl dark:text-white mb-4">
            Resultados Alcançados
          </h2>
          <p className="text-xl text-gray-500 dark:text-gray-300 mb-12">
            Números que mostram nosso impacto na transformação da saúde pública
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 md:grid-cols-2">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                {result.icon}
              </div>
              <div className="text-4xl font-bold text-indigo-600 mb-2 lg:text-5xl">
                {result.number}
              </div>
              <div className="text-lg text-gray-600 dark:text-gray-300 font-medium">
                {result.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
}
