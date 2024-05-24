import type { DataError } from "../../../core/domain/DataError";
import type { Either } from "../../../core/domain/Either";
import type { ResetPasswordRequest } from "../../entities/auth";
import type { IAuthRepository } from "../../../domain/repository/IAuthRepository";

export class ResetPasswordUseCase {
   private authRepository: IAuthRepository;
   constructor({ authRepository }: { authRepository: IAuthRepository; }) {
      this.authRepository = authRepository;
   }
   execute(payload: ResetPasswordRequest): Promise<Either<DataError, boolean>> {
      return this.authRepository.resetPassword(payload);
   }
}