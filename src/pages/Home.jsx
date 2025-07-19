import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from '@/components/Hero';
import Advantages from '@/components/Advantages';
import Gallery from '@/components/Gallery';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import QuoteForm from '@/components/QuoteForm';
import Blog from '@/components/Blog';

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Ecogrind Brasil - Soluções Sustentáveis para a Indústria</title>
        <meta name="description" content="A Ecogrind Brasil oferece soluções inovadoras e sustentáveis em moagem e reciclagem, promovendo eficiência econômica e responsabilidade ambiental." />
      </Helmet>
      <Hero />
      <Advantages />
      <Gallery />
      <Testimonials />
      <FAQ />
      <QuoteForm />
      <Blog />
    </>
  );
};

export default Home;