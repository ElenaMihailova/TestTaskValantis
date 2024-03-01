import {useState, useEffect, createContext} from 'react';
import { LIMIT } from '../../const';
import {
  getProducts,
  getBrands,
  filterProducts,
  getItems,
  getAuthHeader,
} from '../helpers/getData';

export const ProductDataContext = createContext();

const ProductDataProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [brands, setBrands] = useState(1);
  const [isLoading, setIsLoading]=useState(true);
  const [isLastPage, setIsLastPage]=useState(false);
  

  useEffect(() => {
    setIsLoading(true);
    getProducts(currentPage)
      .then((uniqueProducts) => {
        setProducts(uniqueProducts);
        if (uniqueProducts.length < (LIMIT-1)) {
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
      .then((brandsData) => {
        setBrands(brandsData);
      })
      .catch((error) => {
        console.error('Error fetching brands:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const handleFilterProducts = async (filterField, filterValue) => {
    setIsLoading(true);
    try {
      const filteredProducts = await filterProducts(filterField, filterValue);
      const productsWithDetails = await getItems(
        filteredProducts,
        getAuthHeader()
      );
      setProducts(productsWithDetails);
      setCurrentPage(1);
      if (productsWithDetails.length < (LIMIT-1)) {
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
      }}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataProvider;
