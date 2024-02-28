import {useState, useEffect, createContext} from 'react';
import {getProducts, getBrands} from '../helpers/getData';

export const ProductDataContext = createContext();

const ProductDataProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage]=useState(1);
  const [brands, setBrands]=useState(1);
  const [isLoading, setIsLoading]=useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    getProducts(currentPage)
      .then((uniqueProducts) => {
        setProducts(uniqueProducts);
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
  }, [])

  return (
    <ProductDataContext.Provider
      value={{products, brands, setCurrentPage, currentPage, isLoading}}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataProvider;
