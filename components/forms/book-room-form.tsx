'use client';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

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
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { DatePickerWithRange } from '../booking/date-range-picker';
import { BookingformSchema } from './schema/bookingformSchema';
import { Switch } from '../ui/switch';
export function BookRoomForm() {
  const form = useForm<z.infer<typeof BookingformSchema>>({
    resolver: zodResolver(BookingformSchema),
  });
  const onSubmit = (data: z.infer<typeof BookingformSchema>) => {
    console.log('data ', data);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className=' bg-gradient-to-r from-indigo-600 to-sky-300 w-full px-9 py-7 rounded-2xl text-slate-50 font-semibold text-xl hover:bg-indigo-500'>
          Book now
        </Button>
      </SheetTrigger>
      <SheetContent className='bg-white border-none'>
        <SheetHeader className=''>
          <SheetTitle className=' mx-auto'>Book Room Now !</SheetTitle>
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
                      onValueChange={field.onChange}
                      defaultValue={field.value?.id}
                    >
                      <FormControl>
                        <SelectTrigger className='border-muted-foreground outline-1'>
                          <SelectValue placeholder='Select a room ...' />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Array.from({
                          length: 10,
                        }).map((_, i) => (
                          <SelectItem value={String(i)}>{`Room ${
                            i + 1
                          }`}</SelectItem>
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
                            disabled={{
                              before: new Date(),
                            }}
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
                              length: 6,
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
        <SheetFooter>
          <SheetClose asChild>
            <Button type='submit'>Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
