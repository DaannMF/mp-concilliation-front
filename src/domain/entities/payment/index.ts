export interface Payment {
   ID: number,
   MoneyReleaseDate: Date,
   PaymentStatus: string,
   PayerEmail: string,
   PayerIdentificationType: string,
   PayerIdentificationNumber: string,
   CurrencyID: string,
   TransactionAmount: string,
   ConcilliedDate: Date,
   ConcilliedUser: string,
}