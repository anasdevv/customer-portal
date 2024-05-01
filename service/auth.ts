import { IUserLogin } from '@/app/schema/loginSchema';
import { IUserSignup } from '@/app/schema/signupSchema';
import axios, { AxiosInstance } from 'axios';
import Error from 'next/error';

class AuthService {
  public async login({ email, password }: IUserLogin) {
    try {
      console.log('here 2');
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/auth/login`,
        {
          email,
          password,
        }
      );
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
