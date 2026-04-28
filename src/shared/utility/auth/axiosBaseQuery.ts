import { BaseQueryFn } from '@reduxjs/toolkit/query';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { environment } from '../../environments/environment';

const axiosInstance = axios.create({
  baseURL: environment.apiBaseUrl,
  timeout: 30000,
});

// Add auth interceptor for future use
axiosInstance.interceptors.request.use(
  (config) => {
    // Add auth token if available
    const token = localStorage.getItem('authToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle 401 - redirect to login if needed
    if (error.response?.status === 401) {
      // Trigger logout action
    }
    return Promise.reject(error);
  }
);

export const axiosBaseQuery = (): BaseQueryFn<
  {
    url: string;
    method?: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
  },
  unknown,
  unknown
> => async ({ url, method = 'GET', data, params }) => {
  try {
    const result = await axiosInstance({
      url,
      method,
      data,
      params,
    });
    return { data: result.data };
  } catch (axiosError) {
    const err = axiosError as AxiosError;
    return {
      error: {
        status: err.response?.status,
        data: err.response?.data,
        message: err.message,
      },
    };
  }
};
