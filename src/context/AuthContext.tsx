import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  email: string;
  name: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (email: string, password: string, name: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is already logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would be an API call
    // For this demo, we'll check the localStorage for registered users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const foundUser = users.find((u: any) => u.email === email && u.password === password);
    
    if (foundUser) {
      const userDetails = {
        email: foundUser.email,
        name: foundUser.name || email.split('@')[0], // Use name if available, otherwise use email prefix
      };
      
      setUser(userDetails);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(userDetails));
      return true;
    }
    
    return false;
  };
  
  const register = async (email: string, password: string, name: string): Promise<boolean> => {
    // In a real app, this would be an API call
    // For this demo, we'll store in localStorage
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    // Check if user already exists
    if (users.some((u: any) => u.email === email)) {
      return false; // User already exists
    }
    
    // Add new user
    users.push({ email, password, name });
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto login after registration
    const userDetails = {
      email,
      name: name || email.split('@')[0], // Use name if provided, otherwise use email prefix
    };
    
    setUser(userDetails);
    setIsAuthenticated(true);
    localStorage.setItem('user', JSON.stringify(userDetails));
    
    return true;
  };
  
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};