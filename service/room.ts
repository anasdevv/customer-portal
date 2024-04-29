import { IUserLogin } from '@/app/schema/loginSchema';
import { RoomType } from '@/lib/types';
import axios from 'axios';

export interface PaginatedResponse {
  count: number;
  rooms: RoomType[];
}

class RoomService {
  protected readonly url: string;

  public constructor(url?: string) {
    this.url = `${
      process.env.NEXT_PUBLIC_BACKEND_BASE_URL || url || 'http://localhost:3003'
    }/room/`;
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
      const response = await axios.get(`${this.url}`, { params });
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

export default new RoomService();
//
