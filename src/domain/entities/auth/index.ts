import { Role } from "../enums/Role"

export interface LoginRequest {
   username: string;
   password?: string;
}

export interface LoginResponse {
   role: Role;
   token: string;
}

export interface ErrorData {
   message: string;
   source: string;
   value: string;
}

export interface ResetPasswordRequest {
   token: string;
   password: string;
}

export interface User {
   username: string;
}