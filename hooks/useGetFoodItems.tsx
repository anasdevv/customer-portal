import { useQuery, useQueryClient } from '@tanstack/react-query';
import FoodItemsService from '@/service/food';
import { useSearchParams } from 'next/navigation';
export const ITEMS_PER_PAGE = 10;
export function useFoodItems() {
  const searchParams = useSearchParams();

  const page = !searchParams.get('page') ? 1 : Number(searchParams.get('page'));
  const search = searchParams.get('search') || '';
  const sortBy = searchParams.get('sortBy') || 'createdAt-desc';
  //   const [orderBy, sort] = sortBy.split('-');

  const { isLoading, data, error }: any = useQuery({
    queryKey: ['items', page, ITEMS_PER_PAGE, sortBy, search],
    queryFn: () =>
      FoodItemsService.getFoodItems({
        pageNumber: page,
        search,
        pageSize: ITEMS_PER_PAGE,
      }),
  });
  // const { items = [], count = 0 } = data;

  return {
    isLoading,
    error,
    items: data?.foodItems ?? [],
    count: data?.count ?? 0,
  };
}
