'use client';
import Image from 'next/image';
// import { Logo } from '../assets/logo';
import { motion } from 'framer-motion';
import { Avatar } from '../ui/avatar';
import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar';
import { Logo } from '../../app/assets/logo';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const Header = () => {
  const router = useRouter();
  return (
    <header className=' py-1 flex justify-between'>
      <div className='h-20  pl-6 flex items-center justify-center'>
        <span className='w-[4rem] h-[4rem] bg-gradient-to-r from-indigo-300 to-sky-500 rounded-full'></span>
      </div>
      <div className='flex items-center justify-end space-x-5 w-1/3 pr-5'>
        <Button
          onClick={() => router.push('/auth/login')}
          variant='secondary'
          className='hidden lg:block rounded-xl w-1/3 h-12 text-base transition hover:origin-top-left hover:rotate-6 bg-gradient-to-r from-indigo-300 to-sky-500'
        >
          Login
        </Button>
        <Button
          variant='secondary'
          className='hidden lg:block rounded-xl w-1/3 h-12 text-base transition hover:origin-top-left hover:rotate-6 bg-gradient-to-r from-indigo-300 to-sky-500'
        >
          Signup
        </Button>
      </div>
    </header>
  );
};
export default Header;
