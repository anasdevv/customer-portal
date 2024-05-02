import Image from 'next/image';
import { Button } from '../ui/button';
import { FoodItemType } from '@/lib/types';
import { OrderFoodItem } from '.';

export const FoodItem = ({
  price,
  description,
  picture,
  name,
  id,
  addItemToOrder,
}: FoodItemType & {
  addItemToOrder: (item: OrderFoodItem) => void;
}) => (
  <div className='flex flex-col gap-2'>
    <Image
      alt='Food Picture'
      className='aspect-square object-cover rounded-lg border border-gray-200 dark:border-gray-800'
      height={400}
      src={
        picture ??
        'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
      }
      width={400}
    />
    <div className='flex flex-col gap-1.5'>
      <h2 className='font-semibold text-lg'>{name}</h2>
      <p className='text-sm text-muted line-clamp-3'>{description}</p>
      <div className='font-semibold'>${price}</div>
      <Button
        onClick={() => {
          addItemToOrder({
            price,
            picture,
            name,
            id,
          } as OrderFoodItem);
        }}
        size='sm'
        className=' bg transform transition hover:scale-95 bg-gradient-to-r from-indigo-300 to-sky-500'
      >
        Add to cart
      </Button>
    </div>
  </div>
);
