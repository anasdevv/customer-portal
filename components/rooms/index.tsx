import Image from 'next/image';
import Filters from '../Filters';
import { RoomsPreview } from '../RoomsPreview';
import { Card, CardContent, CardHeader } from '../ui/card';
import { ScrollArea } from '../ui/scroll-area';
import { MdOutlineStar } from 'react-icons/md';
import { AiFillDollarCircle } from 'react-icons/ai';
import { Button } from '../ui/button';

export const Rooms = () => {
  return (
    <div className='flex space-x-2 w-full overflow-hidden relative h-full rounded-2xl p-3  font-bold text-white bg-gradient-to-br from-slate-700 to-slate-950 pb-4'>
      <Filters />

      <div className='flex-1 flex-col  space-y-6 w-full h-full p-2 rounded-lg overflow-y-auto sticky'>
        <ScrollArea className='h-[40rem]'>
          <div className='grid grid-cols-3 gap-x-6'>
            {Array.from({
              length: 3,
            }).map((_, i) => (
              <Room key={i} />
            ))}
          </div>
          <div className='grid grid-cols-3 gap-x-6'>
            {Array.from({
              length: 3,
            }).map((_, i) => (
              <Room key={i} />
            ))}
          </div>
        </ScrollArea>
        {/* <h1 className='text-2xl'>Rooms </h1> */}
      </div>
    </div>
  );
};
const Room = () => (
  <div className='p-1 '>
    <Card className='bg-slate-800 border-none pb-2'>
      <CardHeader className='h-[15rem]'>
        <Image
          width={500}
          height={600}
          quality={100}
          // fill
          src={
            'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80'
          }
          alt='img'
          className='object-cover rounded-xl h-full w-full  object-center'
        />
      </CardHeader>
      <CardContent className='flex items-start justify-center p-3'>
        <div className='flex flex-col w-full px-6 space-y-3'>
          <div className='flex items-start justify-between w-full'>
            <h1 className='text-2xl text-gray-300 font-bold'>Room</h1>
            <div className='flex items-center space-x-2'>
              <MdOutlineStar className='text-yellow-400 h-8 w-8' />
              <span className='text-white font-bold text-xl'>4.5</span>
            </div>
          </div>
          <div className='flex justify-between items-start'>
            <div className='flex  items-start space-x-2'>
              <div className='bg-gray-400 rounded-xl p-2 text-xs text-foreground'>
                hello
              </div>

              <div className='bg-gray-400 rounded-xl p-2 text-xs text-foreground'>
                +5 more
              </div>
            </div>
            <div className='flex items-start justify-center space-x-2'>
              <span>
                <AiFillDollarCircle className='w-8 h-8 text-white' />
              </span>
              <span className='text-white text-center pt-1 font-semibold'>
                USD 50/Day
              </span>
            </div>
          </div>
          <p className='text-base text-gray-200 line-clamp-4'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            distinctio culpa sit vel ipsam. Rem nulla impedit deserunt cum,
            voluptates incidunt. Culpa dolore rem mollitia aliquam amet
            quibusdam incidunt eum! Adipisci vitae modi nobis alias inventore
            porro, quidem quasi dolorem aut voluptatum quisquam perferendis
            mollitia ratione veniam consequatur eum at?
          </p>
          <div className='w-full flex items-center justify-center'>
            <Button className=' bg-gradient-to-r from-indigo-600 to-sky-300 w-full px-9 py-7 rounded-2xl text-slate-50 font-semibold text-xl hover:bg-indigo-500'>
              Book now
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);
