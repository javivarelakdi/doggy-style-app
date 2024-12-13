import { createContext, useContext, useState, useEffect } from "react";
import { authService } from "@/services/authService";
import { User } from "@/types/user";

interface AuthContextType {
  user: User | null;
  login: (
    username: string,
    password: string,
    lng: number,
    lat: number
  ) => Promise<void>;
  signup: (userData: FormData) => Promise<void>;
  logout: () => Promise<void>;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>(null!);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const userData = await authService.getCurrentUser();
        setUser(userData);
      } catch (error) {
        console.log(error);
        setUser(null);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (
    username: string,
    password: string,
    lng: number,
    lat: number
  ) => {
    const userData = await authService.login({
      username,
      password,
      lng,
      lat,
    });
    setUser(userData);
  };

  const signup = async (userData: FormData) => {
    const newUser = await authService.signup(userData);
    setUser(newUser);
  };

  const logout = async () => {
    await authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}
