'use client';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { reviewSchema } from '../forms/schema/reviewSchema';
import { FormField } from '../ui/form';
import ReviewService from '@/service/review';

import { useUser } from '@/app/providers/UserContext';
import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { useToast } from '../ui/use-toast';
import { FaSpinner } from 'react-icons/fa';
import { Spinner } from '../ui/Spinner';
import { useEffect } from 'react';
export const ReviewForm = ({
  roomId,
  existingReview,
}: {
  roomId: string;
  existingReview: any;
}) => {
  const { toast } = useToast();

  const {
    control,
    register,
    formState: { errors },
    getValues,
    handleSubmit,
  } = useForm<z.infer<typeof reviewSchema>>({
    resolver: zodResolver(reviewSchema),
    defaultValues: {
      rating:
        existingReview && existingReview.length > 0
          ? existingReview[0]?.rating?.toString()
          : '5',
      comment:
        existingReview && existingReview.length > 0
          ? existingReview[0]?.comment
          : '',
    },
  });

  const queryClient = useQueryClient();
  const { mutate: addReview, isPending } = useMutation({
    mutationFn: ReviewService.addReview,
    onSuccess: () => {
      toast({
        title: 'Review added sucessfully',
        description:
          'Thank you for your feedback! Your review has been successfully added.',
      });
      queryClient.invalidateQueries({
        queryKey: ['reviews', roomId],
      });
    },
  });
  const { mutate: updateReview, isPending: updateReviewLoading } = useMutation({
    mutationFn: ReviewService.updateReview,
    onSuccess: () => {
      toast({
        title: 'Review updated sucessfully',
        description:
          'Thank you for your feedback! Your review has been successfully updated.',
      });
      queryClient.invalidateQueries({
        queryKey: ['reviews'],
      });
    },
  });
  console.log('existing review 2', existingReview);
  console.log('errors ', errors, getValues());
  const onSubmit = (val: z.infer<typeof reviewSchema>) => {
    console.log(' addreview', val);
    if (existingReview && existingReview?.length > 0) {
      updateReview({
        rating: Number(val.rating),
        comment: val?.comment as string,
        reviewId: existingReview[0].id,
      });
    } else
      addReview({
        comment: val?.comment ?? '',
        rating: Number(val?.rating),
        roomId,
      });
  };

  return (
    <div className='w-full max-w-3xl grid gap-4 px-4'>
      <div className='grid gap-2'>
        <h3 className='font-semibold'>Leave a review</h3>
      </div>
      <div className='grid gap-4 gap-y-1'>
        {}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='grid gap-2 items-center pb-1'>
            <Label className='min-w-[100px]' htmlFor='rating'>
              Rating
            </Label>
            <FormField
              control={control}
              name='rating'
              render={({ field }) => (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={
                    existingReview && existingReview.length > 0
                      ? existingReview[0]?.rating?.toString()
                      : '5'
                  }
                  aria-label='Rating'
                  // className='max-w-xs'
                  //   defaultValue='5'
                  // id='rating'
                >
                  <SelectTrigger>
                    <SelectValue className='w-24 text-sm rounded-lg cursor-pointer flex items-center justify-center' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='1'>1 (Poor)</SelectItem>
                    <SelectItem value='2'>2 (Fair)</SelectItem>
                    <SelectItem value='3'>3 (Good)</SelectItem>
                    <SelectItem value='4'>{`4">4 (Very Good)`}</SelectItem>
                    <SelectItem value='5'>5 (Excellent)</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div className='grid gap-2  pb-2 items-center'>
            <Label className='min-w-[100px]' htmlFor='review'>
              Review
            </Label>
            <Textarea
              {...register('comment')}
              defaultValue={
                existingReview && existingReview.length > 0
                  ? existingReview[0]?.comment
                  : ''
              }
              className='min-h-[100px] max-h-[200px]'
              id='review'
              placeholder='What did you think of your purchase?'
              required
            />
          </div>
          <Button
            size='default'
            className='p-2  bg-gradient-to-r from-indigo-400 to-sky-300 py-4 hover:from-indigo-500 hover:to-sky-500 text-gray-200'
          >
            {(isPending || updateReviewLoading) && (
              <FaSpinner className='mr-2 h-4 w-4 animate-spin' />
            )}{' '}
            {existingReview && existingReview?.length > 0 ? 'Update' : 'Submit'}{' '}
            review
          </Button>
        </form>
      </div>
    </div>
  );
};
