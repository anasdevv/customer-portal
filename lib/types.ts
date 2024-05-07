export interface FeatureType {
  id: string;
  featureName: string;
}
export interface ReviewType {
  id: string;
  comment?: string;
  userName: string;
  rating: number;
  roomId: string;
  userId: string;
  name?: string;
}
export interface RoomType {
  id: string;
  title: string;
  createdAt: Date;
  maxCapacity: number;
  regularPrice: number;
  discount: number;
  description: string;
  roomImage: string;
  rating: string;
  features: FeatureType[];
  reviews: ReviewType[];
}
export interface BookingType {
  id?: string;
  startDate: Date;
  endDate: Date;
  numNights: number;
  roomId: string;
  hasBreakfast: boolean;
  totalPrice: number;
  observations?: string;
  numGuests?: number;
}
// export interface FeatureType {}
export interface Option {
  label: string;
  value: string;
}
export interface PaginatedResponse {
  count: number;
  rooms: RoomType[];
}
export interface FoodItemType {
  name: string;
  id: string;
  picture?: string;
  price: number;
  description: string;
}

export interface OrderItem {
  id: string;
  quantity: string;
}
// export interface ReviewType
