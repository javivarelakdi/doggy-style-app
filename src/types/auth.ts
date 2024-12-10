// src/types/auth.ts

// Using the existing gender type from User interface
export type Gender = "female" | "male" | "non-binary";

// Base interface for login credentials
export interface LoginCredentials {
  username: string;
  password: string;
  lng: number;
  lat: number;
}

// SignupData interface extending LoginCredentials and matching User interface structure
export interface SignupData extends LoginCredentials {
  imgUrl: string;
  breed: string;
  birth: Date;
  gender: Gender;
  about: string;
}

// Optional: Auth Error type for handling authentication errors
export interface AuthError {
  code: string;
  message: string;
}
