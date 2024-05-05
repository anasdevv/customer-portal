import { PaginatedResponse } from '@/lib/types';
import { axiosClient } from './axiosClient';

class RoomService {
  protected readonly url: string;

  public constructor(url?: string) {
    this.url = `${
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL || url || 'http://localhost:3003'
    }/room/`;
    // axiosClient.interceptors.request.use
  }
  public async getById(roomId: string) {
    try {
      const response = await axiosClient.get(`${this.url}${roomId}`);
      return response.data;
    } catch (error: any) {
      if (error?.response?.data?.statusCode === 401) {
        throw new Error(...error.response.data);
      }
      console.error('rooms error:', error);
      throw new Error(error?.message ?? 'Something went wrong');
    }
  }
  public async getPreviews() {
    try {
      const response = await axiosClient.get(`${this.url}preview`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
  public async getAll(queryParams: {
    pageNumber?: number | string;
    discount?: string;
    orderBy?: string;
    pageSize?: number;
    sort?: string;
    caps?: string;
    features?: string;
    maxPrice?: number | null;
  }): Promise<
    | PaginatedResponse
    | {
        message: string;
      }
  > {
    try {
      const filteredParams: any = {};
      for (const key in queryParams) {
        if (
          queryParams[key as keyof typeof queryParams] !== null &&
          queryParams[key as keyof typeof queryParams] !== undefined &&
          queryParams[key as keyof typeof queryParams] !== ''
        ) {
          filteredParams[key] = queryParams[key as keyof typeof queryParams];
        }
      }

      // Convert number to string if pageNumber is a number
      if (typeof filteredParams.pageNumber === 'number') {
        filteredParams.pageNumber = String(filteredParams.pageNumber);
      }
      const params = new URLSearchParams(filteredParams);
      const response = await axiosClient.get(`${this.url}`, { params });
      console.log('response ', response.data);
      return response.data;
    } catch (error: any) {
      console.log('code ', error.response.data);
      if (error?.response?.data?.statusCode === 401) {
        throw error?.response?.data;
      }
      console.error('rooms error:', error);
      throw new Error(error?.message ?? 'Something went wrong');
    }
  }
}

export default new RoomService();
//
