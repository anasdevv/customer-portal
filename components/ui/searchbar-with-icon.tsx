'use client';
import { parseAsString, useQueryState } from 'nuqs';
import { Button } from './button';
import { Input } from './input';

export const SearchBarWithIcon = () => {
  const [search, setSearch] = useQueryState(
    'search',
    parseAsString.withDefault('')
  );
  return (
    <div className='flex w-full max-w-[30rem] items-center space-x-2'>
      <div className='relative w-full'>
        <SearchIcon className='absolute inset-y-0 inset-x-2.5 text-gray-500 dark:text-gray-400 translate-x-[-50] top-[20%]' />
        <Input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className='pl-10 w-full rounded-full'
          placeholder='Search'
          type='search'
        />
        <Button
          className='absolute inset-y-0 right-0 rounded-l-none hover:scale-105'
          size='sm'
          variant='ghost'
        >
          <XIcon className='w-3 h-3' />
          <span className='sr-only'>Clear</span>
        </Button>
      </div>
    </div>
  );
};

function SearchIcon(props: any) {
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
      <circle cx='11' cy='11' r='8' />
      <path d='m21 21-4.3-4.3' />
    </svg>
  );
}

function XIcon(props: any) {
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
      <path d='M18 6 6 18' />
      <path d='m6 6 12 12' />
    </svg>
  );
}
