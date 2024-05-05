import { axiosClient } from './axiosClient';

export class Review {
  public async getAll({ roomId }: { roomId: string }) {
    try {
      const response = await axiosClient.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/reviews/room/${roomId}`
      );
      return response.data;
    } catch (error: any) {
      throw error?.response?.data ?? error;
    }
  }
  public async getReviewByUserId({ userId }: { userId: string }) {
    try {
      const response = await axiosClient.get(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/reviews/user/${userId}`
      );
      return response.data;
    } catch (error: any) {
      throw error?.response?.data ?? error;
    }
  }
  public async addReview({
    roomId,
    comment,
    rating,
  }: {
    roomId: string;
    comment?: string;
    rating: number;
  }) {
    try {
      const response = await axiosClient.post(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/reviews/${roomId}`,
        {
          comment,
          rating,
        }
      );
      return response.data;
    } catch (error: any) {
      throw error?.response?.data ?? error;
    }
  }
  public async updateReview({
    reviewId,
    comment,
    rating,
  }: {
    reviewId: string;
    comment?: string;
    rating: number;
  }) {
    try {
      const response = await axiosClient.patch(
        `${process.env.NEXT_PUBLIC_BACKEND_BASE_URL}/reviews/${reviewId}`,
        {
          comment,
          rating,
        }
      );
      return response.data;
    } catch (error: any) {
      throw error?.response?.data ?? error;
    }
  }
}
export default new Review();
