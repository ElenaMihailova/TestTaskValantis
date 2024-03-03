import React, {useState, useEffect, createContext, ReactNode} from 'react';
import {LIMIT} from '../../const';
import {
  getProducts,
  getBrands,
  filterProducts,
  getItems,
  getAuthHeader,
} from '../helpers/getData';
import ProductItemProps from '../types/ProductItemProps';

interface ProductData {
  products: ProductItemProps[];
  brands: string[];
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  isLoading: boolean;
  filterProducts: (filterField: string, filterValue: string) => void;
  isLastPage: boolean;
  loadAllProducts: () => void;
}

interface ProductDataProviderProps {
  children: ReactNode;
}

export const ProductDataContext = createContext<ProductData>({
  products: [],
  brands: [],
  setCurrentPage: () => {},
  currentPage: 1,
  isLoading: true,
  filterProducts: () => {},
  isLastPage: false,
  loadAllProducts: () => {},
});

const ProductDataProvider: React.FC = ({
  children,
}: ProductDataProviderProps) => {
  const [products, setProducts] = useState<ProductItemProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [brands, setBrands] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts(currentPage)
      .then((uniqueProducts: ProductItemProps[]) => {
        setProducts(uniqueProducts);
        if (uniqueProducts.length < LIMIT - 1) {
          setIsLastPage(true);
        } else {
          setIsLastPage(false);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [currentPage]);

  useEffect(() => {
    setIsLoading(true);
    getBrands()
      .then((brandsData: string[]) => {
        setBrands(brandsData);
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleFilterProducts = async (
    filterField: string,
    filterValue: string
  ) => {
    setIsLoading(true);
    try {
      const filteredProducts = await filterProducts(filterField, filterValue);
      const productsWithDetails = await getItems(
        filteredProducts,
        getAuthHeader()
      );

      const paginatedProducts: ProductItemProps[][] = [];
      for (let i = 0; i < productsWithDetails.length; i += LIMIT) {
        paginatedProducts.push(productsWithDetails.slice(i, i + LIMIT));
      }

      setCurrentPage(1);
      setProducts(paginatedProducts[0]);

      if (productsWithDetails.length < LIMIT - 1) {
        setIsLastPage(true);
      } else {
        setIsLastPage(false);
      }
    } catch (error) {
      console.error('Error filtering products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const loadAllProducts = async () => {
    setIsLoading(true);
    try {
      const allProducts = await getProducts(currentPage);
      setProducts(allProducts);
      setIsLastPage(false);
    } catch (error) {
      console.error('Error loading all products:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ProductDataContext.Provider
      value={{
        products,
        brands,
        setCurrentPage,
        currentPage,
        isLoading,
        filterProducts: handleFilterProducts,
        isLastPage,
        loadAllProducts,
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataProvider;
