import axios from 'axios';
import md5 from 'md5-js';
import { API_URL, PASSWORD, LIMIT } from '../../const';
import ProductItemProps from '../types/ProductItemProps';

export interface Headers {
  [key: string]: string;
}

export const getAuthHeader = (): Headers => {
  const timestamp = new Date().toISOString().split('T')[0].replace(/-/g, '');
  const authString = md5(`${PASSWORD}_${timestamp}`);
  return {'X-Auth': authString};
};

const fetchData = async (action: string, params: any, headers: Headers) => {
  try {
    const response = await axios.post(API_URL, { action, params }, { headers });
    return response.data.result;

  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching data:', error);
      if (error.response && error.response.data && error.response.data.error) {
        console.log('API Error:', error.response.data.error);
      } else {
        console.log('Network Error:', error.message);
      }
    } else {
      console.error('Unknown Error:', error);
    }
    throw error;
  }
};

export const getProducts = async (offset: number) => {
  try {
    const headers = getAuthHeader();
    const ids: number[] = await getIds(offset, headers);

    const uniqueIds = [...new Set(ids)];

    if(uniqueIds.length > 0)
    {
      const items = await getItems(uniqueIds, headers);
      return items;
    } else {
      return {items: []};
    }
  } catch (error) {
    throw error;
  }
};

const getIds = async (offset: number, headers: Headers) =>
{
  return await fetchData('get_ids', {limit: LIMIT, offset}, headers);
};

export const getItems = async (
  ids: number[],
  headers: Headers
): Promise<ProductItemProps[]> => {
  const products = await fetchData('get_items', { ids }, headers);
  const uniqueProductsMap: { [id: number]: ProductItemProps } = {};
  products.forEach((product: ProductItemProps) =>
  {
    uniqueProductsMap[product.id] = product;
  });
  return Object.values(uniqueProductsMap);
};


export const getBrands = async (): Promise<string[]> => {
  try {
    const headers = getAuthHeader();
    const response = await axios.post(
      API_URL,
      {action: 'get_fields', params: {field: 'brand'}},
      {headers}
    );

    const uniqueBrands=[...new Set<string>(response.data.result)];
    return uniqueBrands;
  } catch (error) {
    console.error('Error fetching brands:', error);
    throw error;
  }
};

export const filterProducts = async (
  filterField: string,
  filterValue: string
) => {
  try {
    const headers = getAuthHeader();

    const response = await axios.post(
      API_URL,
      {action: 'filter', params: {[filterField]: filterValue}},
      {headers}
    );
    return response.data.result;
  } catch (error) {
    console.error('Error filtering products:', error);
    throw error;
  }
};
