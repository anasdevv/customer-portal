import { axiosClient } from './axiosClient';

export class OrderFood {
  public async orderFood({
    bookingId,
    orders,
  }: {
    bookingId: string;
    orders: {
      id: string;
      quantity: number;
    }[];
  }) {
    try {
      const response = await axiosClient.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/order-food`,
        {
          bookingId,
          orders,
        }
      );
      return response.data;
    } catch (error: any) {
      throw error?.response?.data ?? error;
    }
  }
}
export default new OrderFood();
