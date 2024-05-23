export interface loginRequest {
   username: string;
   password?: string;
}

export interface LoginResponse {
   role: string;
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