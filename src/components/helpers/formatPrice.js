const formatPrice = (price) => {
  const priceString = price.toFixed(2);
  const parts = priceString.split('.');
  const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const decimalPart = parts[1];
  return `${integerPart},${decimalPart}`; 
};

export default formatPrice;
