import Image from 'next/image';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { SearchBarWithIcon } from '../ui/searchbar-with-icon';

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
          <div className='grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 items-start max-w-6xl px-4 mx-auto'>
            {Array.from({
              length: 20,
            }).map((_, i) => (
              <div className='flex flex-col gap-2' key={i}>
                <Image
                  alt='Chocolate Croissant'
                  className='aspect-square object-cover rounded-lg border border-gray-200 dark:border-gray-800'
                  height={400}
                  src='https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&w=1560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                  width={400}
                />
                <div className='flex flex-col gap-1.5'>
                  <h2 className='font-semibold text-lg'>Chocolate Croissant</h2>
                  <p className='text-sm text-muted'>
                    Buttery croissant with rich chocolate filling
                  </p>
                  <div className='font-semibold'>$4.99</div>
                  <Button
                    size='sm'
                    className=' bg transform transition hover:scale-95 bg-gradient-to-r from-indigo-300 to-sky-500'
                  >
                    Add to cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        {/* <h1 className='text-2xl'>Rooms </h1> */}
      </div>
    </div>
  );
};
