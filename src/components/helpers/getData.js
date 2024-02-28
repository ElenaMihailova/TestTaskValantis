import axios from 'axios';
import md5 from 'md5-js';
import { API_URL, PASSWORD, LIMIT } from '../../const';

const getAuthHeader = () => {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const authString = md5(`${PASSWORD}_${timestamp}`);
  return { 'X-Auth': authString };
};

const fetchData = async (action, params, headers) => {
  try {
    const response = await axios.post(
      API_URL,
      { action, params },
      { headers }
    );
    return response.data.result;
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

export const getProducts = async (offset) => {
  try {
    const headers = getAuthHeader();
    const ids = await getIds(offset, headers);

    const uniqueIds = [...new Set(ids)];

    if (uniqueIds.length > 0) {
      const items = await getItems(uniqueIds, headers);
      return items;
    } else {
      return { items: []};
    }
  } catch (error) {
    throw error;
  }
};

const getIds = async (offset, headers) => {
  return await fetchData('get_ids', { limit: LIMIT, offset }, headers);
};

const getItems = async (ids, headers) => {
  const products = await fetchData('get_items', { ids }, headers);
  const uniqueProductsMap = {};
  products.forEach((product) => {
    uniqueProductsMap[product.id] = product;
  });
  return Object.values(uniqueProductsMap);
};

export const getBrands = async () => {
  try {
    const headers = getAuthHeader(); 
    const response = await axios.post(
      API_URL,
      { action: 'get_fields', params: { field: 'brand' } },
      { headers }
    );

    const uniqueBrands = [...new Set(response.data.result)];

    return uniqueBrands;
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
};


