import axios from 'axios';
import md5 from 'md5-js';
import {API_URL, PASSWORD} from '../../const';

export const getData = async () => {
  try {
    const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
    const authString = md5(`${PASSWORD}_${timestamp}`);
    const headers = {'X-Auth': authString};

    const {
      data: {result: ids},
    } = await axios.post(
      API_URL,
      {action: 'get_ids', params: {limit: 10}},
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

      const uniqueProductsMap = {};
      items.forEach((product) => {
        uniqueProductsMap[product.id] = product;
      });

      const uniqueProducts = Object.values(uniqueProductsMap);

      return uniqueProducts;
    } else {
      return [];
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    if (error.response && error.response.data && error.response.data.error) {
      console.log('API Error:', error.response.data.error);
    } else {
      console.log('Network Error:', error.message);
    }
    throw error;
  }
};
