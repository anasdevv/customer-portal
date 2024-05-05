import { ReviewType } from '@/lib/types';
import { EmptyState } from '../order-food';
import { formatDistance, parseISO } from 'date-fns';
export const formatDistanceFromNow = (dateStr: string) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  })
    .replace('about ', '')
    .replace('in', 'In');
export const Reviews = ({
  reviews,
}: {
  reviews: ReviewType &
    {
      user: {
        name: string;
      };
    }[];
}) => {
  console.log('reviews ', reviews);
  return (
    <div className='w-full flex flex-col items-start justify-start px-4'>
      {reviews && reviews.length > 0 ? (
        reviews?.map((r) => <ReviewItem {...r} />)
      ) : (
        <div>
          <EmptyState message='No review added yet' />
        </div>
      )}
    </div>
  );
};
function ReviewItem({
  user,
  rating = 0,
  comment,
}: Partial<ReviewType> & {
  user: {
    name: string;
  };
}) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon className='w-4 h-4 fill-yellow-400' />);
  }
  for (let i = 5 - rating; i > 0; i--) {
    stars.push(
      <StarIcon className='w-4 h-4 fill-muted stroke-muted-foreground' />
    );
  }
  return (
    <div className='grid gap-2'>
      <h4 className='font-semibold'>{user.name}</h4>
      <div className='flex items-center gap-2'>{stars}</div>
      <p className='line-clamp-2 text-sm'>{comment}</p>
    </div>
  );
}
function StarIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
    </svg>
  );
}
