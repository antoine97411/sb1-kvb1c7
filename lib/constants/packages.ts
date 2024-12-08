import { Sparkles, Crown, Star, Leaf, Gift, Car, Clock, Phone, Home, User } from "lucide-react";

export const servicePackages = [
  {
    name: "Standard",
    subtitle: "Essentiel",
    price: "À partir de 15%",
    description: "L'essentiel pour une gestion efficace de votre bien",
    features: [
      "Gestion des annonces",
      "Check-in et check-out des voyageurs",
      "Ménage après chaque séjour",
      "Fourniture et gestion du linge",
      "Kit de première nécessité"
    ],
    icon: Star
  },
  {
    name: "Premium",
    subtitle: "Expérience",
    price: "À partir de 20%",
    description: "Une expérience enrichie pour vos voyageurs",
    features: [
      "Tous les services de l'offre Standard",
      "Organisation d'expériences locales",
      "Location de matériel",
      "Accueil VIP personnalisé",
      "Assistance 24/7"
    ],
    icon: Sparkles,
    highlighted: true
  },
  {
    name: "Luxe",
    subtitle: "Prestige",
    price: "À partir de 25%",
    description: "Le summum du service de conciergerie",
    features: [
      "Tous les services de l'offre Premium",
      "Décorations spéciales événements",
      "Produits d'accueil haut de gamme",
      "Check-in avec hôte dédié",
      "Option chauffeur privé"
    ],
    icon: Crown
  }
];

export const additionalServices = [
  {
    category: "Pour les propriétaires",
    icon: Home,
    services: [
      "Inspection complète du logement",
      "Suivi maintenance 24/7",
      "Analyse des performances locatives",
      "Optimisation IA des prix",
      "Gestion de la décoration"
    ]
  },
  {
    category: "Pour les voyageurs",
    icon: User,
    services: [
      "Services via application dédiée",
      "Forfait Sérénité Voyageur",
      "Nettoyage intermédiaire",
      "Livraison de produits locaux"
    ]
  },
  {
    category: "Écoresponsable",
    icon: Leaf,
    services: [
      "Kits d'accueil zéro déchet",
      "Produits écologiques",
      "Service de tri sélectif"
    ]
  }
];