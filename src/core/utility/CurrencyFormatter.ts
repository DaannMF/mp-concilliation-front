const formatCurrency = (amount: number): string => {
   return Intl.NumberFormat('en-ES', {
      style: 'currency',
      currency: 'ARS'
   }).format(amount);
}

export default formatCurrency;