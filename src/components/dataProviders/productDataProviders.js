import {useState, useEffect, createContext} from 'react';
import {getData} from '../helpers/getData';

export const ProductDataContext = createContext();

const ProductDataProvider = ({children}) => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    try {
      getData(currentPage)
        .then(uniqueProducts => {
          setProducts(uniqueProducts);
          setIsLoading(false);
          console.log(uniqueProducts);
          console.log(currentPage)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setIsLoading(false);
        });
    } finally {
      setIsLoading(false);
    }
  }, [currentPage]);

  return (
    <ProductDataContext.Provider
      value={{products, setCurrentPage, currentPage, isLoading}}
    >
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataProvider;
