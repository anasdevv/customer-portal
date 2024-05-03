import { UserLogin } from '@/components/auth/forms/login';
import Link from 'next/link';

export default function page() {
  return (
    <div className='lg:p-8'>
      <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
        <div className='flex flex-col space-y-2 text-center'>
          <h1 className='text-2xl font-semibold tracking-tight text-violet-400'>
            Login to your account
          </h1>
        </div>
        <UserLogin />
        <p className='text-gray-400 text-center'>
          Dont't have an account ?
          <Link className='pl-4 font-bold underline' href={'/auth/signup'}>
            Signup
          </Link>
        </p>
      </div>
    </div>
  );
}
