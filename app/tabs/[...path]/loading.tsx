import { Spinner } from '@/components/ui/Spinner';

export default function Loading() {
  return (
    <div className='text-white w-full h-screen  flex items-center justify-center'>
      <Spinner />
      loading
    </div>
  );
}
