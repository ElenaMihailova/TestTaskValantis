import {useState, useEffect, createContext} from 'react';
import {getData} from '../helpers/getData';

export const ProductDataContext = createContext();

const ProductDataProvider = ({children}) => {
  const [products, setProducts]=useState([]);
  const [currentPage, setCurrentPage]=useState(1);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const uniqueProducts = await getData();
        setProducts(uniqueProducts);
        console.log(uniqueProducts);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProductData();
    console.log(currentPage)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <ProductDataContext.Provider value={{products, setCurrentPage, currentPage}}>
      {children}
    </ProductDataContext.Provider>
  );
};

export default ProductDataProvider;
