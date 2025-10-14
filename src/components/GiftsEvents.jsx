import { motion } from 'framer-motion';
import { Gift, PartyPopper, MessageCircle, Heart, Briefcase, Cake } from 'lucide-react';
import { openWhatsApp } from '../utils/generateWhatsAppMessage';

export const GiftsEvents = () => {
  const handleWhatsAppQuote = (type) => {
    const message = encodeURIComponent(`Olá! Gostaria de solicitar um orçamento para ${type}.`);
    openWhatsApp('5511999999999', message);
  };

  const giftOptions = [
    {
      icon: Gift,
      title: 'Caixas Personalizadas',
      description: 'Presentes elegantes com doces sortidos e embalagem premium',
      image: 'https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=800&q=80'
    },
    {
      icon: Heart,
      title: 'Kits Românticos',
      description: 'Surpreenda quem você ama com nossos kits especiais',
      image: 'https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?w=800&q=80'
    },
    {
      icon: Briefcase,
      title: 'Presentes Corporativos',
      description: 'Ideal para clientes, parceiros e colaboradores',
      image: 'https://images.unsplash.com/photo-1511911063855-2bf39afa5b2e?w=800&q=80'
    }
  ];

  const eventOptions = [
    {
      icon: Cake,
      title: 'Aniversários',
      description: 'Mesas de doces personalizadas para festas inesquecíveis',
      image: 'https://images.unsplash.com/photo-1558636508-e0db3814bd1d?w=800&q=80'
    },
    {
      icon: PartyPopper,
      title: 'Casamentos',
      description: 'Doces sofisticados para o dia mais especial',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&q=80'
    },
    {
      icon: Briefcase,
      title: 'Eventos Corporativos',
      description: 'Coffee breaks e eventos empresariais com qualidade premium',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80'
    }
  ];

  return (
    <>
      {/* Presentes Section */}
      <section id="presentes" className="py-20 bg-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-['Poppins']">
              Presentes Gourmet
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Presenteie com sabor e sofisticação. Cada caixa é preparada com carinho especial
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {giftOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <Icon className="w-6 h-6" />
                        <h3 className="text-xl font-bold font-['Poppins']">{option.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsAppQuote(option.title)}
                      className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Solicitar Orçamento
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Eventos Section */}
      <section id="eventos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground font-['Poppins']">
              Doces para Eventos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Transforme seu evento em uma experiência memorável com nossos doces artesanais
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventOptions.map((option, index) => {
              const Icon = option.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -8 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-2 text-white mb-2">
                        <Icon className="w-6 h-6" />
                        <h3 className="text-xl font-bold font-['Poppins']">{option.title}</h3>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-muted-foreground mb-4">
                      {option.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleWhatsAppQuote(option.title)}
                      className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Solicitar Orçamento
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

