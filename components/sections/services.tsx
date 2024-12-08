"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { mainServices } from "@/lib/constants/services";

export function Services() {
  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Nos Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Une gamme complète de services pour assurer la gestion optimale de votre bien
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <ServiceCard
                key={index}
                icon={<Icon />}
                title={service.title}
                description={service.description}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="p-6 h-full hover:shadow-lg transition-all duration-300">
        <div className="flex flex-col h-full">
          <div className="mb-4 p-2 rounded-lg bg-primary/10 w-fit">
            <div className="text-primary w-6 h-6">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground text-sm">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}