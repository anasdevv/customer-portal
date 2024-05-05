'use client';
import { PaginatedResponse, RoomType } from '@/lib/types';
import { Room } from './room';
import useGetRooms from '@/hooks/useGetRooms';
import { Spinner } from '../ui/Spinner';
import { ServerSidePagination } from '../server-side-pagination';
// import useStore from '@/app/store/useStore';

export const RoomsList = () => {
  const { count, error, fetchRoomsLoading, isError, rooms } = useGetRooms();
  console.log('rooms from room list ', rooms);
  if (fetchRoomsLoading)
    return (
      <div>
        <Spinner className='m-auto text-center h-screen' />
      </div>
    );
  return (
    <>
      <div className='grid lg:grid-cols-3 grid:cols-2 sm:grid-cols-1 gap-y-3 gap-x-6'>
        {rooms?.length > 0 ? (
          rooms.map((r, i) => <Room {...r} key={r.id} />)
        ) : (
          <div className='m-auto h-full w-full'>
            <h1>Nothing to show at this moment but stay tuned</h1>
          </div>
        )}
      </div>
      <ServerSidePagination count={count ?? 0} />
    </>
  );
};
