'use client';

import { useFoodItems } from '@/hooks/useGetFoodItems';
import { ServerSidePagination } from '../server-side-pagination';
import { FoodItem } from './foodItem';
import { FoodItemType } from '@/lib/types';
import { OrderFoodItem } from '.';

export const FoodItems = ({
  addItemToOrder,
}: {
  addItemToOrder: (item: OrderFoodItem) => void;
}) => {
  const { items, count, isLoading } = useFoodItems();
  console.log('items ', items);
  return (
    <div className='flex flex-col space-y-5'>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start max-w-6xl px-4 mx-auto'>
        {items?.map((item: FoodItemType) => (
          <FoodItem {...item} key={item.id} addItemToOrder={addItemToOrder} />
        )) ?? []}
      </div>
      <ServerSidePagination count={count} />
    </div>
  );
};
