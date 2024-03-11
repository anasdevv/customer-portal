import { Facebook } from '@/app/assets/facebook';
import { Twitter } from '@/app/assets/twitter';
import { Youtube } from '@/app/assets/youtube';
import Link from 'next/link';
const Links = [
  {
    url: 'https://facebook.com',
    icon: <Facebook />,
  },
  {
    url: 'https://twitter.com',
    icon: <Twitter />,
  },
  {
    url: 'https://youtube.com',
    icon: <Youtube />,
  },
];
export const Footer = () => {
  return (
    <div className='bg-gray-900 text-gray-100 -mx-8 -mb-8'>
      <div className='max-w-screen-xl mx-auto py-20 lg:py-24'>
        <div className='flex items-center justify-center flex-col px-8'>
          {/* logo */}
          <div className='flex items-center justify-center md:justify-start'>
            <span className='w-8 text-white'></span>
            <span className='ml-2 text-2xl text-white font-bold tracking-wider'>
              ParadiseView
            </span>
          </div>
          <div className='mt-10 flex'>
            {Links.map(({ icon, url }) => (
              <Link
                className='cursor-pointer flex text-gray-100 hover:text-gray-500 transition duration-300 mx-4 w-8 h-8 items-center justify-center bg-zinc-900 p-5 rounded-full'
                href={url}
              >
                <span className='text-white'>{icon}</span>
              </Link>
            ))}
          </div>

          <p className='text-center mt-10 font-medium tracking-wide text-sm text-gray-600'>
            &copy; Copyright 2024, ParadiseView Inc. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};
