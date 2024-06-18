import type { DataError } from "../../../core/domain/DataError";
import type { Either } from "../../../core/domain/Either";
import type { IPaymentRepository } from "../../../domain/repository/IPaymentRepository";
import { ConcilliedStatus } from "../../entities/enums/ConcilliedStatus";
import { Payment } from "../../entities/payment";

export class SearchPaymentsUseCase {
   private paymentRepository: IPaymentRepository;
   constructor({ paymentRepository }: { paymentRepository: IPaymentRepository; }) {
      this.paymentRepository = paymentRepository;
   }
   execute(status: ConcilliedStatus): Promise<Either<DataError, Payment[]>> {
      return this.paymentRepository.search(status);
   }
}