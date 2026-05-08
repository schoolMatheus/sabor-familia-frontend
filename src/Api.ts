import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api/sabor-familia',
  headers: {
    "Content-Type": "application/json",
    "X-User-Id": "41"
  },
});

export default api;
