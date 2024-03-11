import Image from 'next/image';
import { useState } from 'react';
import { CiStar } from 'react-icons/ci';
import { FaDollarSign } from 'react-icons/fa';

export type RoomCard = {
  imageUrl: string;
  title: string;
  description: string;
  rating: number;
  capacity: number;
  price: number;
  features: string[];
};
const ratio = 2 / 1;
export const RoomCard = ({
  imageUrl,
  title,
  rating,
  description,
  price,
}: RoomCard) => {
  const [ratio, setRatio] = useState(16 / 9);
  return (
    <div className='h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none bg-zinc-900 shadow-xl'>
      <div className='w-[330px] h-[150px] bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl'>
        <Image
          onLoadingComplete={({ naturalWidth, naturalHeight }) =>
            setRatio(naturalWidth / naturalHeight)
          }
          src={imageUrl}
          alt='room-image'
          width={400}
          // fill
          height={300 / ratio}
          // className=' h-1/2'
          objectFit='contain'
        />
      </div>
      <div className='py-6 sm:px-10 sm:py-6'>
        <div className='flex flex-col sm:flex-row sm:justify-between sm:items-center'>
          <h5 className='text-2xl font-bold'>{title}</h5>
          <div className='flex items-center sm:ml-4 mt-2 sm:mt-0'>
            <CiStar className='w-6 h-6 text-yellow-500 fill-current' />
            <span className='ml-2 font-bold'>{rating}</span>
          </div>
          <div className='flex flex-col sm:flex-row mt-2 sm:mt-4'>
            {/* features */}
            <div className='flex items-center mr-6 my-2 sm:my-0'>
              <div className='inline-block rounded-full p-2 bg-gray-700 text-gray-100'>
                <FaDollarSign className='w-3 h-3' />
              </div>
              <span className='ml-2 text-sm font-semibold text-gray-800'>
                {price}
              </span>
              {/* price */}
            </div>
          </div>
          <p className='text-sm leading-loose mt-2 sm:mt-4'>{description}</p>
        </div>
      </div>
    </div>
  );
};
