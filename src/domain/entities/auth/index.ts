export interface LoginRequest {
   username: String;
   password?: String;
}

export interface User {
   id: Number
   username: String
   admin: boolean
}

export interface LoginResponse {
   token: String;
}

export interface ErrorData {
   message: String;
   source: String;
   value: String;
}

export interface ResetPasswordRequest {
   token: String;
   password: String;
}
