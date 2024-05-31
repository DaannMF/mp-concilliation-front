import { Either } from "../../core/domain/Either";
import type { DataError } from "../../core/domain/DataError";
import type { IAuthRepository } from "../../domain/repository/IAuthRepository";
import type CustomAxios from "../../core/utility/CustomAxios";
import { LoginResponseModel } from "../models/auth/LoginResponseModel";
import type { ResetPasswordRequest, LoginRequest } from "../../domain/entities/auth";
import { BaseRepository } from "../../core/data/BaseRepository";

export class AuthRepository extends BaseRepository implements IAuthRepository {
   constructor({ axios }: { axios: CustomAxios }) {
      super({ axios });
   };

   async login(payload: LoginRequest): Promise<Either<DataError, string>> {
      try {
         const { data } = await this.axios.post('/auth/login', payload);
         const result = LoginResponseModel.fromJson(data);
         return Either.right(result.toDomain().token);
      } catch (error) {
         return Either.left(this.handleErrors(error));
      }
   }

   async resetPassword(payload: ResetPasswordRequest): Promise<Either<DataError, boolean>> {
      try {
         const { data } = await this.axios.post(`/auth/reset-password`, payload);
         return Either.right(data);
      } catch (error) {
         return Either.left(this.handleErrors(error));
      }
   };
}