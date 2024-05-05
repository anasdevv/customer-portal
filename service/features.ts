import axios from 'axios';
import { axiosClient } from './axiosClient';

class FeatruesService {
  protected url: string;

  public constructor() {
    console.log('constructor ', process.env.NEXT_PUBLIC_BACKEND_BASE_URL);
    this.url = `${
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL || 'http://localhost:3003'
    }/features/`;
  }

  public async getAll() {
    try {
      console.log('this ', this.url);
      const response = await axiosClient.get('http://localhost:3003/features');
      console.log('response ', response.data);
      return response.data;
    } catch (error: any) {
      console.error('Login failed:', error);
      return {
        message: error?.message ?? 'Something went wrong',
      };
    }
  }
}

export default new FeatruesService();
//
