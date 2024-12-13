// src/services/authService.ts
import axios from "axios";
import { LoginCredentials } from "@/types/auth";

const api = axios.create({
  baseURL: "/api",
  withCredentials: true, // Important for sending/receiving cookies with requests
});

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

  signup: async (userData: FormData) => {
    try {
      const response = await api.post("/auth/signup", userData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
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
