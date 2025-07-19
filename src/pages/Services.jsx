import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Lightbulb, Recycle, ShieldCheck, HardHat, Users } from 'lucide-react';

const servicesData = [
  {
    icon: <Lightbulb className="h-10 w-10 text-ecogrind-green" />,
    title: "Consultoria e Projetos Customizados",
    description: "Nossa equipe de especialistas desenvolve soluções sob medida para otimizar seus processos e atender suas necessidades específicas.",
  },
  {
    icon: <Recycle className="h-10 w-10 text-ecogrind-green" />,
    title: "Otimização de Processos de Reciclagem",
    description: "Analisamos e aprimoramos sua linha de produção para aumentar a eficiência, reduzir custos e maximizar a recuperação de materiais.",
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-ecogrind-green" />,
    title: "Treinamento e Capacitação",
    description: "Capacitamos sua equipe para operar os equipamentos com segurança e eficiência, garantindo os melhores resultados.",
  },
  {
    icon: <HardHat className="h-10 w-10 text-ecogrind-green" />,
    title: "Suporte Técnico e Peças",
    description: "Oferecemos um canal de suporte para dúvidas e fornecemos peças de reposição para garantir a continuidade da sua operação.",
  },
  {
    icon: <Users className="h-10 w-10 text-ecogrind-green" />,
    title: "Consultoria para Cooperativas",
    description: "Auxiliamos na implementação e estruturação de cooperativas de reciclagem, promovendo impacto social e ambiental positivo.",
  },
];

const Services = () => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Serviços - Ecogrind Brasil</title>
        <meta name="description" content="Descubra os serviços oferecidos pela Ecogrind Brasil, incluindo consultoria, otimização de processos e treinamento." />
      </Helmet>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ecogrind-green">Nossos Serviços</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Soluções completas para garantir a eficiência e o sucesso da sua operação.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="bg-secondary p-8 rounded-lg shadow-lg flex flex-col items-start"
              variants={cardVariants}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.5 }}
            >
              <div className="bg-ecogrind-green/10 p-4 rounded-full mb-6">
                {service.icon}
              </div>
              <h2 className="text-2xl font-bold">{service.title}</h2>
              <p className="mt-4 text-muted-foreground flex-grow">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;