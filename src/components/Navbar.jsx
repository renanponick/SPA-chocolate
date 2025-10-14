import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Sun, Moon, User, Menu, X, Heart } from 'lucide-react';
import { useCart } from '../hooks/useCart';
import { useTheme } from '../hooks/useTheme';
import { useAuth } from '../hooks/useAuth';
import { scrollToSection } from '../utils/scrollToSection';

export const Navbar = ({ onOpenCart, onOpenLogin }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { getItemCount } = useCart();
  const { theme, toggleTheme } = useTheme();
  const { user } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Home', section: 'hero' },
    { label: 'Produtos', section: 'produtos' },
    { label: 'Presentes', section: 'presentes' },
    { label: 'Eventos', section: 'eventos' },
    { label: 'Sobre', section: 'sobre' },
    { label: 'Contato', section: 'contato' }
  ];

  const handleMenuClick = (section) => {
    scrollToSection(section);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-card/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              <span className="text-3xl">🍫</span>
              <span className="text-2xl font-bold text-primary font-['Poppins']">
                Doce Encanto
              </span>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {menuItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleMenuClick(item.section)}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Icons */}
            <div className="flex items-center space-x-4">
              {/* Theme Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Alternar tema"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5" />
                ) : (
                  <Sun className="w-5 h-5" />
                )}
              </motion.button>

              {/* User/Login */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onOpenLogin}
                className="p-2 rounded-full hover:bg-accent transition-colors relative"
                aria-label="Login"
              >
                {user ? <Heart className="w-5 h-5 fill-primary text-primary" /> : <User className="w-5 h-5" />}
              </motion.button>

              {/* Cart */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onOpenCart}
                className="p-2 rounded-full hover:bg-accent transition-colors relative"
                aria-label="Carrinho"
              >
                <ShoppingCart className="w-5 h-5" />
                {getItemCount() > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                  >
                    {getItemCount()}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-accent transition-colors"
                aria-label="Menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween' }}
            className="fixed inset-0 z-40 bg-card md:hidden"
            style={{ top: '80px' }}
          >
            <div className="flex flex-col p-6 space-y-4">
              {menuItems.map((item) => (
                <motion.button
                  key={item.section}
                  whileHover={{ x: 10 }}
                  onClick={() => handleMenuClick(item.section)}
                  className="text-left text-xl font-medium text-foreground hover:text-primary transition-colors py-3 border-b border-border"
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

