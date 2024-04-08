export const Reviews = () => {
  const dummyReviews = [
    {
      name: 'John Doe',
      rating: 3,
      review:
        'The product is amazing! I love the quality and the design. It was exactly what I was looking for. Will definitely buy from this store again.',
    },
    {
      name: 'Jane Smith',
      rating: 2,
      review:
        'The product is amazing! I love the quality and the design. It was exactly what I was looking for. Will definitely buy from this store again.',
    },
  ];
  return (
    <div className='grid gap-4 px-4'>
      {dummyReviews.map((r) => (
        <ReviewItem {...r} />
      ))}
    </div>
  );
};
function ReviewItem({
  name,
  rating,
  review,
}: {
  name: string;
  rating: number;
  review: string;
}) {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(<StarIcon className='w-4 h-4 fill-yellow-400' />);
  }
  for (let i = 5 - rating; i <= 5; i++) {
    stars.push(
      <StarIcon className='w-4 h-4 fill-muted stroke-muted-foreground' />
    );
  }
  return (
    <div className='grid gap-2'>
      <h4 className='font-semibold'>{name}</h4>
      <div className='flex items-center gap-2'>{stars}</div>
      <p className='line-clamp-2 text-sm'>{review}</p>
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
