import type { Either } from "../../core/domain/Either";
import type { DataError } from "../../core/domain/DataError";
import type { Payment } from "../entities/payment";
import { ConcilliedStatus } from "../entities/enums/ConcilliedStatus";

export interface IPaymentRepository {
   search(status: ConcilliedStatus): Promise<Either<DataError, Payment[]>>;
   updatePayment(id: number): Promise<Either<DataError, boolean>>;
}