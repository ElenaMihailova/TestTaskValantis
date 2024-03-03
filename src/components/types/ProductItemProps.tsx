interface ProductItemProps {
  product: {
    id: number;
    product: string;
    price: number;
    brand: string;
  };
  index: number;
  currentPage: number;
}

export default ProductItemProps;