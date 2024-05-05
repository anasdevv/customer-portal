import { useQuery } from '@tanstack/react-query';
import { ScrollArea } from '../ui/scroll-area';
import { ReviewForm } from './add-review-form';
import { Reviews } from './reviews';
import ReviewService from '@/service/review';
import BookingService from '@/service/booking';
import { Spinner } from '../ui/Spinner';
import { useUser } from '@/app/providers/UserContext';

export default function Review({ roomId }: { roomId: string }) {
  const { user } = useUser();

  const { data: reviews, isLoading } = useQuery({
    queryKey: ['reviews', roomId],
    enabled: Boolean(roomId),
    queryFn: () =>
      ReviewService.getAll({
        roomId,
      }),
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });
  const { data: canAddReview, isLoading: existingReviewLoading } = useQuery({
    queryKey: ['canAddReview', roomId],
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    queryFn: () => BookingService.canAddReview(roomId),
    enabled: Boolean(roomId),
  });
  const { data: existingReview } = useQuery({
    queryKey: ['review-by-user-id', user?.id],
    queryFn: () =>
      ReviewService.getReviewByUserId({
        userId: user?.id as string,
      }),
    enabled: Boolean(user?.id),
  });
  return (
    <section className='w-full py-5'>
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
        {canAddReview && !existingReviewLoading && (
          <ReviewForm roomId={roomId} existingReview={existingReview} />
        )}
        <ScrollArea className='h-48 w-full'>
          {isLoading ? <Spinner /> : <Reviews reviews={reviews ?? []} />}
        </ScrollArea>
      </div>
    </section>
  );
}
