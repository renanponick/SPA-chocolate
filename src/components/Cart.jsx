import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle, Tag } from 'lucide-react';
import { useState } from 'react';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/formatPrice';
import { generateWhatsAppMessage, openWhatsApp } from '../utils/generateWhatsAppMessage';

export const Cart = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, getTotal, coupon, applyCoupon, removeCoupon } = useCart();
  const [couponCode, setCouponCode] = useState('');
  const [couponError, setCouponError] = useState('');
  const [couponSuccess, setCouponSuccess] = useState('');

  const { subtotal, discount, total } = getTotal();

  const validCoupons = {
    'DOCE10': { code: 'DOCE10', type: 'percentage', value: 10 },
    'BEMVINDO': { code: 'BEMVINDO', type: 'fixed', value: 5 },
    'PRIMEIRACOMPRA': { code: 'PRIMEIRACOMPRA', type: 'percentage', value: 15 }
  };

  const handleApplyCoupon = () => {
    setCouponError('');
    setCouponSuccess('');
    
    const upperCode = couponCode.toUpperCase();
    if (validCoupons[upperCode]) {
      applyCoupon(validCoupons[upperCode]);
      setCouponSuccess('Cupom aplicado com sucesso! 🎉');
      setCouponCode('');
    } else {
      setCouponError('Cupom inválido');
    }
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    
    const message = generateWhatsAppMessage(items, total, coupon);
    openWhatsApp('5511999999999', message);
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

          {/* Cart Sidebar */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-full w-full md:w-[480px] bg-card shadow-2xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-6 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-primary" />
                <h2 className="text-2xl font-bold font-['Poppins']">Meu Carrinho</h2>
              </div>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={onClose}
                className="p-2 hover:bg-accent rounded-full transition-colors"
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <ShoppingBag className="w-20 h-20 text-muted-foreground mb-4" />
                  <p className="text-xl font-medium text-muted-foreground mb-2">
                    Seu carrinho está vazio
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Adicione alguns doces deliciosos!
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: 100 }}
                      className="bg-background rounded-xl p-4 flex gap-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1 line-clamp-1">{item.name}</h3>
                        <p className="text-sm text-muted-foreground mb-2">
                          {formatPrice(item.price)}
                        </p>
                        
                        <div className="flex items-center gap-2">
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 bg-accent rounded hover:bg-accent/80 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="w-4 h-4" />
                          </motion.button>
                          
                          <span className="w-8 text-center font-medium">{item.quantity}</span>
                          
                          <motion.button
                            whileTap={{ scale: 0.9 }}
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 bg-accent rounded hover:bg-accent/80 transition-colors"
                          >
                            <Plus className="w-4 h-4" />
                          </motion.button>
                        </div>
                      </div>

                      <div className="flex flex-col items-end justify-between">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-destructive hover:bg-destructive/10 rounded-full transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </motion.button>
                        
                        <span className="font-bold text-primary">
                          {formatPrice(item.price * item.quantity)}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                {/* Coupon */}
                <div className="space-y-2">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <input
                        type="text"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                        placeholder="Código do cupom"
                        className="w-full pl-10 pr-4 py-2 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleApplyCoupon}
                      className="px-4 py-2 bg-accent hover:bg-accent/80 rounded-lg font-medium transition-colors"
                    >
                      Aplicar
                    </motion.button>
                  </div>
                  
                  {couponError && (
                    <p className="text-sm text-destructive">{couponError}</p>
                  )}
                  {couponSuccess && (
                    <p className="text-sm text-green-600 dark:text-green-400">{couponSuccess}</p>
                  )}
                  {coupon && (
                    <div className="flex items-center justify-between bg-green-50 dark:bg-green-900/20 p-2 rounded-lg">
                      <span className="text-sm text-green-700 dark:text-green-400">
                        Cupom <strong>{coupon.code}</strong> aplicado
                      </span>
                      <button
                        onClick={removeCoupon}
                        className="text-green-700 dark:text-green-400 hover:text-green-900 dark:hover:text-green-300"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>

                {/* Totals */}
                <div className="space-y-2">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Desconto</span>
                      <span>-{formatPrice(discount)}</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between text-xl font-bold pt-2 border-t border-border">
                    <span>Total</span>
                    <span className="text-primary">{formatPrice(total)}</span>
                  </div>
                </div>

                {/* Checkout Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleCheckout}
                  className="w-full py-4 bg-green-600 hover:bg-green-700 text-white rounded-xl font-semibold text-lg flex items-center justify-center gap-2 shadow-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Finalizar no WhatsApp
                </motion.button>

                <p className="text-xs text-center text-muted-foreground">
                  Você será redirecionado para o WhatsApp para confirmar seu pedido
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

