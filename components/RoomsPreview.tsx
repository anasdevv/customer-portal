import Image from 'next/image';
import type { RoomCard } from './room-card';
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { AiFillDollarCircle } from 'react-icons/ai';

import { Card, CardContent, CardHeader } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { MdOutlineStar } from 'react-icons/md';
import { Button } from './ui/button';
export const roomCards: RoomCard[] = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    title: 'Luxury Suite',
    description:
      'Experience opulence in our spacious luxury suite with stunning views.',
    rating: 4.8,
    capacity: 2,
    price: 350,
    features: ['King-sized bed', 'Private balcony', 'Ocean view', 'Free Wi-Fi'],
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    title: 'Family Villa',
    description:
      'A perfect retreat for families, offering comfort and ample space.',
    rating: 4.5,
    capacity: 4,
    price: 500,
    features: [
      'Two bedrooms',
      'Kitchenette',
      'Pool access',
      'Complimentary breakfast',
    ],
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    title: 'Deluxe Room',
    description:
      'Enjoy a cozy stay in our deluxe room, ideal for solo travelers or couples.',
    rating: 4.2,
    capacity: 1,
    price: 200,
    features: ['Queen-sized bed', 'Mountain view', 'Mini-bar', 'Workstation'],
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    title: 'Pet-Friendly Cottage',
    description:
      'Bring your furry friends to this charming cottage designed for pet lovers.',
    rating: 4.7,
    capacity: 2,
    price: 300,
    features: [
      'Pet amenities',
      'Private garden',
      'Dog walking service',
      'Free Wi-Fi',
    ],
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=1024&w=768&q=80',
    title: 'Executive Suite',
    description:
      'Elevate your stay in our executive suite, featuring premium amenities.',
    rating: 4.9,
    capacity: 2,
    price: 450,
    features: [
      'Separate living area',
      'Spa access',
      'City skyline view',
      'Free parking',
    ],
  },
];

export const RoomsPreview = () => {
  return (
    <div className='max-w-screen-xl mx-auto py-16 lg:py-20'>
      <Carousel
        opts={{
          align: 'start',
        }}
        className='w-full max-w-full'
      >
        <div className='flex flex-col items-center sm:items-stretch sm:flex-row justify-between'>
          <h2 className='text-4xl sm:text-5xl font-black tracking-wide text-center text-white'>
            Cabins
          </h2>
          <div className='flex space-x-14 '>
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>

        <CarouselContent className='w-full pt-2  '>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3 '>
              <div className='p-1'>
                <Card className='bg-slate-800 border-none pb-4'>
                  <CardHeader className='h-[23rem]'>
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
                  <CardContent className='flex pb-5 items-start justify-center p-3'>
                    <div className='flex flex-col w-full px-6 space-y-3'>
                      <div className='flex items-start justify-between w-full'>
                        <h1 className='text-2xl text-gray-300 font-bold'>
                          Room
                        </h1>
                        <div className='flex items-center space-x-2'>
                          <MdOutlineStar className='text-yellow-400 h-8 w-8' />
                          <span className='text-white font-bold text-xl'>
                            4.5
                          </span>
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Deserunt distinctio culpa sit vel ipsam. Rem nulla
                        impedit deserunt cum, voluptates incidunt. Culpa dolore
                        rem mollitia aliquam amet quibusdam incidunt eum!
                        Adipisci vitae modi nobis alias inventore porro, quidem
                        quasi dolorem aut voluptatum quisquam perferendis
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
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
