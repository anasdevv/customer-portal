import { PaginatedResponse } from '@/lib/types';
import axios from 'axios';

export class FoodService {
  public async getFoodItems(queryParams: {
    pageNumber?: number | string;
    pageSize?: number;
    search: string;
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
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/food-items`,
        {
          params: new URLSearchParams(filteredParams),
        }
      );
      return response.data;
    } catch (error: any) {
      throw new Error(error);
    }
  }
}
export default new FoodService();
