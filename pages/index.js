import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";
import Results from "../components/results";
import SuccessCases from "../components/successCases";
import Partners from "../components/partners";
import ScrollToTop from "../components/scrollToTop";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import PopupWidget from "../components/popupWidget";


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
      <section id="inicio">
        <Hero />
      </section>
      <section id="solucoes">
        <SectionTitle
          pretitle="Nossas Soluções"
          title="Transformamos a gestão da saúde pública">
          Oferecemos soluções integradas para prefeituras, hospitais e o SUS, 
          com foco em resultados práticos e sustentáveis.
        </SectionTitle>
        <Video />
        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />
      </section>
      <section id="resultados">
        <Results />
      </section>
      <section id="casos">
        <SuccessCases />
      </section>
      <section id="depoimentos">
        <SectionTitle
          pretitle="Depoimentos"
          title="O que nossos clientes dizem">
          Veja como transformamos a gestão da saúde pública em diferentes instituições.
        </SectionTitle>
        <Testimonials />
      </section>
      <Partners />
      <section id="contato">
        <Cta />
      </section>
      <Footer />
      <PopupWidget />
      <ScrollToTop />
    </>
  );
}
