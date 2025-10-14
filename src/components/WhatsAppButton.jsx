import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { openWhatsApp } from '../utils/generateWhatsAppMessage';

export const WhatsAppButton = () => {
  const handleClick = () => {
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os doces da Doce Encanto!');
    openWhatsApp('5511999999999', message);
  };

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-colors group"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-8 h-8 group-hover:scale-110 transition-transform" />
      
      {/* Pulse Animation */}
      <span className="absolute inset-0 rounded-full bg-green-600 animate-ping opacity-75" />
    </motion.button>
  );
};

