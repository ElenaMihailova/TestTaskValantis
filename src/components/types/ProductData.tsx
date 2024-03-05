import { ProductItemProps } from './ProductItemProps';

export interface ProductData
{
  products: ProductItemProps[];
  brands: string[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  isLoading: boolean;
  filterProducts: (filterField: string, filterValue: string) => void;
  isLastPage: boolean;
  loadAllProducts: () => void;
  onNextPageClick: () => void; 
  onPrevPageClick: () => void;
}