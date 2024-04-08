'use client';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from '@/components/ui/select';
import { useForm, Controller } from 'react-hook-form';

import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { z } from 'zod';
import { reviewSchema } from '../forms/schema/reviewSchema';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '../ui/form';
import { BookRoomForm } from '../forms/book-room-form';
export const ReviewForm = () => {
  const { control, register, formState, handleSubmit } = useForm<
    z.infer<typeof reviewSchema>
  >({
    resolver: zodResolver(reviewSchema),
  });
  const onSubmit = (val: z.infer<typeof reviewSchema>) => {
    console.log(val);
  };
  return (
    <div className='w-full max-w-3xl grid gap-4 px-4'>
      <div className='grid gap-2'>
        <h3 className='font-semibold'>Leave a review</h3>
      </div>
      <div className='grid gap-4 gap-y-1'>
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
                  defaultValue={field?.value ?? '5'}
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
              {...register('review')}
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
            Submit review
          </Button>
        </form>
      </div>
    </div>
  );
};
