import Image from 'next/image';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { SearchBarWithIcon } from '../ui/searchbar-with-icon';
import { FoodItems } from './foodlist';

export const OrderFood = () => {
  return (
    <div className='flex space-x-2 w-full overflow-hidden relative h-full rounded-2xl p-3  font-bold text-white bg-gradient-to-br from-slate-700 to-slate-950 pb-4'>
      {/* <Filters /> */}
      {/* bill */}
      <div className=' bg-slate-800 h-full static w-[20rem] overflow-hidden rounded-lg hidden lg:block'></div>
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
          <FoodItems />
        </ScrollArea>
        {/* <h1 className='text-2xl'>Rooms </h1> */}
      </div>
    </div>
  );
};
