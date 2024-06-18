import type { SearchPaymentsUseCase } from "../../../domain/use-cases/payments/SearchPaymentsUseCase";
import type { UpdatePaymentUseCase } from "../../../domain/use-cases/payments/UpdatePaymentUseCase";
import type { PaymentStore } from "./PaymentState";
import { Ploc } from "../../../core/Ploc";
import type { Router } from "vue-router";
import CustomNotification from "../../../core/utility/CustomNotify";

export class PaymentBloc extends Ploc<PaymentStore> {
   private searchUseCase: SearchPaymentsUseCase;
   private updatePaymentUseCase: UpdatePaymentUseCase;
   private notify: CustomNotification

   constructor({
      store,
      router,
      searchUseCase,
      updatePaymentUseCase,
      notify,
   }: {
      store: PaymentStore,
      router: Router,
      searchUseCase: SearchPaymentsUseCase,
      updatePaymentUseCase: UpdatePaymentUseCase;
      notify: CustomNotification
   }) {
      super({ store, router });
      this.searchUseCase = searchUseCase;
      this.updatePaymentUseCase = updatePaymentUseCase;
      this.notify = notify
   }

   searchPayments = async (): Promise<void> => {
      this.store.error = "";
      this.store.fetchingData = true;
      const failureOrSuccess = await this.searchUseCase.execute(this.store.searchStatus);
      this.store.fetchingData = false;
      failureOrSuccess.fold(
         error => {
            this.store.error = this.handleErrors(error);
         },
         (response) => {
            this.store.Payments = response
         }
      )
   }

   updatePayment = async (): Promise<void> => {
      this.store.error = "";
      const failureOrSuccess = await this.updatePaymentUseCase.execute(this.store.focus_payment_id);
      this.store.focus_payment_id = 0
      failureOrSuccess.fold(
         error => {
            this.store.error = this.handleErrors(error);
            this.notify.error(this.store.error);
         },
         (_) => {
            this.notify.success("El pago se actualizó de manera correcta");
         });
      this.searchPayments()
   }
}