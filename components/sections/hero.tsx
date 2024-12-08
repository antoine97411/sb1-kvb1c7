"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";
import { redirectToTypeform } from "@/lib/utils/typeform";

export function Hero() {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      <Image
        src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
        alt="Villa de luxe à La Réunion"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/20" />
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative container mx-auto px-6 pt-20"
      >
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm text-primary px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-medium">+20% de revenus en moyenne</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Maximisez vos revenus locatifs sans effort
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl">
            Confiez-nous votre bien et profitez d'une gestion experte qui optimise vos revenus tout en vous libérant l'esprit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="w-full sm:w-auto group" onClick={() => {
              const calculatorSection = document.getElementById('calculator');
              if (calculatorSection) {
                calculatorSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Simulez vos revenus
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto" 
              onClick={scrollToServices}
            >
              Découvrir nos services
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}