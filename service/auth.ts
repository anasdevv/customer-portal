import { IUserLogin } from '@/app/schema/loginSchema';
import axios, { AxiosInstance } from 'axios';

class AuthService {
  protected readonly url: string;

  public constructor(url: string) {
    this.url = url;
  }
  public async login({ email, password }: IUserLogin) {
    try {
      const response = await axios.post(`http://localhost:3003/auth/login`, {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
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
