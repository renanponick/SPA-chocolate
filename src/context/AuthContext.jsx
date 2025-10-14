import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const savedUser = localStorage.getItem('doceEncanto_user');
    const savedFavorites = localStorage.getItem('doceEncanto_favorites');
    
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
      }
    }
    
    if (savedFavorites) {
      try {
        setFavorites(JSON.parse(savedFavorites));
      } catch (error) {
        console.error('Erro ao carregar favoritos:', error);
      }
    }
  }, []);

  const login = (email, password) => {
    // Simulação de login (em produção, usar API real)
    const mockUser = {
      id: 1,
      name: 'Cliente Doce Encanto',
      email: email
    };
    setUser(mockUser);
    localStorage.setItem('doceEncanto_user', JSON.stringify(mockUser));
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('doceEncanto_user');
  };

  const addToFavorites = (productId) => {
    if (!favorites.includes(productId)) {
      const newFavorites = [...favorites, productId];
      setFavorites(newFavorites);
      localStorage.setItem('doceEncanto_favorites', JSON.stringify(newFavorites));
    }
  };

  const removeFromFavorites = (productId) => {
    const newFavorites = favorites.filter(id => id !== productId);
    setFavorites(newFavorites);
    localStorage.setItem('doceEncanto_favorites', JSON.stringify(newFavorites));
  };

  const isFavorite = (productId) => {
    return favorites.includes(productId);
  };

  return (
    <AuthContext.Provider value={{
      user,
      login,
      logout,
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite
    }}>
      {children}
    </AuthContext.Provider>
  );
};

