import { Role } from "../../../domain/entities/enums/Role"
import type { LoginResponse } from "../../../domain/entities/auth";

export class LoginResponseModel {
   public username: string;
   public role: Role;
   public token: string;

   constructor({ username, role, token }: {
      username: string,
      role: Role,
      token: string,
   }) {
      this.username = username;
      this.role = role;
      this.token = token;
   }

   static fromJson = (json: any): LoginResponseModel => new LoginResponseModel({
      username: json.username,
      role: json.role,
      token: json.token,
   });

   public toDomain = (): LoginResponse => ({
      role: this.role,
      token: this.token,
   });
}
