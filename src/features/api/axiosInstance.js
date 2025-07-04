// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: '/api', // backend ka base URL
});

// Request interceptor to add token header
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token'); // ya jaha token store hai
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
