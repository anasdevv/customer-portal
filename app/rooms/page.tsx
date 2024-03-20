import { BookingHistory } from '@/components/booking-history';
import { OrderFood } from '@/components/order-food';
import { Rooms } from '@/components/rooms';
import { Tabs } from '@/components/ui/tabs';
import Image from 'next/image';

const DummyContent = () => {
  return (
    <Image
      src='/linear.webp'
      alt='dummy image'
      width='1000'
      height='1000'
      className='object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto'
    />
  );
};

export default function Page() {
  const tabs = [
    {
      title: 'Rooms',
      value: 'rooms',
      content: <Rooms />,
    },
    {
      title: 'Order Food',
      value: 'order-food',
      content: <OrderFood />,
    },
    {
      title: 'Booking History',
      value: 'booking-history',
      content: <BookingHistory />,
    },
    {
      title: 'Content',
      value: 'content',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900'>
          <p>Content tab</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: 'Random',
      value: 'random',
      content: (
        <div className='w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900'>
          <p>Random tab</p>
          <DummyContent />
        </div>
      ),
    },
  ];

  return (
    <div className='px-8 mb-6'>
      <div className='h-screen [perspective:1000px] relative b flex flex-col  mx-auto w-full  items-start justify-start my-4  mb-10 pb-10'>
        <Tabs tabs={tabs} />
      </div>
    </div>
  );
}
