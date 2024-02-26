import React, { useState, useEffect } from 'react';
import axios from 'axios';
import md5 from 'md5-js';

const API_URL = 'http://api.valantis.store:40000/';
const PASSWORD = 'Valantis';

const ProductDataProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
        const authString = md5(`${PASSWORD}_${timestamp}`);
        
        // Запрос на получение идентификаторов товаров
        let response = await axios.post(
          `${API_URL}`,
          {
            action: 'get_ids',
            params: { limit: 50 } // Пример параметров, если нужно ограничить количество получаемых записей
          },
          { headers: { 'X-Auth': authString } }
        );
        
        // Получение списка уникальных идентификаторов товаров
        const uniqueIds = new Set(response.data.result);
  
        if (uniqueIds.size > 0) {
          // Запрос на получение товаров по уникальным идентификаторам
          response = await axios.post(
            `${API_URL}`,
            {
              action: 'get_items',
              params: { ids: Array.from(uniqueIds) }
            },
            { headers: { 'X-Auth': authString } }
          );
          
          // Фильтрация уникальных товаров по идентификаторам
          const uniqueProducts = response.data.result.filter((product, index, self) => {
            return self.findIndex(p => p.id === product.id) === index;
          });
  
          setProducts(uniqueProducts);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        if (error.response && error.response.data && error.response.data.error) {
          console.log('API Error:', error.response.data.error);
          // Повторный запрос в случае ошибки
          fetchData();
        }
      }
    };
  
    fetchData();
  }, []);

  return <>{children(products)}</>;
};

export default ProductDataProvider;
