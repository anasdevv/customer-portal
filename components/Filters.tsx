'use client';
import { Disclosure } from '@headlessui/react';
import { useQuery } from '@tanstack/react-query';
import { MinusIcon, PlusIcon } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Button } from './ui/button';
import { ScrollArea } from './ui/scroll-area';

interface Option {
  label: string;
  value: string;
  checked: boolean;
}

interface FilterSection {
  id: string;
  name: string;
  options: Option[];
}

const filters = [
  {
    id: 'capacity',
    name: 'Capacity',
    options: [
      { value: 1, label: 'Fits up to 1 person', checked: false },
      { value: 2, label: 'Fits up to 2 people', checked: false },
      { value: 3, label: 'Fits up to 3 people', checked: false },
      { value: 4, label: 'Fits up to 4 people', checked: false },
      { value: 5, label: 'Fits up to 5 people', checked: false },
    ],
  },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Filters() {
  const [selectedFilters, setSelectedFilters] = useState<{
    [key: string]: { [key: string]: boolean };
  }>({});
  console.log('selected filtets', selectedFilters);

  const minPriceRef = useRef<HTMLInputElement>(null);
  const maxPriceRef = useRef<HTMLInputElement>(null);
  let features: any = null;
  const updatedFilters = useMemo(() => {
    if (features) {
      return [
        ...filters,
        {
          id: 'features',
          name: 'Features',
          options: features.map(
            (feature: { id: number; featureName: string }) => ({
              ...feature,
              value: feature.id,
              label: feature.featureName,
              checked: false,
            })
          ),
        },
      ];
    } else {
      return [
        ...filters,
        {
          id: 'features',
          name: 'Features',
          options: [],
        },
      ];
    }
  }, [features]);
  //   const { updateFeatures, updateMaxCapacity, updatePriceRange, resetFilters } =
  //     useFilters();

  //   console.log('features', features);
  const handleCheckboxChange = (sectionId: string, optionValue: string) => {
    console.log('value ', optionValue);
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [sectionId]: {
        ...(prevFilters[sectionId] || {}),
        [optionValue]: !(prevFilters[sectionId]?.[optionValue] || false),
      },
    }));
  };

  //   useEffect(() => {
  //     console.log('inside effect 103 filters');

  //     if (selectedFilters?.capacity) {
  //       let updatedMaxCap: number[] | [] = [];
  //       for (const [key, value] of Object.entries(selectedFilters.capacity)) {
  //         if (value) {
  //           updatedMaxCap = [...updatedMaxCap, parseInt(key)];
  //         }
  //       }
  //       updateMaxCapacity(updatedMaxCap);
  //     }
  //     if (selectedFilters?.features) {
  //       let updatedFeatures: number[] | [] = [];
  //       for (const [key, value] of Object.entries(selectedFilters.features)) {
  //         if (value) {
  //           updatedFeatures = [...updatedFeatures, parseInt(key)];
  //         }
  //       }
  //       updateFeatures(updatedFeatures);
  //     }
  //   }, [selectedFilters, selectedFilters?.capacity, selectedFilters?.features]);
  const clearFilters = () => {
    setSelectedFilters({});
    //   resetFilters();
  };
  return (
    <div className=' bg-slate-800 h-full static w-[20rem] overflow-hidden rounded-lg hidden lg:block'>
      <div>
        <main className='mx-auto w-[16rem] h-screen'>
          <div className='flex items-center justify-between border-b border-gray-200 pb-6 pt-6'>
            <h1 className='text-xl font-semibold tracking-tight text-slate-50'>
              Filters
            </h1>
            <button
              type='button'
              className='text-sm text-slate-200 underline underline-offset-4 hover:text-slate-400'
              onClick={clearFilters}
            >
              Reset
            </button>
          </div>
          <ScrollArea className='h-[30rem] p-3'>
            <section aria-labelledby='products-heading' className='pb-24 '>
              <div className='grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1'>
                {/* Filters */}
                <form className='block'>
                  {updatedFilters.map((section) => (
                    <Disclosure
                      as='div'
                      key={section.id}
                      className='border-b border-gray-200 py-6'
                    >
                      {({ open }) => (
                        <>
                          <h3 className=' flow-root'>
                            <Disclosure.Button className='flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-600'>
                              <span className='font-medium text-gray-300'>
                                {section.name}
                              </span>
                              <span className='ml-6 flex items-center'>
                                {open ? (
                                  <MinusIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                ) : (
                                  <PlusIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className='pt-6'>
                            <div className='space-y-4'>
                              {section.options.map(
                                (option: Option, optionIdx: number) => (
                                  <div
                                    key={option.value}
                                    className='flex items-center'
                                  >
                                    <input
                                      id={`filter-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type='checkbox'
                                      checked={
                                        selectedFilters[section.id]?.[
                                          option.value
                                        ] || false
                                      }
                                      onChange={() =>
                                        handleCheckboxChange(
                                          section.id,
                                          option.value.toString()
                                        )
                                      }
                                      className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500'
                                    />
                                    <label
                                      htmlFor={`filter-${section.id}-${optionIdx}`}
                                      className='ml-3 text-sm text-gray-600'
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                )
                              )}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                  <Disclosure
                    as='div'
                    className='border-b border-gray-200 py-6'
                  >
                    {({ open }) => (
                      <>
                        <h3 className='-my-3 flow-root'>
                          <Disclosure.Button className='flex w-full items-center justify-between  py-3 text-sm text-gray-400 hover:text-gray-500'>
                            <span className='font-medium text-gray-300'>
                              Price Range
                            </span>
                            <span className='ml-6 flex items-center'>
                              {open ? (
                                <MinusIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              ) : (
                                <PlusIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className='pt-6'>
                          <div className='space-y-4'>
                            <div className='flex items-center'>
                              <label
                                htmlFor='minPrice'
                                className='text-sm text-gray-400'
                              >
                                Min Price:
                              </label>
                              <input
                                id='minPrice'
                                type='number'
                                ref={minPriceRef}
                                className='ml-3 h-8 w-20 border-gray-300 rounded-md text-muted-foreground'
                              />
                            </div>
                            <div className='flex items-center'>
                              <label
                                htmlFor='maxPrice'
                                className='text-sm text-gray-400'
                              >
                                Max Price:
                              </label>
                              <input
                                id='maxPrice'
                                type='number'
                                ref={maxPriceRef}
                                className='ml-3 h-8 w-20 border-gray-300 text-muted-foreground rounded-md '
                              />
                            </div>
                            <div className='flex justify-between items-center px-2'>
                              <Button
                                variant='secondary'
                                className='p-3 text-base'
                                type='button'
                                onClick={(e: any) => {
                                  e?.preventDefault();
                                  if (
                                    minPriceRef.current?.value &&
                                    maxPriceRef.current?.value
                                  ) {
                                    const min = parseFloat(
                                      minPriceRef?.current?.value as string
                                    );
                                    const max = parseFloat(
                                      maxPriceRef?.current?.value as string
                                    );
                                    //   updatePriceRange(min, max);
                                  }
                                }}
                              >
                                save
                              </Button>
                              <Button
                                variant='secondary'
                                type='submit'
                                // onClick={() => {
                                //   if (
                                //     minPriceRef?.current?.value &&
                                //     maxPriceRef?.current?.value
                                //   ) {
                                //     minPriceRef.current.value = '';
                                //     maxPriceRef.current.value = '';
                                //     updatePriceRange(null, null);
                                //   }
                                // }}
                              >
                                clear
                              </Button>
                            </div>
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                </form>
              </div>
            </section>
          </ScrollArea>
        </main>
      </div>
    </div>
  );
}
