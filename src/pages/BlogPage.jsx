import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';

const blogPosts = [
    {
      id: 1,
      title: "5 Vantagens da Trituração de Resíduos para sua Indústria",
      excerpt: "Descubra como a trituração de resíduos pode reduzir custos, gerar receita e fortalecer a imagem sustentável da sua empresa.",
      category: "Sustentabilidade",
      image: "/capaid1.png",
      readTime: "6 min",
      date: "18 Jul 2025",
    },
    {
      id: 2,
      title: "Como Escolher o Triturador Industrial Certo para seu Negócio",
      excerpt: "Potência, tipo de material, volume... São muitos fatores a considerar. Aprenda a escolher o equipamento ideal para suas necessidades.",
      category: "Tecnologia",
      image: "/capa_id2.png",
      readTime: "8 min",
      date: "15 Jul 2025",
    },
    {
      id: 3,
      title: "Economia Circular: O Futuro da Gestão de Resíduos no Brasil",
      excerpt: "Entenda o conceito de economia circular e como a Ecogrind está na vanguarda dessa transformação no cenário nacional.",
      category: "Negócios",
      image: "/capa_id3.jpg",
      readTime: "7 min",
      date: "12 Jul 2025",
    },
    {
      id: 4,
      title: "PNRS: Como sua Empresa Pode se Adequar à Política Nacional de Resíduos Sólidos",
      excerpt: "A legislação ambiental está cada vez mais rigorosa. Saiba como os equipamentos da Ecogrind ajudam sua empresa a cumprir as normas.",
      category: "Regulamentação",
      image: "/capa_id4.jpg",
      readTime: "5 min",
      date: "10 Jul 2025",
    },
    {
      id: 5,
      title: "O Papel das Cooperativas na Cadeia de Reciclagem",
      excerpt: "Veja como as cooperativas são essenciais para a reciclagem no Brasil e como a Ecogrind apoia esses projetos de impacto social.",
      category: "Impacto Social",
      image: "/capa_id5.jpg",
      readTime: "6 min",
      date: "08 Jul 2025",
    },
    {
      id: 6,
      title: "Manutenção Preventiva: Aumente a Vida Útil do seu Triturador",
      excerpt: "Dicas práticas para garantir que seu equipamento opere com máxima eficiência e durabilidade por muito mais tempo.",
      category: "Dicas Técnicas",
      image: "/capa_id6.jpg",
      readTime: "4 min",
      date: "05 Jul 2025",
    },
];

const BlogPage = () => {
  const { toast } = useToast();

  const handleReadMore = (title) => {
    toast({
      title: "Leitura de Artigo",
      description: `🚧 O artigo '${title}' ainda não está disponível. Você pode pedir este recurso no próximo prompt! 🚀`,
    });
  };

  return (
    <>
      <Helmet>
        <title>Blog - Ecogrind Brasil</title>
        <meta name="description" content="Fique por dentro das últimas notícias, tendências e inovações do setor de reciclagem e moagem industrial no blog da Ecogrind Brasil." />
      </Helmet>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ecogrind-green">Nosso Blog</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Conhecimento, tendências e inovações do universo da reciclagem industrial.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              className="bg-secondary rounded-lg shadow-lg overflow-hidden flex flex-col group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-full h-56 bg-muted overflow-hidden">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  alt={post.imageText || post.title}
                  src={post.image}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <p className="text-sm font-semibold text-ecogrind-green">{post.category}</p>
                <h2 className="mt-2 text-xl font-bold flex-grow">
                  <Link
                    to={`/blog/${post.id}`}
                    className="hover:underline text-ecogrind-green"
                  >
                    {post.title}
                  </Link>
                </h2>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground my-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
                <Button
                  onClick={() => handleReadMore(post.title)}
                  variant="link"
                  className="mt-4 p-0 text-ecogrind-green self-start"
                >
                  Leia mais <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default BlogPage;