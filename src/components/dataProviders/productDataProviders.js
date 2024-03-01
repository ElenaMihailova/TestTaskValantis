import {useState, useEffect, createContext} from 'react';
import {LIMIT} from '../../const';
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
  const [isLoading, setIsLoading] = useState(true);
  const [isLastPage, setIsLastPage] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    getProducts(currentPage)
      .then((uniqueProducts) => {
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
      const filteredProducts = await filterProducts(
        filterField,
        filterValue,
        (currentPage - 1) * LIMIT
      );
      const productsWithDetails = await getItems(
        filteredProducts,
        getAuthHeader()
      );

      const paginatedProducts = [];
      for (let i = 0; i < productsWithDetails.length; i += LIMIT) {
        paginatedProducts.push(productsWithDetails.slice(i, i + LIMIT));
      }

      setCurrentPage(1);
      setProducts(paginatedProducts[0]);
      console.log(productsWithDetails);

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
