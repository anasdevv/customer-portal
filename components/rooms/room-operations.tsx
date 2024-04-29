'use client';
import { useState } from 'react';
import { RoomFilters } from './filters';
import { parseAsString, useQueryState } from 'nuqs';

export const RoomOperations = () => {
  const [sortBy, setSortBy] = useQueryState('orderBy', parseAsString);
  const [sortOrder, setSortOrder] = useQueryState('sort', parseAsString);
  // const [_, setSortParam] = useQueryState('sortBy', parseAsString);

  const handleSortClick = (value: string) => {
    if (sortBy === value) {
      if (sortOrder === 'asc') {
        setSortOrder(() => 'desc');
      } else {
        setSortBy(null);
        setSortOrder(null);
        return;
      }
    } else {
      setSortOrder('asc');
    }
    setSortBy(value);
  };

  const sortByOptions = [
    {
      label: 'bookings',
      value: 'bookings',
    },
    {
      label: 'price',
      value: 'regularPrice',
    },
    {
      label: 'capacity',
      value: 'maxCapacity',
    },
  ];

  return (
    <div className=' bg-slate-800 h-full static w-[20rem] overflow-hidden rounded-lg hidden lg:block'>
      <div className='flex flex-col space-y-4 px-5 py-4'>
        <div className='flex items-center justify-between'>
          <h1 className='pl-1 text-muted text-lg '>Sort by</h1>
          {Boolean(sortBy) && Boolean(sortOrder) && (
            <h1 className='text-muted-foreground text-lg pb-2'>
              {sortBy} {sortOrder}
            </h1>
          )}
        </div>
        <div className='flex justify-between items-center text-black font-bold'>
          {sortByOptions.map((option, index) => (
            <span
              key={index}
              className={`bg-gray-600 p-1.5 rounded cursor-pointer shadow-md ${
                sortBy === option.value && 'text-white'
              }`}
              onClick={() => handleSortClick(option.value)}
            >
              {option.label}
              {sortBy === option.value && (
                <span>{sortOrder === 'asc' ? ' ▲' : ' ▼'}</span>
              )}
            </span>
          ))}
        </div>
        {/* filters */}
        <RoomFilters />
        <div></div>
      </div>
    </div>
  );
};
