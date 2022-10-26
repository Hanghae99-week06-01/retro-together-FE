import axios from 'axios';

export const user = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});
