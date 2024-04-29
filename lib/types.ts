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

// export interface FeatureType {}
export interface Option {
  label: string;
  value: string;
}
