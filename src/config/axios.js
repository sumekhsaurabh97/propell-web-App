import axios from 'axios'
import { API_URL } from './config';

const axiosInstance = axios.create({
  baseURL: API_URL.DEV,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

const axiosLoginInstance = axios.create({
  baseURL: API_URL.DEV,
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
});

export {
  axiosInstance,
  axiosLoginInstance,
}