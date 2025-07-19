import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Blog = () => {
  const { toast } = useToast();

  const blogPosts = [
    {
      id: 1,
      title: "5 Vantagens da Trituração de Resíduos para sua Indústria",
      excerpt: "Descubra como a trituração de resíduos pode reduzir custos, gerar receita e fortalecer a imagem sustentável da sua empresa.",
      category: "Sustentabilidade",
      image: '/capaid1.png',
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
      imageText: "Documento legal com um carimbo de 'Aprovado' sobreposto a uma imagem de natureza",
      readTime: "5 min",
      date: "10 Jul 2025",
    },
    {
      id: 5,
      title: "O Papel das Cooperativas na Cadeia de Reciclagem",
      excerpt: "Veja como as cooperativas são essenciais para a reciclagem no Brasil e como a Ecogrind apoia esses projetos de impacto social.",
      category: "Impacto Social",
      imageText: "Grupo de trabalhadores de uma cooperativa sorrindo, com sacos de material reciclável ao fundo",
      readTime: "6 min",
      date: "08 Jul 2025",
    },
    {
      id: 6,
      title: "Manutenção Preventiva: Aumente a Vida Útil do seu Triturador",
      excerpt: "Dicas práticas para garantir que seu equipamento opere com máxima eficiência e durabilidade por muito mais tempo.",
      category: "Dicas Técnicas",
      imageText: "Close-up de uma mão com luva lubrificando uma engrenagem de um triturador",
      readTime: "4 min",
      date: "05 Jul 2025",
    },
  ];

  const handleReadMore = (title) => {
    toast({
      title: "Leitura de Artigo",
      description: `🚧 O artigo '${title}' ainda não está disponível. Você pode pedir este recurso no próximo prompt! 🚀`,
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Blog <span className="text-ecogrind-green">Ecogrind</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Insights, tendências e conhecimento especializado sobre sustentabilidade, 
            reciclagem e tecnologias ambientais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogPosts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-secondary rounded-2xl overflow-hidden flex flex-col border border-border/10 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full flex items-center justify-center bg-muted">
                    <img
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      alt={post.imageText}
                      src={post.image} // Alteração: usa a capa do id relacionado
                    />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-ecogrind-green/10 backdrop-blur-sm text-ecogrind-green px-2 py-1 rounded-full text-sm font-medium border border-ecogrind-green/20">
                    {post.category}
                  </span>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 leading-tight flex-grow">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                <Button
                  onClick={() => handleReadMore(post.title)}
                  variant="ghost"
                  size="sm"
                  className="text-ecogrind-green hover:bg-ecogrind-green hover:text-white self-start p-2"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Link to="/blog">
            <Button
              size="lg"
              className="bg-ecogrind-green hover:bg-ecogrind-green/90 text-white group"
            >
              Ver todos os artigos
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Blog;