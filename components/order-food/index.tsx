'use client';
import Image from 'next/image';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { SearchBarWithIcon } from '../ui/searchbar-with-icon';
import { FoodItems } from './foodlist';
import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useState } from 'react';
import { FoodItemType } from '@/lib/types';
import { TrashIcon } from '@radix-ui/react-icons';
import { TbMoodEmptyFilled } from 'react-icons/tb';
export interface OrderFoodItem extends FoodItemType {
  quantity: number;
}
export const OrderFood = () => {
  const [orderItems, setOrderItems] = useState<OrderFoodItem[]>();

  const addItemToOrder = (item: OrderFoodItem) => {
    const existingItemIndex = orderItems?.findIndex(
      (orderItem) => orderItem.id === item.id
    );

    if (existingItemIndex && existingItemIndex !== -1) {
      console.log('here');
      const updatedOrderItems = [...(orderItems ?? [])];
      updatedOrderItems[existingItemIndex].quantity += 1;
      setOrderItems(updatedOrderItems);
    } else {
      setOrderItems([...(orderItems ?? []), { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromOrder = (itemId: string) => {
    const updatedOrderItems = orderItems?.filter(
      (orderItem) => orderItem.id !== itemId
    );
    setOrderItems(updatedOrderItems);
  };

  const increaseQuantity = (itemId: string) => {
    const updatedOrderItems = orderItems?.map((orderItem) =>
      orderItem.id === itemId
        ? { ...orderItem, quantity: orderItem.quantity + 1 }
        : orderItem
    );
    setOrderItems(updatedOrderItems);
  };

  const decreaseQuantity = (itemId: string) => {
    const updatedOrderItems = orderItems?.map((orderItem) =>
      orderItem.id === itemId && orderItem.quantity > 1
        ? { ...orderItem, quantity: orderItem.quantity - 1 }
        : orderItem
    );
    setOrderItems(updatedOrderItems);
  };

  return (
    <div className='flex space-x-2 w-full overflow-hidden relative h-full rounded-2xl p-3  font-bold text-white bg-gradient-to-br from-slate-700 to-slate-950 pb-4'>
      {/* <Filters /> */}
      {/* bill */}
      <div className=' bg-slate-800 h-full static w-[25rem] overflow-hidden rounded-lg hidden lg:block p-2'>
        <Card className='w-full bg-slate-50'>
          <CardHeader>
            <CardTitle>Your Order</CardTitle>
          </CardHeader>
          <CardContent className='grid gap-4'>
            <ScrollArea className='h-[29rem]'>
              {!orderItems || orderItems?.length === 0 ? (
                <EmptyState />
              ) : (
                orderItems?.map((orderItem, index: number) => (
                  <>
                    <div
                      key={orderItem.id}
                      className='flex items-center justify-between bg-slate-50 rounded  py-1'
                    >
                      <div className='flex items-center gap-4'>
                        <img
                          alt='Food Image'
                          className='rounded-md'
                          height={64}
                          src={orderItem.picture}
                          style={{
                            aspectRatio: '64/64',
                            objectFit: 'cover',
                          }}
                          width={64}
                        />
                        <div>
                          <h3 className='font-medium'>{orderItem.name}</h3>
                          <p className='text-sm text-gray-500 dark:text-gray-400'>
                            ${orderItem.price}
                          </p>
                        </div>
                      </div>
                      <div className='flex items-center gap-2'>
                        <Button
                          size='icon'
                          variant='outline'
                          onClick={() => decreaseQuantity(orderItem.id)}
                        >
                          <MinusIcon className='h-4 w-4' />
                          <span className='sr-only'>Decrease quantity</span>
                        </Button>
                        <span className='text-sm font-medium'>
                          {orderItem.quantity}
                        </span>
                        <Button
                          size='icon'
                          variant='outline'
                          onClick={() => increaseQuantity(orderItem.id)}
                        >
                          <PlusIcon className='h-4 w-4' />
                          <span className='sr-only'>Increase quantity</span>
                        </Button>
                        <Button
                          size='icon'
                          variant='outline'
                          onClick={() => removeItemFromOrder(orderItem.id)}
                        >
                          <TrashIcon className='h-4 w-4' />
                          <span className='sr-only'>Remove item</span>
                        </Button>
                      </div>
                    </div>
                    {index !== orderItems.length - 1 && <Separator />}
                  </>
                ))
              )}
            </ScrollArea>
          </CardContent>
        </Card>
        {orderItems && orderItems?.length > 0 && (
          <div className='pt-3 w-full'>
            <Button
              onClick={() => {
                console.log('hi');
              }}
              size='sm'
              className='w-full py-6 bg transform transition hover:scale-95 bg-gradient-to-r from-indigo-300 to-sky-500'
            >
              Order food
            </Button>
          </div>
        )}
      </div>
      <div className='flex-1 flex-col  space-y-6 w-full h-full p-2 rounded-lg overflow-hidden sticky'>
        <div className='flex justify-between space-x-5'>
          <div className=''>
            <h1 className='text-white line-clamp-2 text-2xl'>
              Taste buds, get ready to fall in love with our deliciously cheesy
              delights!"
            </h1>
          </div>
          <div className='w-3/4'>
            <SearchBarWithIcon />
          </div>
        </div>
        <ScrollArea className='h-[35rem] pb-10 '>
          <FoodItems addItemToOrder={addItemToOrder} />
        </ScrollArea>
        {/* <h1 className='text-2xl'>Rooms </h1> */}
      </div>
    </div>
  );
};
function MinusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12h14' />
    </svg>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M5 12h14' />
      <path d='M12 5v14' />
    </svg>
  );
}

export function EmptyState() {
  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <div className='w-[200px] h-[200px] bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center'>
        <svg
          className='w-[100px] h-[100px] text-gray-400 dark:text-gray-500'
          fill='none'
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path d='M12 8v8m0-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
        </svg>
      </div>
      <div className='text-center space-y-2'>
        <h3 className='text-2xl font-bold'>Nothing to see here</h3>
        <p className='text-gray-500 dark:text-gray-400'>
          Looks like you haven't added anything yet.
        </p>
      </div>
    </div>
  );
}
