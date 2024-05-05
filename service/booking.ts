import axios from 'axios';
import { axiosClient } from './axiosClient';
import { BookingType } from '@/lib/types';

class BookingService {
  public async addBooking(data: BookingType) {
    try {
      const response = await axiosClient.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/booking`,
        {
          ...data,
        }
      );
      return response.data;
    } catch (error: any) {
      //   console.log('here ');
      console.log('error ', error);
      throw error?.response?.data;
    }
  }
  public async getUnavailableDates(roomId: string) {
    try {
      const response = await axiosClient.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/booking/unavailable-date/${roomId}`
      );
      return response.data;
    } catch (error: any) {
      //   console.log('here ');
      console.log('error ', error);
      throw error?.response?.data;
    }
  }
  public async getCurrentBooking() {
    try {
      const response = await axiosClient.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/booking/can-order-food`
      );
      return response.data;
    } catch (error: any) {
      throw error?.response?.data ?? error;
    }
  }
  public async canAddReview(roomId: string) {
    try {
      const response = await axiosClient.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/booking/can-add-review/${roomId}`
      );
      return response.data;
    } catch (error: any) {
      throw error?.response?.data ?? error;
    }
  }
}
export default new BookingService();
