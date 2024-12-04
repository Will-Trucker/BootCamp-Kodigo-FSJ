// src/axiosConfig.js

import axios from 'axios';

// Create an Axios instance with a base URL
const api = axios.create({
  baseURL: 'http://localhost:5000/',  // replace with your API URL
});

export default api;
