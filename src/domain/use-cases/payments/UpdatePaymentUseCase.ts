import type { DataError } from "../../../core/domain/DataError";
import type { Either } from "../../../core/domain/Either";
import type { IPaymentRepository } from "../../../domain/repository/IPaymentRepository";

export class UpdatePaymentUseCase {
   private paymentRepository: IPaymentRepository;
   constructor({ paymentRepository }: { paymentRepository: IPaymentRepository; }) {
      this.paymentRepository = paymentRepository;
   }
   execute(id: number): Promise<Either<DataError, boolean>> {
      return this.paymentRepository.updatePayment(id);
   }
}