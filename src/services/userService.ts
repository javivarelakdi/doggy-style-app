import axios from "axios";

const api = axios.create({
  baseURL: "/api",
});

export const userService = {
  getUsers: async (coordinates: { lng: number; lat: number }) => {
    try {
      // Explicitly use POST method with coordinates in the body
      const response = await api.post("/users", coordinates);
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching users:", error);
      throw error;
    }
  },
  getUserById: async (id: string) => {
    try {
      const response = await api.get(`/users/${id}`);
      console.log("API Response:", response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    }
  },
};
