import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Oryne Conciergerie - Services de Conciergerie Haut de Gamme à La Réunion',
  description: 'Services de conciergerie professionnels à La Réunion : gestion locative, ménage, maintenance et accueil personnalisé.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Toaster />
        <footer className="bg-muted/30 py-8">
          <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Oryne Conciergerie. Tous droits réservés.
          </div>
        </footer>
      </body>
    </html>
  );
}