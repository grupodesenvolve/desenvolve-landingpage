import {
  ClipboardCheckIcon,
  CodeIcon,
  AcademicCapIcon,
  CubeIcon,
  CheckCircleIcon,
  UsersIcon,
} from "@heroicons/react/outline";

// Usando paths absolutos para as imagens
const benefitOneImg = "/img/benefit-one.png";
const benefitTwoImg = "/img/benefit-two.png";

const benefitOne = {
  title: "Nossas Soluções",
  desc: "Oferecemos soluções integradas para transformar a gestão da saúde pública no Brasil, com foco em resultados práticos e sustentáveis.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Consultoria",
      desc: "Gestão estratégica para prefeituras, hospitais e SUS com foco em resultados.",
      icon: <ClipboardCheckIcon />,
    },
    {
      title: "Tech",
      desc: "Software e inteligência de dados para gestão em saúde pública.",
      icon: <CodeIcon />,
    },
    {
      title: "Educação",
      desc: "Cursos presenciais e online em estratégia, gestão e inovação no SUS.",
      icon: <AcademicCapIcon />,
    },
    {
      title: "Pharma",
      desc: "Consultoria e inteligência de dados para a indústria farmacêutica no mercado público.",
      icon: <CubeIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Nossos Diferenciais",
  desc: "O que nos torna únicos na transformação da saúde pública brasileira.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Experiência prática no SUS",
      desc: "Conhecimento profundo dos desafios e oportunidades do sistema público de saúde.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Tecnologia própria em saúde pública",
      desc: "Soluções tecnológicas desenvolvidas especificamente para o SUS.",
      icon: <CodeIcon />,
    },
    {
      title: "Equipe multidisciplinar",
      desc: "Profissionais especializados em diferentes áreas da saúde pública.",
      icon: <UsersIcon />,
    },
    {
      title: "Resultados comprovados",
      desc: "Track record sólido de sucesso com nossos clientes.",
      icon: <CheckCircleIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
