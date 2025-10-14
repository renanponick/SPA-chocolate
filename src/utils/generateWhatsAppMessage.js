import { formatPrice } from './formatPrice';

export const generateWhatsAppMessage = (items, total, coupon = null) => {
  let message = 'Olá! Gostaria de fazer um pedido:\n\n';
  
  items.forEach(item => {
    message += `- ${item.name} (x${item.quantity}) — ${formatPrice(item.price * item.quantity)}\n`;
  });
  
  if (coupon) {
    message += `\nCupom aplicado: ${coupon.code} (-${coupon.type === 'percentage' ? coupon.value + '%' : formatPrice(coupon.value)})\n`;
  }
  
  message += `\n*Total: ${formatPrice(total)}*\n\n`;
  message += 'Endereço de entrega: [preencher]\n';
  message += 'Forma de pagamento: [preencher]';
  
  return encodeURIComponent(message);
};

export const openWhatsApp = (phone, message) => {
  const url = `https://wa.me/${phone}?text=${message}`;
  window.open(url, '_blank');
};

