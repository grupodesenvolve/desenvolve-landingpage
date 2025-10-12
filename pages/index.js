import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Results from "../components/results";
import SuccessCases from "../components/successCases";
import Partners from "../components/partners";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Desenvolve - Soluções para Saúde Pública</title>
        <meta
          name="description"
          content="Consultoria, tecnologia, educação e inteligência de dados para transformar a saúde pública no Brasil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Nossas Soluções"
        title="Transformamos a gestão da saúde pública">
        Oferecemos soluções integradas para prefeituras, hospitais e o SUS, 
        com foco em resultados práticos e sustentáveis.
      </SectionTitle>
      <Video />
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Results />
      <SuccessCases />
      <SectionTitle
        pretitle="Depoimentos"
        title="O que nossos clientes dizem">
        Veja como transformamos a gestão da saúde pública em diferentes instituições.
      </SectionTitle>
      <Testimonials />
      <Partners />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
}
