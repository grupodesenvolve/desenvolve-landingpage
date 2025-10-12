import React from "react";
import Container from "./container";

export default function Partners() {
  return (
    <Container>
      <div className="flex flex-col justify-center">
        <div className="text-xl text-center text-gray-700 dark:text-white mb-8">
          <span className="text-indigo-600 font-bold">Parceiros</span> que confiam em nosso trabalho
        </div>

        <div className="flex flex-wrap justify-center gap-5 mt-10 md:justify-around">
          <div className="pt-2 text-gray-400 dark:text-gray-500">
            <SuperaLogo />
          </div>
          <div className="text-gray-400 dark:text-gray-500">
            <ArtemisiaLogo />
          </div>
          <div className="text-gray-400 dark:text-gray-500">
            <UmaneLogo />
          </div>
          <div className="pt-1 text-gray-400 dark:text-gray-500">
            <SebraeLogo />
          </div>
          <div className="pt-2 text-gray-400 dark:text-gray-500">
            <AnjosLogo />
          </div>
          <div className="pt-2 text-gray-400 dark:text-gray-500">
            <DnaUSPLogo />
          </div>
        </div>
      </div>
    </Container>
  );
}

function SuperaLogo() {
  return (
    <img
      src="/img/partners/supera.png"
      alt="Supera Parque"
      className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity"
    />
  );
}

function ArtemisiaLogo() {
  return (
    <img
      src="/img/partners/artemisia.webp"
      alt="Artemisia"
      className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity brightness-0 dark:brightness-100"
    />
  );
}

function UmaneLogo() {
  return (
    <img
      src="/img/partners/umane.png"
      alt="Umane"
      className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity"
    />
  );
}

function SebraeLogo() {
  return (
    <img
      src="/img/partners/sebraestartups.svg"
      alt="Sebrae Startups"
      className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity brightness-0 dark:brightness-100"
    />
  );
}

function AnjosLogo() {
    return (
    <img
      src="/img/partners/anjosdobrasil.png"
      alt="Anjos do Brasil"
      className="h-10 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity"
    />
  );
}

function DnaUSPLogo() {
  return (
    <img
      src="/img/partners/dnausp.svg"
      alt="DNA USP"
      className="h-8 w-auto object-contain grayscale opacity-60 hover:opacity-80 transition-opacity brightness-0 dark:brightness-100"
    />
  );
}
