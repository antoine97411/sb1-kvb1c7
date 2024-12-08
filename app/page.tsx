import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Features } from "@/components/sections/features";
import { Packages } from "@/components/sections/packages";
import { AdditionalServices } from "@/components/sections/additional-services";
import { RevenueCalculator } from "@/components/sections/calculator";
import { Contact } from "@/components/sections/contact";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Features />
      <Packages />
      <RevenueCalculator />
      <AdditionalServices />
      <Contact />
    </main>
  );
}