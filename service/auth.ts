import { IUserLogin } from '@/app/schema/loginSchema';
import axios, { AxiosInstance } from 'axios';
import Error from 'next/error';

class AuthService {
  protected readonly url: string;

  public constructor(url?: string) {
    this.url =
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL ||
      url ||
      'http://localhost:3003';
  }
  public async login({ email, password }: IUserLogin) {
    try {
      const response = await axios.post(`${this.url}/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error: any) {
      console.error('Login failed:', error);
      return {
        message: error?.message ?? 'Something went wrong',
      };
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
}

export default new AuthService('http://localhost:3003');
//
