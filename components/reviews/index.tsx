import { ScrollArea } from '../ui/scroll-area';
import { ReviewForm } from './add-review-form';
import { Reviews } from './reviews';

export default function Review() {
  return (
    <section className='w-full py-12'>
      <div className='flex items-center flex-col gap-4'>
        <div className='text-center'>
          <div className='inline-block rounded-lg  px-3 py-1 dark:bg-gray-800'>
            <h2 className='font-bold text-3xl inline-block translate-y-1'>
              Customer Reviews
            </h2>
          </div>
          <p className='text-sm text-gray-500 dark:text-gray-400'>
            Reviews are submitted by customers after making a purchase.
          </p>
        </div>
        <ReviewForm />
        <ScrollArea className='h-screen'>
          <Reviews />
        </ScrollArea>
      </div>
    </section>
  );
}
