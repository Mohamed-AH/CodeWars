function formatMoney(amount){
  const usd = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    useGrouping: false
  });
  return usd.format(amount);
}