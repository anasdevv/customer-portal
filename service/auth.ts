import { IUserLogin } from '@/app/schema/loginSchema';
import { IUserSignup } from '@/app/schema/signupSchema';
import axios, { AxiosInstance } from 'axios';
import Error from 'next/error';
import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const axiosClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL_USER,
  headers: { 'Content-Type': 'application/json' },
});
axiosClient.interceptors.response.use(
  (response) => {
    console.log('here c');
    const cookie = getCookie('Authentication');

    console.log('response ', cookie);
    return response;
  },
  async (error) => {
    const originalConfig = error.config;

    const cookie = getCookie('Authentication');
    console.log('cookie ', cookie);
    return Promise.reject(error);
  }
);
class AuthService {
  public async login({ email, password }: IUserLogin) {
    try {
      console.log('here 2');
      const response = await axiosClient.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login`,
        {
          email,
          password,
        }
      );
      if (response?.data?.token) {
        console.log('response token ', response.data.token);
        setCookie('Authentication', response.data.token);
      }
      console.log('headers ', response.headers?.getAuthorization);

      return response.data;
    } catch (error: any) {
      console.log('errorr', error);
      console.error('Login failed:', error.response.data);
      throw new Error(error?.response?.data?.message ?? 'something went wrong');
    }
  }
  public async logout() {
    try {
      const response = await axios.post(`http://localhost:3003/auth/logout`);
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  }
  public async signup(data: IUserSignup) {
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/signup`,
        data
      );
      return response.data;
    } catch (error: any) {
      console.log('error ', error);
      throw new Error(error.response.data);
    }
  }
}

export default new AuthService();
//
