'use client';
import { useQuery } from '@tanstack/react-query';
import { columns } from '../ui/columns';
import { DataTable } from '../ui/data-table';
import { UserNav } from '../ui/user-nav';
import { useUser } from '@/app/providers/UserContext';
import BookingService from '@/service/booking';
import { Spinner } from '../ui/Spinner';

export const BookingHistory = () => {
  const user = useUser();
  const { data: bookings, isLoading } = useQuery({
    queryKey: ['user-bookings', user.user?.id],
    queryFn: () => BookingService.getBookingsByUserId(user?.user?.id as string),
    refetchOnWindowFocus: true,
    refetchOnMount: true,
    staleTime: 0,
  });
  console.log('bookings ', bookings);
  return (
    <div className=' bg-gradient-to-br from-slate-700 to-slate-950 flex'>
      {/* <div className='h-full bg-slate-850 w-[32rem]'>
        <h1 className='text-white'>Filters</h1>
        <div></div>
      </div> */}
      <div className='hidden h-screen flex-1 flex-col space-y-8 px-8 pt-5 md:flex text-white w-full'>
        <div className='flex items-center justify-between space-y-2'>
          <div>
            <h2 className='text-2xl font-bold tracking-tight'>Welcome back!</h2>
            <p className='text-muted-foreground'>
              Here&apos;s a list of your Bookings for this month!
            </p>
          </div>
          <div className='flex items-center space-x-2'>
            <UserNav />
          </div>
        </div>
        <div className='bg-white w-full mb-10 h-full'>
          {isLoading ? (
            <Spinner className='text-black' />
          ) : (
            <DataTable data={bookings ?? []} columns={columns} />
          )}
        </div>
      </div>
    </div>
  );
};
