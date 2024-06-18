import { Item } from 'vue3-easy-data-table'
import { defineStore } from "pinia";
import { ConcilliedStatus } from '../../../domain/entities/enums/ConcilliedStatus';

interface State {
   Payments: Item[],
   error?: string,
   searchStatus: ConcilliedStatus
   fetchingData: boolean,
   focus_payment_id: number,
}
const usePaymentState = defineStore('PaymentState', {
   state: (): State => {
      return {
         Payments: [],
         error: undefined,
         fetchingData: false,
         searchStatus: ConcilliedStatus.Pending,
         focus_payment_id: 0
      }
   },
   actions: {
      clearData() {
         this.Payments = []
      },
   }
});

export default usePaymentState;

export type PaymentStore = Omit<
   ReturnType<typeof usePaymentState>,
   keyof ReturnType<typeof defineStore>
>;
