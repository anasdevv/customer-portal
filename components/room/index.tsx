import Image from 'next/image';
import Review from '../reviews';
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  Card,
} from '@/components/ui/card';
import { Button } from '../ui/button';
import { AiFillDollarCircle } from 'react-icons/ai';
import { Separator } from '../ui/separator';
import { MdPeople } from 'react-icons/md';
import { BookRoomForm } from '../forms/book-room-form';
// 2 guests · 1 bedroom · 1 bed · 1 bath · Wifi · Kitchen
export default function Room() {
  return (
    <div className='flex space-x-6 w-full overflow-hidden relative h-full rounded-2xl p-3  font-bold text-white bg-gradient-to-br from-slate-700 to-slate-950 pb-4'>
      <div className='bg-slate-800 h-full sticky  w-1/3 overflow-hidden rounded-lg hidden lg:block'>
        <Review />
      </div>
      <div className='flex w-full items-center justify-start space-y-5 flex-col overflow-y-auto scroll-pb-10 pr-5'>
        <div className='flex w-full '>
          <div className='w-1/2 flex flex-col py-4 pr-2 space-y-3'>
            <p className='text-3xl'>
              Cozy and Charming Mountain Retreat with Hot Tub
            </p>
            <div className='flex justify-start items-start'>
              <div className='flex flex-wrap  items-start space-x-2 space-y-1'>
                {Array.from({
                  length: 6,
                }).map((_, index) => (
                  <>
                    <div className='bg-gray-400 rounded-xl p-2 text-xs text-foreground'>
                      hello
                    </div>
                    {(index + 1) % 5 === 0 && <div className='w-full'></div>}
                  </>
                ))}

                <div className='bg-gray-400 rounded-xl p-2 text-xs text-foreground'>
                  +5 more
                </div>
              </div>
            </div>
            <span className='text-sm text-muted-foreground'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic neque
              vitae sit vel inventore suscipit. Suscipit distinctio quas nulla
              praesentium aliquam possimus aut consequuntur! Explicabo adipisci
              ad velit quas at! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Obcaecati quas porro doloribus quia culpa
              similique fuga dolore. Aperiam, necessitatibus excepturi maxime, a
              ratione voluptatem fuga cupiditate illo tenetur illum modi!
            </span>
          </div>
          <div className=' h-1/3 w-full rounded'>
            <Image
              // fill
              width={800}
              height={1000}
              // layout='fill'
              loading='eager'
              alt='Product Image'
              objectFit='cover'
              src='https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=500&w=800&q=80'
              // className='z-10 h-full w-full object-cover object-center'
            />
          </div>
        </div>
        <BookRoomForm />
        {/* <Button
          className=' bg-gradient-to-r from-indigo-400 to-sky-300 py-4 hover:from-indigo-500 hover:to-sky-400 w-full'
          type='submit'
        >
          Book now
        </Button> */}
        <Card className='w-full'>
          <CardContent className='p-4 flex items-center justify-between'>
            <div>
              <span className='font-bold text-xl'>$400</span>
              <span className='text-muted-foreground'>/night</span>
            </div>
            <div className='flex items-center justify-start space-x-3'>
              <MdPeople className='text-2xl' />
              <p>fits upto 9 people</p>
            </div>
          </CardContent>
        </Card>
        <Card className='w-full px-3'>
          <CardContent className='p-4 flex items-center gap-4 relative'>
            <AwardIcon className='w-10 h-10' />
            <div className='font-semibold max-w-[16rem] hidden sm:flex md:hidden lg:flex'>
              One of the most loved room, according to guests.
            </div>
            <div className='flex items-center gap-6 ml-auto'>
              <div className='flex flex-col gap-1 text-center'>
                <div className='text-2xl font-semibold tracking-tighter'>
                  4.93
                </div>
                <div className='flex items-center gap-1'>
                  <StarIcon className='w-2.5 h-2.5 fill-primary' />
                  <StarIcon className='w-2.5 h-2.5 fill-primary' />
                  <StarIcon className='w-2.5 h-2.5 fill-primary' />
                  <StarIcon className='w-2.5 h-2.5 fill-primary' />
                  <StarIcon className='w-2.5 h-2.5' />
                </div>
              </div>
              <Separator className='h-9' orientation='vertical' />
              <div className='flex flex-col gap-0.5 text-center'>
                <div className='text-2xl font-semibold tracking-tighter'>
                  745
                </div>
                <div className='text-xs underline font-semibold'>Reviews</div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className='w-full px-3'>
          <CardContent className='grid gap-4'>
            <h3 className='text-xl font-semibold'>What this place offers</h3>
            <ul className='grid lg:grid-cols-2 gap-6'>
              <li className='flex gap-4'>
                <MountainSnowIcon className='w-6 h-6' />
                Mountain view
              </li>
              <li className='flex gap-4'>
                <WavesIcon className='w-6 h-6' />
                Beach access
              </li>
              <li className='flex gap-4'>
                <ChefHatIcon className='w-6 h-6' />
                Private chef
              </li>
              <li className='flex gap-4'>
                <WifiIcon className='w-6 h-6' />
                Wifi
              </li>
              <li className='flex gap-4'>
                <CarIcon className='w-6 h-6' />
                Parking
              </li>
              <li className='flex gap-4'>
                <CameraIcon className='w-6 h-6' />
                Security cameras
              </li>
              <li className='flex gap-4'>
                <AccessibilityIcon className='w-6 h-6' />
                Wheelchair accessible
              </li>
              <li className='flex gap-4'>
                <WindIcon className='w-6 h-6' />
                Patio
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
function AccessibilityIcon(props: any) {
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
      <circle cx='16' cy='4' r='1' />
      <path d='m18 19 1-7-6 1' />
      <path d='m5 8 3-3 5.5 3-2.36 3.5' />
      <path d='M4.24 14.5a5 5 0 0 0 6.88 6' />
      <path d='M13.76 17.5a5 5 0 0 0-6.88-6' />
    </svg>
  );
}

function AwardIcon(props: any) {
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
      <circle cx='12' cy='8' r='6' />
      <path d='M15.477 12.89 17 22l-5-3-5 3 1.523-9.11' />
    </svg>
  );
}

