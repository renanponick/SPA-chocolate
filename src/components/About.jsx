import { motion } from 'framer-motion';
import { Heart, Award, Clock, Sparkles } from 'lucide-react';

export const About = () => {
  const features = [
    {
      icon: Heart,
      title: 'Feito com Amor',
      description: 'Cada doce é preparado artesanalmente com dedicação e carinho'
    },
    {
      icon: Award,
      title: 'Ingredientes Premium',
      description: 'Utilizamos apenas ingredientes de alta qualidade e selecionados'
    },
    {
      icon: Clock,
      title: 'Sempre Frescos',
      description: 'Produção diária para garantir o frescor e sabor incomparável'
    },
    {
      icon: Sparkles,
      title: 'Experiência Única',
      description: 'Transformamos momentos especiais em memórias deliciosas'
    }
  ];

  return (
    <section id="sobre" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&q=80"
                alt="Nossa cozinha artesanal"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              
              {/* Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 dark:bg-black/80 backdrop-blur-sm rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🍫</span>
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Feito com Amor</p>
                    <p className="text-sm text-muted-foreground">Desde 2020</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary/10 rounded-full blur-2xl"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-['Poppins']">
              Sobre Nós
            </h2>
            
            <div className="space-y-4 text-muted-foreground mb-8">
              <p className="text-lg leading-relaxed">
                Somos apaixonados por adoçar o mundo. Cada doce é feito artesanalmente, 
                com ingredientes de qualidade e aquele toque de amor que faz toda diferença.
              </p>
              
              <p className="text-lg leading-relaxed">
                Nossa missão é transformar momentos especiais em experiências inesquecíveis 
                através de sabores únicos e apresentações que encantam os olhos antes mesmo 
                do primeiro bite.
              </p>
              
              <p className="text-lg leading-relaxed">
                Trabalhamos com chocolate belga premium, ingredientes frescos e receitas 
                desenvolvidas com carinho para garantir que cada brigadeiro, brownie ou 
                sobremesa seja uma verdadeira obra de arte comestível.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1 text-foreground">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

