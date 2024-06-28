import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api',
  headers: {
    'Accept': 'application/json',
    // Open Data BCN token to avoid CORS restriction issue. I had to create an account to get a token and be able to make the request
    'Authorization': import.meta.env.VITE_API_TOKEN
  }
});

export default axiosInstance;
