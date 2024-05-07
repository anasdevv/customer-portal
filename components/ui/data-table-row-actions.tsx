'use client';

import { DotsHorizontalIcon } from '@radix-ui/react-icons';
import { Row } from '@tanstack/react-table';

import { Button } from './button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from './dropdown-menu';
import { BookRoomForm } from '../forms/book-room-form';
import { useState } from 'react';

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
}
type BookingRow = {
  status: string;
  id: string;
  startDate: Date;
  endDate: Date;
  roomId: string;
  numGuests: number;
  breakfastIncluded: boolean;
  room: {
    title: string;
    maxCapacity: number;
    discount: number;
    regularPrice: number;
    id: string;
  };
};
export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  const booking = row.original as BookingRow;
  console.log('bookingrow ', booking);
  // const task = taskSchema.parse(row.original);
  const [openEditForm, setOpenEditForm] = useState(false);
  return (
    <>
      {/* <BookRoomForm /> */}
      {openEditForm && (
        <BookRoomForm
          {...(booking?.room ?? {})}
          edit
          breakfastIncluded={booking?.breakfastIncluded ?? false}
          endDate={booking?.endDate}
          numGuests={booking.numGuests}
          startDate={booking.startDate}
          setEdit={(val) => {
            setOpenEditForm(val);
          }}
        />
      )}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant='ghost'
            className='flex h-8 w-8 p-0 data-[state=open]:bg-muted'
          >
            <DotsHorizontalIcon className='h-4 w-4' />
            <span className='sr-only'>Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align='end' className='w-[160px]'>
          <DropdownMenuItem
            onClick={() => {
              setOpenEditForm(true);
            }}
          >
            {' '}
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem>Make a copy</DropdownMenuItem>
          <DropdownMenuItem>Favorite</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            Delete
            <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
