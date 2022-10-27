import axios from 'axios';
import { getCookie } from './cookie';

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASEURL,
  headers: {
    // 'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    authorization: `${getCookie('auth')}`,
    'Refresh-Token': `${getCookie('token')}`,
    nickname: 'nickname',
  },
});

export default instance;
