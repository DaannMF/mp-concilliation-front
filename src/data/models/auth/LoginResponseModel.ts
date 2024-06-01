import { Role } from "../../../domain/entities/enums/Role"
import type { LoginResponse } from "../../../domain/entities/auth";

export class LoginResponseModel {
   public role: Role;
   public token: string;

   constructor({ role, token }: {
      role: Role,
      token: string,
   }) {
      this.role = role;
      this.token = token;
   }

   static fromJson = (json: any): LoginResponseModel => new LoginResponseModel({
      role: json.role,
      token: json.token,
   });

   public toDomain = (): LoginResponse => ({
      role: this.role,
      token: this.token,
   });
}
