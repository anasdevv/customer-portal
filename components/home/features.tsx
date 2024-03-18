import { Decorator } from '@/app/assets/decorator';
import { CgGym } from 'react-icons/cg';
import {
  FaBaby,
  FaGamepad,
  FaLightbulb,
  FaSwimmingPool,
  FaWifi,
} from 'react-icons/fa';
import { LuParkingSquare } from 'react-icons/lu';
import { MdFastfood, MdLocalLaundryService, MdPets } from 'react-icons/md';
const facilities = [
  {
    title: 'Wifi',
    icon: <FaWifi className='mx-auto' size={50} />,
    description: 'Stay connected with high-speed Wifi throughout the resort.',
  },
  {
    title: 'Food',
    icon: <MdFastfood className='mx-auto' size={50} />,
    description:
      'Savor a variety of culinary delights at our exquisite dining venues.',
  },
  {
    title: 'Gym',
    icon: <CgGym className='mx-auto' size={50} />,
    description:
      'Stay fit and energized with our state-of-the-art gym facilities.',
  },
  {
    title: 'Game Center',
    icon: <FaGamepad className='mx-auto' size={50} />,
    description: 'Indulge in playful moments at our vibrant game center.',
  },
  {
    title: '24/7 Electricity',
    icon: <FaLightbulb className='mx-auto' size={50} />,
    description: 'Experience uninterrupted power supply for your comfort.',
  },
  {
    title: 'Parking',
    icon: <LuParkingSquare className='mx-auto' size={50} />,
    description: 'Park with ease in our dedicated and secure parking area.',
  },
  {
    title: 'Babysitting',
    icon: <FaBaby className='mx-auto' size={50} />,
    description:
      'Enjoy a worry-free stay with our professional babysitting services.',
  },
  {
    title: 'Pet-Friendly',
    icon: <MdPets className='mx-auto' size={50} />,
    description: `Bring your furry friends along - we're a pet-friendly resort!`,
  },
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}
export const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className='g:w-1/3 max-w-xs'>
      <div className='flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 '>
        <div className='text-center rounded-full p-4 bg-gray-100'>
          {/* svg */}
          <span className='w-8 h-8'>{icon}</span>
        </div>
        <span className='mt-4 font-bold text-xl leading-none text-slate-50'>
          {/* {title} */}
          {title}
        </span>
        <p className='mt-4 text-sm font-medium text-secondary-300 text-slate-200'>
          {description}
        </p>
      </div>
    </div>
  );
};
export const Features = () => {
  return (
    <div className='relative overflow-hidden'>
      <div className='max-w-screen-xl mx-auto py-20 lg:py-24'>
        <div className='mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto'>
          {facilities.map((f) => (
            <FeatureCard {...f} key={f.title} />
          ))}
        </div>
      </div>
      <div className='pointer-events-none absolute top-20  -right-[7rem] z-10   bottom-0 w-520 opacity-25 transform translate-x-32 translate-y-40 '>
        <Decorator />
      </div>
    </div>
  );
};
