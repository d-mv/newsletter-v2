import axios from 'axios';

const apiServer: any = 'http://localhost:3000/api';

const apiUrl = (endpoint: string): string => apiServer + endpoint;

export const getReq = (endpoint: string, config?: {}) =>
  axios.get(apiUrl(endpoint), config);
export const postReq = (endpoint: string, body?: {}, config?: {}) =>
  axios.post(apiUrl(endpoint), body, config);
export const putReq = (endpoint: string, body?: {}, config?: {}) =>
  axios.put(apiUrl(endpoint), body, config);
export const patchReq = (endpoint: string, body?: {}, config?: {}) =>
  axios.patch(apiUrl(endpoint), config);
export const deleteReq = (endpoint: string, config?: {}) =>
  axios.delete(apiUrl(endpoint), config);
