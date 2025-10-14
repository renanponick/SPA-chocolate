import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Lock, Heart, LogOut } from 'lucide-react';
import { useState } from 'react';
import { useAuth } from '../hooks/useAuth';

export const Login = ({ isOpen, onClose }) => {
  const { user, login, logout } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Preencha todos os campos');
      return;
    }

    const success = login(email, password);
    if (success) {
      setEmail('');
      setPassword('');
      setTimeout(() => onClose(), 500);
    } else {
      setError('Credenciais inválidas');
    }
  };

  const handleLogout = () => {
    logout();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Login Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-card rounded-2xl shadow-2xl z-50 p-8"
          >
            {/* Close Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={onClose}
              className="absolute top-4 right-4 p-2 hover:bg-accent rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {user ? (
              // Logged In View
              <div className="text-center">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-10 h-10 text-primary fill-primary" />
                </div>
                
                <h2 className="text-2xl font-bold mb-2 font-['Poppins']">
                  Olá, {user.name}!
                </h2>
                
                <p className="text-muted-foreground mb-6">
                  {user.email}
                </p>

                <div className="space-y-3">
                  <div className="p-4 bg-accent/50 rounded-lg text-left">
                    <p className="text-sm font-medium mb-1">Cupons disponíveis:</p>
                    <div className="space-y-1">
                      <p className="text-xs text-muted-foreground">• DOCE10 - 10% de desconto</p>
                      <p className="text-xs text-muted-foreground">• BEMVINDO - R$ 5 de desconto</p>
                      <p className="text-xs text-muted-foreground">• PRIMEIRACOMPRA - 15% de desconto</p>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={handleLogout}
                    className="w-full py-3 bg-destructive/10 hover:bg-destructive/20 text-destructive rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                    Sair
                  </motion.button>
                </div>
              </div>
            ) : (
              // Login Form
              <div>
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold mb-2 font-['Poppins']">
                    Bem-vindo de volta!
                  </h2>
                  <p className="text-muted-foreground">
                    Entre para acessar seus favoritos e cupons
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      E-mail
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="seu@email.com"
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Senha
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full pl-10 pr-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                    </div>
                  </div>

                  {error && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-sm text-destructive text-center"
                    >
                      {error}
                    </motion.p>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-semibold transition-colors"
                  >
                    Entrar
                  </motion.button>
                </form>

                <p className="text-xs text-center text-muted-foreground mt-6">
                  Demo: use qualquer e-mail e senha para entrar
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

