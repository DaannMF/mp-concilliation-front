import { Either } from "../../core/domain/Either";
import type { DataError } from "../../core/domain/DataError";
import type { IPaymentRepository } from "../../domain/repository/IPaymentRepository";
import type CustomAxios from "../../core/utility/CustomAxios";
import type { Payment } from "../../domain/entities/payment";
import { BaseRepository } from "../../core/data/BaseRepository";
import { ConcilliedStatus } from "../../domain/entities/enums/ConcilliedStatus";

export class PaymentRepository extends BaseRepository implements IPaymentRepository {
   constructor({ axios }: { axios: CustomAxios }) {
      super({ axios });
   };

   async search(status: ConcilliedStatus): Promise<Either<DataError, Payment[]>> {
      try {
         const { data } = await this.axios.get('/concilliation/search', { params: { status: status } });
         return Either.right(data);
      } catch (error) {
         return Either.left(this.handleErrors(error));
      }
   };

   async updatePayment(id: number): Promise<Either<DataError, boolean>> {
      try {
         const { data } = await this.axios.put(`/concilliation/${id}/save`);
         return Either.right(data);
      } catch (error) {
         return Either.left(this.handleErrors(error));
      }
   };
}