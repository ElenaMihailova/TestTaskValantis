const formatPrice = (price) => {
  const priceString = price.toString();
  if (priceString.includes(' ')) {
    return priceString;
  } else {
    const lastThreeDigits = priceString.slice(-3);
    const restOfDigits = priceString.slice(0, -3);
    return `${restOfDigits} ${lastThreeDigits}`;
  }
};

export default formatPrice;