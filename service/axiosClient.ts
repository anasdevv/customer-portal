import axios from 'axios';
import { setCookie } from 'cookies-next';
import { redirect } from 'next/navigation';
import Router from 'next/router';

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_USER,
  headers: { 'Content-Type': 'application/json' },
});
axiosClient.interceptors.request.use(
  (config) => {
    const user = JSON.parse(localStorage.getItem('user') ?? '{}');
    if (user?.token) {
      config.headers.Authorization = `Bearer ${user?.token ?? ''}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.data?.statusCode === 401) {
      const user = JSON.parse(localStorage.getItem('user') ?? '{}');
      // state?.resetUser();
      setCookie('Authentication', '');
      console.log('error22 ', error);
      localStorage.removeItem('user');
      // redirect('/auth/login');
      window.location.href = '/auth/login';
    }
    return Promise.reject(error);
  }
);
