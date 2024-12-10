// src/services/authService.ts
import axios from "axios";

const api = axios.create({
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for sending/receiving cookies with requests
});

interface LoginCredentials {
  username: string;
  password: string;
  lng: number;
  lat: number;
}

interface SignupData extends LoginCredentials {
  imgUrl: string;
  breed: string;
  birth: Date;
  gender: string;
  about: string;
}

export const authService = {
  login: async (credentials: LoginCredentials) => {
    try {
      const response = await api.post("/auth/login", credentials);
      return response.data;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  },

  signup: async (userData: SignupData) => {
    try {
      const response = await api.post("/auth/signup", userData);
      return response.data;
    } catch (error) {
      console.error("Signup error:", error);
      throw error;
    }
  },

  logout: async () => {
    try {
      await api.get("/auth/logout");
    } catch (error) {
      console.error("Logout error:", error);
      throw error;
    }
  },

  getCurrentUser: async () => {
    try {
      const response = await api.get("/auth/whoami");
      return response.data;
    } catch (error) {
      console.error("Get current user error:", error);
      throw error;
    }
  },
};
