import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useScroll } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ScrollToTop from '@/components/ScrollToTop';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Products from '@/pages/Products';
import BlogPage from '@/pages/BlogPage';
import BlogPostPage from '@/pages/BlogPostPage';
import Contact from '@/pages/Contact';
import Breadcrumbs from '@/components/Breadcrumbs';

const PageLayout = ({ children }) => (
  <>
    <Breadcrumbs />
    {children}
  </>
);

function App() {
  const { scrollYProgress } = useScroll();

  return (
    <Router>
      <ScrollToTop /> {/* Mova para dentro do Router, antes do layout principal */}
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-ecogrind-green origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
        <Header />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<PageLayout><About /></PageLayout>} />
            <Route path="/servicos" element={<PageLayout><Services /></PageLayout>} />
            <Route path="/produtos" element={<PageLayout><Products /></PageLayout>} />
            <Route path="/blog" element={<PageLayout><BlogPage /></PageLayout>} />
            <Route path="/blog/:id" element={<BlogPostPage />} />
            <Route path="/contato" element={<PageLayout><Contact /></PageLayout>} />
          </Routes>
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;