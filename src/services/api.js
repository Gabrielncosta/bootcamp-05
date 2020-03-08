import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
  auth: {
    username: 'Gabrielncosta',
  },
});

export default api;
