import type { Either } from "../../core/domain/Either";
import type { DataError } from "../../core/domain/DataError";
import type { ResetPasswordRequest, LoginRequest } from "../entities/auth";

export interface IAuthRepository {
   login(payload: LoginRequest): Promise<Either<DataError, string>>;
   resetPassword(payload: ResetPasswordRequest): Promise<Either<DataError, boolean>>;
}