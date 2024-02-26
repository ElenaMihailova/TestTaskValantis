import React, {useState, useEffect} from 'react';
import axios from 'axios';
import md5 from 'md5-js';
import {API_URL, PASSWORD} from '../../const';

const ProductDataProvider = ({children}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timestamp = new Date()
          .toISOString()
          .split('T')[0]
          .replace(/-/g, '');
        const authString = md5(`${PASSWORD}_${timestamp}`);
        const headers = {'X-Auth': authString};

        const {
          data: {result: ids},
        } = await axios.post(
          API_URL,
          {action: 'get_ids', params: {limit: 50}},
          {headers}
        );

        const uniqueIds = [...new Set(ids)];

        if (uniqueIds.length > 0) {
          const {
            data: {result: items},
          } = await axios.post(
            API_URL,
            {action: 'get_items', params: {ids: uniqueIds}},
            {headers}
          );

          const uniqueProducts = items.filter(
            (product, index, self) =>
              self.findIndex((p) => p.id === product.id) === index
          );

          setProducts(uniqueProducts);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (
          error.response &&
          error.response.data &&
          error.response.data.error
        ) {
          console.log('API Error:', error.response.data.error);
          fetchData();
        }
      }
    };

    fetchData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children(products)}</>;
};

export default ProductDataProvider;
