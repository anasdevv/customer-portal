'use client';
import {
  parseAsArrayOf,
  parseAsInteger,
  parseAsString,
  useQueryState,
} from 'nuqs';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import useGetFeatures from '@/hooks/useGetFeatures';
import { FeatureType } from '@/lib/types';
import { Spinner } from '../ui/Spinner';
import { Checkbox } from '../ui/checkbox';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { ScrollArea } from '../ui/scroll-area';

const capacitiesOptions = [
  { label: 'Fits up to 2 people', value: '2' },
  { label: 'Fits up to 3 people', value: '3' },
  { label: 'Fits up to 4 people', value: '4' },
  { label: 'Fits up to 5 people', value: '5' },
  { label: 'Fits up to 6 people', value: '6' },
];
export function RoomFilters() {
  const [rangeValue, setRangeValue] = useQueryState(
    'price',
    parseAsInteger.withDefault(1000)
  );
  const [discount, setDiscount] = useQueryState(
    'discount',
    parseAsString.withDefault('all')
  );

  const handleRangeChange = (e: any) => {
    setRangeValue(parseInt(e.target.value));
  };
  const { data: featuresData, fetchFeaturesLoading } = useGetFeatures();
  const [features, setFeatures] = useQueryState<string[]>(
    'features',
    parseAsArrayOf(parseAsString)
  );
  const [capacities, setCapacities] = useQueryState<string[]>(
    'caps',
    parseAsArrayOf(parseAsString)
  );
  return (
    <ScrollArea className='h-[30rem] '>
      <Accordion type='multiple' className='w-full px-3'>
        <AccordionItem value='item-1' disabled={fetchFeaturesLoading}>
          <AccordionTrigger>
            {' '}
            <div className='flex items-center justify-start space-x-4 w-full'>
              <span>Features</span>
              {fetchFeaturesLoading && <Spinner className='w-6 h-6' />}
            </div>{' '}
          </AccordionTrigger>
          <AccordionContent>
            {
              <ScrollArea className='h-40'>
                <div className='flex-col space-y-2'>
                  {featuresData?.map((f: FeatureType) => (
                    <div
                      key={f?.id}
                      className='flex flex-row items-start space-x-3 space-y-0'
                    >
                      <Checkbox
                        id={`feature-${f.id}`}
                        checked={features?.includes(f.id)}
                        onCheckedChange={(checked) => {
                          checked
                            ? setFeatures([...(features ?? []), f.id])
                            : setFeatures(
                                (feats) =>
                                  feats?.filter((feat) => feat !== f.id) ?? []
                              );
                        }}
                      />
                      <label
                        htmlFor={`feature-${f.id}`}
                        className='font-normal cursor-pointer'
                      >
                        {f.featureName}
                      </label>{' '}
                    </div>
                  ))}
                </div>
              </ScrollArea>
            }
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-2'>
          <AccordionTrigger> Capacity</AccordionTrigger>
          <AccordionContent>
            <div className='flex-col space-y-2'>
              {capacitiesOptions.map((c) => (
                <div
                  key={c.value}
                  className='flex flex-row items-start space-x-3 space-y-0'
                >
                  <Checkbox
                    id={`capacity-${c.value}`}
                    checked={capacities?.includes(c.value)}
                    onCheckedChange={(checked) => {
                      checked
                        ? setCapacities([...(capacities ?? []), c.value])
                        : setCapacities(
                            (caps) =>
                              caps?.filter((cap) => cap !== c.value) ?? []
                          );
                    }}
                  />
                  <label
                    htmlFor={`capacity-${c.value}`}
                    className='font-normal cursor-pointer'
                  >
                    {c.label}
                  </label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-3'>
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className='flex justify-between items-center'>
              <input
                type='range'
                min={100}
                max={1000}
                value={rangeValue}
                className='range w-3/4'
                step={50}
                onChange={handleRangeChange}
              />
              <span className='text-lg text-muted-foreground'>
                {rangeValue}$
              </span>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value='item-4'>
          <AccordionTrigger>Discount</AccordionTrigger>
          <AccordionContent>
            <RadioGroup
              className='flex flex-col space-y-1'
              defaultValue={discount}
              onValueChange={(value) => setDiscount(value)}
            >
              <div className='flex items-center space-x-3 space-y-0'>
                <RadioGroupItem value='all' id='all' />
                <label htmlFor='all'>All</label>
              </div>
              <div className='flex items-center space-x-3 space-y-0'>
                <RadioGroupItem value='with-discount' id='with-discount' />
                <label htmlFor='with-discount' className='cursor-pointer'>
                  With discount
                </label>
              </div>
              <div className='flex items-center space-x-3 space-y-0'>
                <RadioGroupItem
                  value='without-discount'
                  id='without-discount'
                />
                <label htmlFor='without-discount' className='cursor-pointer'>
                  Without discount
                </label>
              </div>
            </RadioGroup>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollArea>
  );
}
