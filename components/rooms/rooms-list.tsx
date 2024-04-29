'use client';
import { RoomType } from '@/lib/types';
import { Room } from './room';
import useGetRooms from '@/hooks/useGetRooms';
import { PaginatedResponse } from '@/service/room';
import { Spinner } from '../ui/Spinner';

export const RoomsList = ({ ...initalData }: PaginatedResponse) => {
  const { count, error, fetchRoomsLoading, isError, rooms } =
    useGetRooms(initalData);
  console.log('rooms from room list ', rooms);
  if (fetchRoomsLoading)
    return (
      <div>
        <Spinner className='m-auto text-center h-screen' />
      </div>
    );
  return (
    <div className='grid lg:grid-cols-3 grid:cols-2 sm:grid-cols-1 gap-y-3 gap-x-6'>
      {rooms.map((r, i) => (
        <Room {...r} key={r.id} />
      ))}
    </div>
  );
};
