'use client';

import { ColumnDef } from '@tanstack/react-table';

import { DataTableColumnHeader } from './data-table-column-header';
import { DataTableRowActions } from './data-table-row-actions';
import { Checkbox } from './checkbox';
import { Badge } from './badge';
import { Task } from '../booking-history/data/schema';
import { labels, priorities, statuses } from '../booking-history/data/data';
import { format } from 'date-fns';
interface IBooking {
  id: string;
  roomTitle: string;
  startDate: string;
  status: string;
  totalPrice: string;
  duration: string;
}
export const columns: ColumnDef<IBooking>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
        className='translate-y-[2px]'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
        className='translate-y-[2px]'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    accessorKey: 'roomTitle',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Title' />
    ),
    cell: ({ row }) => {
      // const label = labels.find((label) => label.value === row.original.label);
      // console.log('roww ', row);
      return (
        <div className='flex space-x-2'>
          {/* {label && <Badge variant='outline'>{label.label}</Badge>} */}
          <span className='max-w-[300px] truncate font-medium line-clamp-1'>
            {row.getValue('roomTitle')}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Status' />
    ),
    cell: ({ row }) => {
      const s: string = row.getValue('status');
      const status = statuses.find(
        (status) => status.value === s.toLowerCase()
      );
      // console.log(status, '  rr ', row.getValue('status'));
      if (!status) {
        return null;
      }

      return (
        <div className='flex w-[120px] items-center'>
          {status?.icon && (
            <status.icon className='mr-2 h-4 w-4 text-muted-foreground' />
          )}
          <span>{status.label}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'totalPrice',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Price' />
    ),
    cell: ({ row }) => {
      const totalPrice: string = row.getValue('totalPrice');

      if (!totalPrice) {
        return null;
      }

      return (
        <div className='flex items-center'>
          <span className='mr-2 h-4 w-4 text-muted-foreground'> $</span>

          <span>{totalPrice}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: 'startDate',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Start Date' />
    ),
    cell: ({ row }) => (
      <div className='w-[100px]'>
        {format(row.getValue('startDate'), 'MMMM do,yyyy')}
      </div>
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'duration',
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title='Duration' />
    ),
    cell: ({ row }) => {
      const duration: string = row.getValue('duration');

      if (!duration) {
        return null;
      }

      return (
        <div className='flex items-center'>
          {/* <span className='mr-2 h-4 w-4 text-muted-foreground'> $</span> */}

          <span>{duration}</span>
        </div>
      );
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    id: 'actions',
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
