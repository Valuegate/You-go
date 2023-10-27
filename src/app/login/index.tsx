import axios from 'axios';

axios.interceptors.request.use(
  function (config) {
    // Add authorization header if needed
    const token = localStorage.getItem('access-token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

const apiUrl = 'https://web-production-b1c8.up.railway.app';
const productApiUrl = `${apiUrl}/products`;
const userApiUrl = `${apiUrl}/users`;

export const fetchProducts = async () => {
  try {
    const response = await axios.get(productApiUrl);
    return response.data; // Assuming the API returns an array of products
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProductDetails = async (productId: any) => {
  try {
    const response = await axios.get(`${productApiUrl}/${productId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};

export const fetchUsers = async () => {
  try {
    const response = await axios.get(`${userApiUrl}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching product details:', error);
    throw error;
  }
};