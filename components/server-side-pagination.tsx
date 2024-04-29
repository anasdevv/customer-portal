'use client';
import {
  Pagination,
  PaginationButton,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useCallback } from 'react';
export const ROOMS_PER_PAGE = 9;
export const ServerSidePagination = ({ count }: { count: number }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);
      console.log('after searchparam set');
      return params.toString();
    },
    [searchParams]
  );
  const currPage = Number(searchParams.get('page')) || 1;
  const totalPages = Math.ceil(count / ROOMS_PER_PAGE);
  const handleNext = () => {
    const next = currPage === totalPages ? currPage : currPage + 1;
    router.push(pathname + '?' + createQueryString('page', String(next)));
  };
  const handlePrev = () => {
    const prev = currPage === 1 ? currPage : currPage - 1;
    router.push(pathname + '?' + createQueryString('page', String(prev)));
  };
  console.log('.env ', process.env.NEXT_PUBLIC_BACKEND_BASE_URL);
  return (
    <div className='py-6'>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={handlePrev}
              disabled={currPage === 1}
            />
          </PaginationItem>
          <p className='px-4 text-base ml-2'>
            showing
            <span className='font-bold'>
              {' '}
              {ROOMS_PER_PAGE * (currPage - 1)}
            </span>{' '}
            to
            <span className='font-bold'>
              {' '}
              {currPage === totalPages ? count : ROOMS_PER_PAGE * currPage}
            </span>{' '}
            results of {count} results
          </p>
          <PaginationItem>
            <PaginationNext
              onClick={handleNext}
              disabled={currPage === totalPages}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
