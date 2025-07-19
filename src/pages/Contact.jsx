
    import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Envio de Formulário",
      description: "🚧 Este recurso ainda não foi implementado—mas não se preocupe! Você pode solicitá-lo em seu próximo prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contato - Ecogrind Brasil</title>
        <meta name="description" content="Entre em contato com a Ecogrind Brasil. Estamos prontos para atender suas necessidades e oferecer a melhor solução para sua empresa." />
      </Helmet>
      <div className="container mx-auto px-4 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-ecogrind-green">Entre em Contato</h1>
          <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
            Nossa equipe está pronta para ajudar. Envie sua mensagem ou ligue para nós.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold">Fale Conosco</h2>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <Input type="text" placeholder="Seu Nome" required />
              <Input type="email" placeholder="Seu E-mail" required />
              <Input type="tel" placeholder="Seu Telefone" />
              <textarea
                placeholder="Sua Mensagem"
                required
                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              ></textarea>
              <Button type="submit" className="w-full bg-ecogrind-green hover:bg-ecogrind-green/90">
                Enviar Mensagem
              </Button>
            </form>
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold">Nossos Contatos</h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-ecogrind-green/10 p-3 rounded-full">
                  <Mail className="h-6 w-6 text-ecogrind-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">E-mail</h3>
                  <a href="mailto:contato@ecogrind.com.br" className="text-muted-foreground hover:text-ecogrind-green transition-colors">
                    contato@ecogrind.com.br
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-ecogrind-green/10 p-3 rounded-full">
                  <Phone className="h-6 w-6 text-ecogrind-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Telefone / WhatsApp</h3>
                  <a href="tel:+5512992594651" className="text-muted-foreground hover:text-ecogrind-green transition-colors">
                    +55 12 99259-4651
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-ecogrind-green/10 p-3 rounded-full">
                  <MapPin className="h-6 w-6 text-ecogrind-green" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Endereço</h3>
                  <p className="text-muted-foreground">
                    Caraguatatuba, SP, Brasil <br />
                    (Atendimento sob agendamento)
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Contact;
  