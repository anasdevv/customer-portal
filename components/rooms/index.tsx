import Filters from '../Filters';
import { Room } from './room';
import { ServerSidePagination } from '../server-side-pagination';
import { ScrollArea } from '../ui/scroll-area';
import { RoomsList } from './rooms-list';
import { PageProps } from '@/app/rooms/page';
import RoomService, { PaginatedResponse } from '@/service/room';
import { preProcessRoomQueryParam } from '@/hooks/useGetRooms';
import { ReadonlyURLSearchParams } from 'next/navigation';
import { RoomOperations } from './room-operations';
const ROOMS_PER_PAGE = 9;
export const Rooms = async ({ searchParams }: PageProps) => {
  console.log('spp ', ROOMS_PER_PAGE, searchParams);
  const [orderBy, sort] = searchParams.sortBt?.split('-') ?? ['', ''];
  const data = (await RoomService.getAll({
    pageNumber: searchParams?.page ?? 1,
    sort: sort || 'desc',
    pageSize: ROOMS_PER_PAGE,
    orderBy: orderBy || 'createdAt',
  })) as PaginatedResponse;
  return (
    <div className='flex space-x-2 w-full overflow-hidden relative h-full rounded-2xl p-3  font-bold text-white bg-gradient-to-br from-slate-700 to-slate-950 pb-4'>
      <RoomOperations />

      <div className='flex-1 flex-col  space-y-6 w-full h-full p-2 rounded-lg overflow-y-auto sticky'>
        <ScrollArea className='h-[40rem]'>
          <RoomsList count={data?.count ?? 0} rooms={data?.rooms ?? []} />
          <ServerSidePagination count={data?.count ?? 0} />
        </ScrollArea>

        {/* <h1 className='text-2xl'>Rooms </h1> */}
      </div>
    </div>
  );
};
