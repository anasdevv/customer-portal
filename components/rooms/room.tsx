import Image from 'next/image';
import { AiFillDollarCircle } from 'react-icons/ai';
import { MdOutlineStar } from 'react-icons/md';
import { BookRoomForm } from '../forms/book-room-form';
import { Card, CardContent, CardHeader } from '../ui/card';
import { RoomType } from '@/lib/types';
export const Room = ({
  roomImage,
  createdAt,
  description,
  discount,
  features,
  id,
  maxCapacity,
  regularPrice,
  rating,
  title,
}: RoomType) => (
  <div className='p-1 '>
    <Card className='bg-slate-800 border-none '>
      <CardHeader className='h-[15rem]'>
        <Image
          width={500}
          height={600}
          quality={100}
          // fill
          src={
            roomImage.length > 10
              ? roomImage
              : 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80'
          }
          alt='img'
          className='object-cover rounded-xl h-full w-full  object-center'
        />
      </CardHeader>
      <CardContent className='flex  items-start justify-center p-3'>
        <div className='flex flex-col w-full px-2 space-y-3'>
          <div className='flex items-start justify-between w-full'>
            <h1 className='text-2xl text-gray-300 font-bold line-clamp-1'>
              {title}
            </h1>
            <div className='flex items-center space-x-2'>
              <MdOutlineStar className='text-yellow-400 h-8 w-8' />
              <span className='text-white font-bold text-xl'>
                {rating || 4}
              </span>
            </div>
          </div>
          <div className='flex justify-between items-start'>
            <div className='flex  items-start space-x-2'>
              <div className='bg-gray-400 rounded-xl p-2 text-xs text-foreground'>
                {features.length > 0 ? features[0].featureName : null}
              </div>
              {features.length > 1 && (
                <div className='bg-gray-400 rounded-xl p-2 text-xs text-foreground'>
                  +{features.length - 1} more
                </div>
              )}
            </div>
            <div className='flex items-start justify-center space-x-2'>
              <span>
                <AiFillDollarCircle className='w-8 h-8 text-white' />
              </span>
              <span className='text-white text-center pt-1 font-semibold'>
                USD {regularPrice}/Day
              </span>
            </div>
          </div>
          <div className='overflow-hidden text-ellipsis h-32'>
            <p className='text-base text-gray-200 line-clamp-4'>
              {description}
            </p>
          </div>
          <div className='w-full flex items-center justify-center '>
            <BookRoomForm />
          </div>
        </div>
      </CardContent>
    </Card>
  </div>
);
