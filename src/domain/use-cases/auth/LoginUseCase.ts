import type { DataError } from "../../../core/domain/DataError";
import type { Either } from "../../../core/domain/Either";
import type { LoginRequest, LoginResponse } from "../../entities/auth";
import type { IAuthRepository } from "../../../domain/repository/IAuthRepository";

export class LoginUseCase {
   private authRepository: IAuthRepository;
   constructor({ authRepository }: { authRepository: IAuthRepository; }) {
      this.authRepository = authRepository;
   }
   execute(payload: LoginRequest): Promise<Either<DataError, LoginResponse>> {
      return this.authRepository.login(payload);
   }
}