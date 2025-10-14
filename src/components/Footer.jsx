import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Mail, Phone } from 'lucide-react';
import { scrollToSection } from '../utils/scrollToSection';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'Home', section: 'hero' },
    { label: 'Produtos', section: 'produtos' },
    { label: 'Presentes', section: 'presentes' },
    { label: 'Eventos', section: 'eventos' },
    { label: 'Sobre', section: 'sobre' },
    { label: 'Contato', section: 'contato' }
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🍫</span>
              <span className="text-2xl font-bold text-primary font-['Poppins']">
                Doce Encanto
              </span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Adoçando momentos desde 2020. Brigadeiros gourmet e doces artesanais 
              feitos com amor e ingredientes premium.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Poppins']">Links Rápidos</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.section}>
                  <button
                    onClick={() => scrollToSection(link.section)}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4 font-['Poppins']">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-sm">(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-sm">contato@doceencanto.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Doce Encanto. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Feito com</span>
              <Heart className="w-4 h-4 fill-red-500 text-red-500 animate-pulse" />
              <span>para adoçar seu dia</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

