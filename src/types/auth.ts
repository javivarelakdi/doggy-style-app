// src/types/auth.ts

// Base interface for login credentials
export interface LoginCredentials {
  username: string;
  password: string;
  lng: number;
  lat: number;
}

// SignupData interface extending LoginCredentials and matching User interface structure
export interface SignupData extends LoginCredentials {
  imgUrl: string | null;
  breed: string;
  birth: Date;
  gender: string;
  about: string;
}
