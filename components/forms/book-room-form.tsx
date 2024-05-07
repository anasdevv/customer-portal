'use client';
import { Button } from '@/components/ui/button';
import { differenceInDays, format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';
import RoomService from '@/service/room';

import { Calendar } from '@/components/ui/calendar';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import BookingService from '@/service/booking';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DatePickerWithRange } from '../booking/date-range-picker';
import { BookingformSchema } from './schema/bookingformSchema';
import { Switch } from '../ui/switch';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { FaSpinner } from 'react-icons/fa';
import { useToast } from '../ui/use-toast';
import { useMemo, useState } from 'react';
import { Separator } from '../ui/separator';
import { Label } from '../ui/label';
import { Textarea } from '../ui/textarea';
type Room = {
  id: string;
  maxCapacity?: number;
  regularPrice?: number;
  discount?: number;
  edit?: boolean;
  breakfastIncluded?: boolean;
  numGuests?: number;
  startDate?: Date;
  endDate?: Date;
  setEdit?: (val: boolean) => void;
  description?: string;
};
interface BookRoomProps {
  room: Room;
  edit?: boolean;
}
export function BookRoomForm({
  id,
  maxCapacity,
  regularPrice,
  discount,
  breakfastIncluded,
  numGuests,
  edit = false,
  startDate,
  description,
  endDate,
  setEdit,
}: Room) {
  const [open, setOpen] = useState<boolean>(() => (edit ? true : false));
  const query = useQueryClient();
  const { toast } = useToast();
  const form = useForm<z.infer<typeof BookingformSchema>>({
    defaultValues: {
      room: id,
      ...(edit
        ? {
            breakfastIncluded,
            numGuests: numGuests?.toString() ?? '1',
            descritption: description,
            date: {
              from: startDate ? new Date(startDate) : new Date(),
              to: endDate ? new Date(endDate) : new Date(),
            },
          }
        : {}),
    },
    resolver: zodResolver(BookingformSchema),
  });
  const { data: unavailableDates } = useQuery({
    queryKey: ['unavailable-dates', id],
    queryFn: () => BookingService.getUnavailableDates(id),
    enabled: Boolean(id),
  });
  const disableDates = unavailableDates?.map(
    (d: { startDate: Date; endDate: Date }) => ({
      from: new Date(d?.startDate),
      to: new Date(d.endDate),
    })
  );
  console.log('unavailable ', unavailableDates);
  const {
    mutate: addBooking,
    isPending,
    error,
  } = useMutation({
    mutationFn: BookingService.addBooking,
    onSuccess: () => {
      query.invalidateQueries({
        queryKey: ['unavailable-dates', 'user-bookings'],
      });
      toast({
        title: 'Booking added successfully 💯 👍 📅',
        description: `We're thrilled to confirm your reservation. Get ready for an amazing experience ahead! 🎉"`,
      });
      form.reset();
      setOpen(false);
    },

    onError: (error: any) => {
      console.log('error ', error);
      if (error.statusCode === 422) {
        form.setError('date', {
          message:
            'Booking in this duration already exists try another room or try other dates',
        });
      }
    },
    // mutationKey : ['']
  });
  console.log('eee ', error);
  console.log('form ', form.getValues());
  const { data: roomsList, isLoading } = useQuery({
    queryKey: ['room-preview'],
    queryFn: () => RoomService.getPreviews(),
  });
  const totalPrice = useMemo(() => {
    const price =
      ((regularPrice ?? 0) - (discount ?? 0)) *
        differenceInDays(
          form?.getValues('date')?.to ?? new Date(),
          form?.getValues('date')?.from ?? new Date()
        ) +
      (form?.getValues().breakfastIncluded ? 20 : 0);
    return price;
  }, [
    form.getValues('breakfastIncluded'),
    form.getValues('date.from'),
    form.getValues('date.to'),
  ]);
  const onSubmit = (data: z.infer<typeof BookingformSchema>) => {
    console.log('data ', data);
    addBooking({
      startDate: new Date(data.date.from),
      roomId: data.room,
      endDate: new Date(data.date.to),
      hasBreakfast: data?.breakfastIncluded ?? false,
      numNights: differenceInDays(data.date.to, data.date.from),
      numGuests: Number(data?.numGuests),
      totalPrice,
      observations: data.descritption,
    });
  };

  console.log('data2 ', form.formState.errors);
  return (
    <Sheet
      open={open}
      onOpenChange={(open) => {
        console.log('open changing ', open);
        setOpen(open);
        if (setEdit) {
          setEdit(open);
        }
        form.reset();
      }}
    >
      <SheetTrigger asChild>
        <Button
          className=' bg-gradient-to-r from-indigo-600 to-sky-300 w-full px-9 py-7 rounded-2xl text-slate-50 font-semibold text-xl hover:bg-indigo-500'
          onClick={() => setOpen(true)}
        >
          Book now
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-white border-none'>
        <SheetHeader className=''>
          <SheetTitle className=' mx-auto'>
            {edit ? 'Update Booking ' : 'Book Room'} Now !
          </SheetTitle>
        </SheetHeader>
        <div className='grid gap-2 py-4 '>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='w-full space-y-6'
            >
              <FormField
                control={form.control}
                name='room'
                render={({ field }) => (
                  <FormItem className='flex flex-col items-start justify-start'>
                    <FormLabel className='text-lg' htmlFor='room'>
                      Room
                    </FormLabel>
                    <Select
                      disabled
                      onValueChange={field.onChange}
                      defaultValue={id ?? field?.value}
                    >
                      <FormControl>
                        <SelectTrigger className='border-muted-foreground outline-1'>
                          <SelectValue placeholder='Select a room ...' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {roomsList?.map((r: { title: string; id: string }) => (
                          <SelectItem value={r?.id}>{r?.title}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='date'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-lg text-foreground'>
                      Date
                    </FormLabel>
                    <FormControl>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant={'outline'}
                            className={cn(
                              'w-full justify-start text-left font-normal text-base py-5',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            <CalendarIcon className='mr-2 h-4 w-4' />
                            {field.value?.from ? (
                              field.value.to ? (
                                <>
                                  {format(field.value.from, 'LLL dd, y')} -{' '}
                                  {format(field.value.to, 'LLL dd, y')}
                                </>
                              ) : (
                                format(field.value.from, 'LLL dd, y')
                              )
                            ) : (
                              <span>Pick a date</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className='w-auto p-0' align='start'>
                          <Calendar
                            initialFocus
                            mode='range'
                            defaultMonth={new Date()}
                            selected={field.value}
                            onSelect={field.onChange}
                            numberOfMonths={2}
                            disabled={[
                              ...(disableDates ?? []),
                              {
                                before: new Date(),
                              },
                            ]}
                          />
                        </PopoverContent>
                      </Popover>
                    </FormControl>
                    <FormDescription>
                      Select the date for when the event will take place
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex space-x-3'>
                <div className='w-1/2'>
                  <FormField
                    control={form.control}
                    name='numGuests'
                    render={({ field }) => (
                      <FormItem className='flex flex-col items-start justify-start'>
                        <FormLabel className='text-base' htmlFor='numGuests'>
                          Number of Guests
                        </FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field?.value}
                        >
                          <FormControl>
                            <SelectTrigger className='border-muted-foreground outline-1'>
                              <SelectValue placeholder='Select number of guests' />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {Array.from({
                              length: maxCapacity ?? 6,
                            }).map((_, i) => (
                              <SelectItem value={String(i)}>{` ${
                                i + 1
                              }`}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className='w-1/2'>
                  <FormField
                    control={form.control}
                    name='breakfastIncluded'
                    render={({ field }) => (
                      <FormItem className='flex flex-col items-start justify-start rounded-lg'>
                        <FormLabel className='text-base' htmlFor='room'>
                          Breakfast Included ?
                        </FormLabel>
                        <FormControl className=''>
                          <Switch
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <FormDescription className='text-xs'>
                          {/* cost depends upon number of guests */}
                          It will cost additional $20 dollars.
                        </FormDescription>
                        {/* <div className='space-y-0.5'>
                        
                        </div> */}
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div>
                <Label htmlFor='description' className='text-lg'>
                  Observation
                </Label>
                <Textarea
                  className='h-28 border-gray-600'
                  placeholder='ex. space for my dog'
                />
              </div>
              {/* <div className='p-4 bg-gray-300 flex items-center justify-center min-h-32 rounded-lg'> */}
              <div className='flex flex-col items-center justify-center gap-4 p-4 bg-gray-100 rounded-lg dark:bg-gray-800'>
                <h2 className='text-lg font-medium text-gray-700 dark:text-gray-300'>
                  Order Total
                </h2>
                <div className='text-4xl font-bold text-gray-900 dark:text-gray-50'>
                  ${totalPrice}
                </div>
              </div>
              {/* </div> */}
              <Separator />
              <SheetFooter>
                {/* <SheetClose asChild> */}
                <Button type='submit' className='w-1/3 mb-4 py-6'>
                  {isPending && (
                    <FaSpinner className='mr-2 h-4 w-4 animate-spin' />
                  )}
                  {/* todo replace isPending with isUpdatePending  */}
                  <span>
                    {edit
                      ? isPending
                        ? 'Updating'
                        : 'Update'
                      : isPending
                      ? 'Booking ...'
                      : 'Book'}
                  </span>
                </Button>
                {/* </SheetClose> */}
              </SheetFooter>
            </form>
          </Form>
          {/* <div>
            <Select>
              <SelectTrigger className='w-full'>
                <SelectValue placeholder='Select a fruit' />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Fruits</SelectLabel>
                  <SelectItem value='apple'>Apple</SelectItem>
                  <SelectItem value='banana'>Banana</SelectItem>
                  <SelectItem value='blueberry'>Blueberry</SelectItem>
                  <SelectItem value='grapes'>Grapes</SelectItem>
                  <SelectItem value='pineapple'>Pineapple</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div> */}
          {/* <div className='grid grid-cols-4 items-center gap-4 text-white'>
            <Label htmlFor='name' className='text-right'>
              Name
            </Label>
            <Input id='name' value='Pedro Duarte' className='col-span-3' />
          </div>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='username' className='text-right '>
              Username
            </Label>
            <Input id='username' value='@peduarte' className='col-span-3' />
          </div> */}
        </div>
      </SheetContent>
    </Sheet>
  );
}
