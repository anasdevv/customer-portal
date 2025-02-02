import { useQuery } from '@tanstack/react-query';
import RoomService from '@/service/room';
import {
  ReadonlyURLSearchParams,
  usePathname,
  useSearchParams,
} from 'next/navigation';
import { PaginatedResponse } from '@/lib/types';

import { setCookie } from 'cookies-next';
export const preProcessRoomQueryParam = (
  searchParams: ReadonlyURLSearchParams
) => {
  const pageNumber = searchParams.get('page') || '1';
  const discount = searchParams.get('discount') || 'all';
  const sort = searchParams.get('sort') || 'desc';
  const orderBy = searchParams.get('orderBy') || 'createdAt';
  const caps = searchParams.get('caps') || '';
  const features = searchParams.get('features') || '';
  const price = searchParams.get('price') || null;
  // if (caps && typeof caps === 'string') caps = caps.split(',') ?? [];
  // const [orderBy, sort] = sort.split('-');
  return {
    sort,
    pageNumber,
    discount,
    orderBy,
    caps,
    features,
    price,
  };
};
const ROOMS_PER_PAGE = 9;
const useGetRooms = () => {
  const pathname = usePathname();
  const [_, __, path] = pathname.split('/');
  const searchParams = useSearchParams();
  const { sort, discount, orderBy, pageNumber, caps, features, price } =
    preProcessRoomQueryParam(searchParams);
  console.log('caps ', caps);
  const {
    data,
    isLoading: fetchRoomsLoading,
    isError,
    error,
  } = useQuery({
    queryKey: [
      'cabins',
      sort,
      pageNumber,
      discount,
      orderBy,
      caps,
      features,
      price,
    ],
    queryFn: () =>
      RoomService.getAll({
        pageNumber,
        discount,
        orderBy,
        pageSize: ROOMS_PER_PAGE,
        sort,
        caps,
        features,
        ...(Boolean(price)
          ? {
              maxPrice: Number(price),
            }
          : {}),
      }),
    retry: false,
    enabled: path === 'rooms',
  });
  console.log('data ', data);
  if (isError && (error as any)?.statusCode === 401 && false) {
    // setCookie('Authentication', '');
    console.log('error22 ', error);
  }
  return {
    count: (data as PaginatedResponse)?.count ?? 0,
    rooms: (data as PaginatedResponse)?.rooms ?? [],
    fetchRoomsLoading,
    isError,
    error,
  };
};

export default useGetRooms;
