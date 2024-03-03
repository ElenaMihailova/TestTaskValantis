const formatPrice = (price: number) => {
  if (price === undefined || price === null) {
    return '0,00';
  }

  const priceString: string = price.toFixed(2);
  const parts: string[] = priceString.split('.');
  const integerPart: string = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const decimalPart: string = parts[1];
  return `${integerPart},${decimalPart}`;
};

export default formatPrice;
