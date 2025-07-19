import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Building, Target, Zap, Heart, Sparkles, UserCheck } from 'lucide-react';

const About = () => {
  return (
    <>
      <Helmet>
        <title>Sobre Nós - Ecogrind Brasil</title>
        <meta name="description" content="Conheça a história, missão e valores da Ecogrind Brasil, líder em soluções sustentáveis para a indústria." />
      </Helmet>
      <div className="bg-background">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-center text-ecogrind-green">Nossa Jornada Sustentável</h1>
            <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
              Ecogrind. Tecnologia que transforma resíduos em resultados.
            </p>
          </motion.div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <img  
                className="rounded-lg shadow-xl w-full h-auto object-contain"
                alt="Logo completo da Ecogrind Brasil"
                src="/logo_dark.png" 
              />
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-ecogrind-green/10 p-3 rounded-full">
                  <Building className="h-6 w-6 text-ecogrind-green" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Nossa História</h2>
                  <p className="mt-2 text-muted-foreground">
                    A Ecogrind nasceu da união entre visão empreendedora e experiência de mercado para oferecer soluções inovadoras em trituração de resíduos sólidos no Brasil. Fundada por profissionais apaixonados pela sustentabilidade e pela eficiência industrial, a empresa surgiu com o propósito de transformar a maneira como indústrias e empresas lidam com seus resíduos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-ecogrind-green/10 p-3 rounded-full">
                  <Target className="h-6 w-6 text-ecogrind-green" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Missão e Futuro</h2>
                  <p className="mt-2 text-muted-foreground">
                    Nossa missão é transformar a maneira como empresas e indústrias lidam com seus resíduos sólidos, oferecendo soluções inovadoras e eficientes em trituração. Olhando para o futuro, acreditamos que a gestão inteligente de resíduos será um dos pilares do desenvolvimento sustentável no Brasil e no mundo.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="bg-muted/30">
        <div className="container mx-auto px-4 py-16 md:py-24">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Nossos Valores</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
                <div className="p-6 bg-background rounded-lg">
                    <Heart className="h-10 w-10 mx-auto text-ecogrind-green mb-4"/>
                    <h3 className="text-xl font-bold">Sustentabilidade</h3>
                    <p className="text-muted-foreground mt-2">Atuamos com responsabilidade ambiental.</p>
                </div>
                <div className="p-6 bg-background rounded-lg">
                    <Sparkles className="h-10 w-10 mx-auto text-ecogrind-green mb-4"/>
                    <h3 className="text-xl font-bold">Inovação</h3>
                    <p className="text-muted-foreground mt-2">Buscamos constantemente novas tecnologias.</p>
                </div>
                <div className="p-6 bg-background rounded-lg">
                    <UserCheck className="h-10 w-10 mx-auto text-ecogrind-green mb-4"/>
                    <h3 className="text-xl font-bold">Compromisso</h3>
                    <p className="text-muted-foreground mt-2">Relação próxima com nossos parceiros.</p>
                </div>
                <div className="p-6 bg-background rounded-lg">
                    <Zap className="h-10 w-10 mx-auto text-ecogrind-green mb-4"/>
                    <h3 className="text-xl font-bold">Excelência</h3>
                    <p className="text-muted-foreground mt-2">Qualidade em cada etapa do processo.</p>
                </div>
                <div className="p-6 bg-background rounded-lg">
                    <Building className="h-10 w-10 mx-auto text-ecogrind-green mb-4"/>
                    <h3 className="text-xl font-bold">Impacto Positivo</h3>
                    <p className="text-muted-foreground mt-2">Promovemos mudanças que beneficiam a todos.</p>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;