import { cn, getCountryFlagUrl } from '@/lib/utils';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';
import { SelectLabel } from '@radix-ui/react-select';
import Image from 'next/image';

export interface Option {
  label: string;
  value: string;
}

export interface SelectableInputProps {
  options: Option[];
  title?: string;
  placeholder: string;
  className?: string;
}

export const SelectableInput = ({
  options,
  title,
  placeholder,
  className,
}: SelectableInputProps) => {
  // Your implementation goes here
  return (
    <Select name='_country' required>
      <SelectTrigger className={cn('w-full', className)}>
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {title && <SelectLabel>{title}</SelectLabel>}
          {options.map(({ label, value }) => (
            <div className='flex items-center justify-start py-1 '>
              <SelectItem
                value={value}
                className='text-center'
                //   className='flex items-center justify-between'
              >
                {label}
              </SelectItem>
            </div>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
