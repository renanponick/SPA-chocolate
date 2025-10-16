import { useState } from 'react';
import { CartProvider } from './context/CartContext';
import { ThemeProvider } from './context/ThemeContext';
import { AuthProvider } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { GiftsEvents } from './components/GiftsEvents';
import { Testimonials } from './components/Testimonials';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { Login } from './components/Login';
import { WhatsAppButton } from './components/WhatsAppButton';
import './App.css';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <ThemeProvider>
      <AuthProvider>
        <CartProvider>
          <div className="min-h-screen">
            <Navbar 
              onOpenCart={() => setIsCartOpen(true)}
              onOpenLogin={() => setIsLoginOpen(true)}
            />
            
            <main className='overflow-hidden'>
              <Hero />
              <Products />
              <GiftsEvents />
              <Testimonials />
              <About />
              <Contact />
            </main>

            <Footer />

            <Cart 
              isOpen={isCartOpen}
              onClose={() => setIsCartOpen(false)}
            />

            <Login
              isOpen={isLoginOpen}
              onClose={() => setIsLoginOpen(false)}
            />

            <WhatsAppButton />
          </div>
        </CartProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