function CameraIcon(props: any) {
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
      <path d='M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z' />
      <circle cx='12' cy='13' r='3' />
    </svg>
  );
}

function CarIcon(props: any) {
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
      <path d='M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2' />
      <circle cx='7' cy='17' r='2' />
      <path d='M9 17h6' />
      <circle cx='17' cy='17' r='2' />
    </svg>
  );
}

function ChefHatIcon(props: any) {
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
      <path d='M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6Z' />
      <line x1='6' x2='18' y1='17' y2='17' />
    </svg>
  );
}

function ChevronRightIcon(props: any) {
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
      <path d='m9 18 6-6-6-6' />
    </svg>
  );
}

function HomeIcon(props: any) {
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
      <path d='m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' />
      <polyline points='9 22 9 12 15 12 15 22' />
    </svg>
  );
}

function MountainSnowIcon(props: any) {
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
      <path d='m8 3 4 8 5-5 5 15H2L8 3z' />
      <path d='M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19' />
    </svg>
  );
}

function StarIcon(props: any) {
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
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}

function WavesIcon(props: any) {
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
      <path d='M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' />
      <path d='M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' />
      <path d='M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1' />
    </svg>
  );
}

function WifiIcon(props: any) {
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
      <path d='M5 13a10 10 0 0 1 14 0' />
      <path d='M8.5 16.5a5 5 0 0 1 7 0' />
      <path d='M2 8.82a15 15 0 0 1 20 0' />
      <line x1='12' x2='12.01' y1='20' y2='20' />
    </svg>
  );
}

function WindIcon(props: any) {
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
      <path d='M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2' />
      <path d='M9.6 4.6A2 2 0 1 1 11 8H2' />
      <path d='M12.6 19.4A2 2 0 1 0 14 16H2' />
    </svg>
  );
}
