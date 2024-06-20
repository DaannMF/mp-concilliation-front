const formatCurrency = (amount: number): string => {
   return Intl.NumberFormat('en-AR', {
      style: 'currency',
      currency: 'ARS'
   }).format(amount);
}

export default formatCurrency;