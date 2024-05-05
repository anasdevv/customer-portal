import { PageProps } from '@/app/tabs/[...path]/page';
import { ScrollArea } from '../ui/scroll-area';
import { RoomOperations } from './room-operations';
import { RoomsList } from './rooms-list';
import { usePathname } from 'next/navigation';
const ROOMS_PER_PAGE = 9;
export const Rooms = async () => {
  const pathname = usePathname();
  const [_, __, path] = pathname.split('/');
  return (
    <div className='flex space-x-2 w-full overflow-hidden relative h-full rounded-2xl p-3  font-bold text-white bg-gradient-to-br from-slate-700 to-slate-950 pb-4'>
      {path === 'rooms' ? <RoomOperations /> : null}

      <div className='flex-1 flex-col  space-y-6 w-full h-full p-2 rounded-lg overflow-y-auto sticky'>
        <ScrollArea className='h-[40rem]'>
          {path === 'rooms' ? <RoomsList /> : null}
        </ScrollArea>

        {/* <h1 className='text-2xl'>Rooms </h1> */}
      </div>
    </div>
  );
};
