'use client';
import axios from 'axios';
import { useEffect } from 'react';
import { useUser } from './UserContext';
// import useStore from '@/app/store/useStore';
const AxiosInterceptor = () => {
  const { user } = useUser();
  useEffect(() => {
    const requestInterceptor = axios.interceptors.request.use(
      (config) => {
        if (user) {
          config.headers.Authorization = `Bearer ${user?.token ?? ''}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      axios.interceptors.request.eject(requestInterceptor);
    };
  }, [user?.token]);

  return null; // This component doesn't render anything
};

export default AxiosInterceptor;
