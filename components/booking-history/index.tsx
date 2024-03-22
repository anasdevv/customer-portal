import { columns } from '../ui/columns';
import { DataTable } from '../ui/data-table';
import { UserNav } from '../ui/user-nav';
import { promises as fs } from 'fs';
import path from 'path';
import { taskSchema } from './data/schema';
import { z } from 'zod';

// Simulate a database read for tasks.
async function getBookings() {
  const data = await fs.readFile(
    path.join(process.cwd(), 'components/booking-history/data/bookings.json')
  );

  const Bookings = JSON.parse(data.toString());

  return Bookings;
}

export const BookingHistory = async () => {
  const Bookings = await getBookings();
  return (
    <div className=' bg-gradient-to-br from-slate-700 to-slate-950 flex'>
      <div className='h-full bg-slate-850 w-[32rem]'>
        <h1 className='text-white'>Filters</h1>
        <div></div>
      </div>
      <div className='hidden h-full flex-1 flex-col space-y-8 p-8 md:flex text-white'>
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
        <div className='bg-white'>
          <DataTable data={Bookings} columns={columns} />
        </div>
      </div>
    </div>
  );
};
