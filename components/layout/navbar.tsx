"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? "bg-background/95 backdrop-blur-sm shadow-md" : "bg-black/30 backdrop-blur-sm"
    }`}>
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="font-bold text-2xl tracking-tight text-white">
          Oryne Conciergerie
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('accueil')}
            className="text-white/90 hover:text-white transition-colors font-medium"
          >
            Accueil
          </button>
          <button
            onClick={() => scrollToSection('services')}
            className="text-white/90 hover:text-white transition-colors font-medium"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-white/90 hover:text-white transition-colors font-medium"
          >
            Contact
          </button>
          <Button 
            variant="default" 
            size="sm" 
            className="ml-4" 
            onClick={() => scrollToSection('calculator')}
          >
            Simuler vos revenus
          </Button>
        </div>
        <Button variant="ghost" size="icon" className="md:hidden text-white">
          <Menu className="h-6 w-6" />
        </Button>
      </nav>
    </header>
  );
}