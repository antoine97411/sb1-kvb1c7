"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Calculator, TrendingUp, ArrowRight, CheckCircle2 } from "lucide-react";
import { redirectToTypeform } from "@/lib/utils/typeform";

export function RevenueCalculator() {
  const [nights, setNights] = useState("");
  const [price, setPrice] = useState("");
  const commission = 0.20; // 20% commission

  const calculateRevenue = () => {
    const totalRevenue = Number(nights) * Number(price);
    const netRevenue = totalRevenue * (1 - commission);
    const potentialIncrease = netRevenue * 0.2; // 20% potential increase
    return {
      total: totalRevenue.toFixed(2),
      net: netRevenue.toFixed(2),
      potential: (netRevenue + potentialIncrease).toFixed(2)
    };
  };

  const { total, net, potential } = calculateRevenue();

  return (
    <section id="calculator" className="py-24 bg-gradient-to-b from-white to-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Simulez vos revenus</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Découvrez votre potentiel de revenus avec notre gestion optimisée
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="p-8">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Nombre de nuits louées par mois
                  </label>
                  <Input
                    type="number"
                    value={nights}
                    onChange={(e) => setNights(e.target.value)}
                    placeholder="Ex: 20"
                    min="0"
                    max="31"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Prix moyen par nuit (€)
                  </label>
                  <Input
                    type="number"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    placeholder="Ex: 150"
                    min="0"
                  />
                </div>
                <Button 
                  className="w-full" 
                  size="lg"
                  onClick={redirectToTypeform}
                >
                  Optimiser mes revenus
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>

            <div className="space-y-6">
              <Card className="p-6 border-primary">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Calculator className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Revenus actuels estimés</h3>
                    <p className="text-3xl font-bold">{total}€ <span className="text-sm font-normal text-muted-foreground">/ mois</span></p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Revenus nets : {net}€ après commission
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-primary text-primary-foreground">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Potentiel avec Oryne</h3>
                    <p className="text-3xl font-bold">{potential}€ <span className="text-sm font-normal text-primary-foreground/80">/ mois</span></p>
                    <p className="text-sm text-primary-foreground/80 mt-1">
                      +20% en moyenne avec notre gestion optimisée
                    </p>
                  </div>
                </div>
              </Card>

              <div className="space-y-3">
                <div className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Prix optimisés selon la demande</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Taux d'occupation maximisé</span>
                </div>
                <div className="flex gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-sm">Gestion professionnelle complète</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}