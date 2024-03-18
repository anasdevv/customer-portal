'use client';

import * as React from 'react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getCountries } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { z } from 'zod';
import { signupSchema } from '../../../app/schema/signupSchema';
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserSignup({ className, ...props }: UserAuthFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof signupSchema>>({
    resolver: zodResolver(signupSchema),
  });

  async function onSubmit(data: z.infer<typeof signupSchema>) {
    console.log(data);
  }
  const isLoading = false;
  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='grid gap-2 gap-y-3'>
          <div className='grid gap-1 text-white gap-y-2'>
            <Label className='' htmlFor='email'>
              Name
            </Label>
            <Input
              id='name'
              placeholder='Alex Smith'
              type='name'
              autoCapitalize='none'
              autoComplete='name'
              autoCorrect='off'
              disabled={isLoading}
              {...register('name')}
            />
            {errors.name?.message && (
              <p className='text-red-600 text-sm'>{errors.name?.message}</p>
            )}
          </div>
          <div className='grid gap-1 text-white gap-y-2'>
            <Label className='' htmlFor='email'>
              Email
            </Label>
            <Input
              id='email'
              placeholder='name@example.com'
              type='email'
              autoCapitalize='none'
              autoComplete='email'
              autoCorrect='off'
              disabled={isLoading}
              {...register('email')}
            />
            {errors.email?.message && (
              <p className='text-red-600 text-sm'>{errors.email?.message}</p>
            )}
          </div>
          <div className='grid gap-1 text-white gap-y-2'>
            <Label className='' htmlFor='email'>
              Password
            </Label>
            <Input
              id='password'
              placeholder='*******'
              type='password'
              autoCapitalize='none'
              autoCorrect='off'
              disabled={isLoading}
              {...register('password')}
            />
            {errors.password?.message && (
              <p className='text-red-600 text-sm'>{errors.password?.message}</p>
            )}
          </div>
          <div className='grid gap-1 text-white gap-y-2'>
            <Label className='' htmlFor='email'>
              Phone number
            </Label>
            <Input
              id='phone'
              placeholder='your phone number'
              type='tel'
              autoComplete='tel'
              autoCorrect='off'
              disabled={isLoading}
              {...register('phone')}
            />
            {errors.phone?.message && (
              <p className='text-red-600 text-sm'>{errors.phone?.message}</p>
            )}
          </div>
          <div className='grid gap-1 text-white gap-y-2'>
            <Label>Country</Label>
            <Controller
              control={control}
              name='country'
              render={({ field }) => (
                <Select
                  name='country'
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  required
                >
                  <SelectTrigger className={cn('w-full', className)}>
                    <SelectValue placeholder='Select your country' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {getCountries().map(({ label, value }) => (
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
                  {errors.country?.message && (
                    <p className='text-red-600 text-sm'>
                      {errors.country?.message}
                    </p>
                  )}
                </Select>
                // <SelectableInput
                //   {...field}
                //   placeholder='select your country'
                //   options={getCountries()}
                // />
              )}
            />
          </div>
          <Button
            disabled={isLoading}
            className=' bg-gradient-to-r from-indigo-400 to-sky-300 py-4 hover:from-indigo-500 hover:to-sky-400'
            type='submit'
          >
            {isLoading && <FaSpinner className='mr-2 h-4 w-4 animate-spin' />}
            Sign In
          </Button>
        </div>
      </form>
    </div>
  );
}
