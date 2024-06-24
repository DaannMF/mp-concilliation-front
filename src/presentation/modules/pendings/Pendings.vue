<template>
   <div class="container-fluid">
      <div class="row justify-content-center mt-4">
         <div class="col-md-12">
            <div class="card">
               <div class="card-body">
                  <div class="d-flex justify-content-between mb-2">
                     <div class="d-flex align-items-center">
                        <div class="input-group">
                           <span class="input-group-text text-body"><i class="fas fa-search"
                                 aria-hidden="true"></i></span>
                           <input v-model="searchValue" type="text" class="form-control" placeholder=" Busqueda...">
                        </div>
                     </div>
                     <button type="button" class="btn btn-primary mb-0" @click="authPloc.searchPayments()">
                        <i class="fas fa-sync-alt"></i>
                     </button>
                  </div>
                  <div class="table-container">
                     <DataTable :headers="Headers" :items="state.Payments" :search-field="SearchFields"
                        :search-value="searchValue" :loading="state.fetchingData">

                        <template #item-money_release_date="item">
                           {{ formatDate(item.money_release_date) }}
                        </template>

                        <template #item-transaction_amount="item">
                           {{ formatCurrency(item.transaction_amount) }}
                        </template>

                        <template #item-action="item">
                           <button type="button" @click="state.focus_payment_id = item.payment_id"
                              data-bs-toggle="modal" data-bs-target="#confirm_payment"
                              class="bg-primary rounded text-light text-bold border-0">
                              Conciliar
                           </button>
                        </template>

                     </DataTable>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>

   <ConfirmModal @confirm="authPloc.updatePayment()" />
</template>

<script setup lang="ts">
import usePaymentState from '../../bloc/payments/PaymentState';
import { DependencyLocator } from '../../../core/dependencies/DependencyLocator';
import formatCurrency from '../../../core/utility/CurrencyFormatter'
import formatDate from '../../../core/utility/DateFormatter'

import DataTable from "../../components/shared/table/index.vue"
import ConfirmModal from "../../components/shared/modal/ConfirmModal.vue"

import { Header } from "vue3-easy-data-table";
import { ref } from "vue";
import { ConcilliedStatus } from '../../../domain/entities/enums/ConcilliedStatus';

const state = usePaymentState();
const authPloc = DependencyLocator.providePaymentPloc(state)
const searchValue = ref("")

state.searchStatus = ConcilliedStatus.Pending
authPloc.searchPayments()

const SearchFields: string[] = [
   "payment_id",
   "payer_identification_number",
   "payer_email"
]

const Headers: Header[] = [
   {
      value: "payment_id",
      text: "Id Transferencia",
      sortable: true,
   },
   {
      value: "money_release_date",
      text: "Fecha",
      sortable: true,
   },
   {
      value: "transaction_amount",
      text: "Cantidad $",
      sortable: true,
   },
   {
      value: "payer_email",
      text: "Email",
      sortable: true,
   },
   {
      value: "payer_identification_number",
      text: "CUIL/CUIT",
      sortable: true,
   },
   {
      value: "action",
      text: "Operación",
      sortable: false,
   }
];
</script>