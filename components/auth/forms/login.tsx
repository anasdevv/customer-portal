'use client';
import { loginSchema } from '@/app/schema/loginSchema';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { useLogin } from '@/hooks/useLogin';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { FaSpinner } from 'react-icons/fa';
import { z } from 'zod';

export const UserLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
  });
  const { mutate: loginUser, isPending, status } = useLogin();
  async function onSubmit(data: z.infer<typeof loginSchema>) {
    console.log(data);
    loginUser(data);
  }
  const isLoading = false;
  return (
    <div className={cn('grid gap-6')}>
      <div>
        <div className='grid gap-2 gap-y-3'>
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
          <Button
            disabled={isLoading}
            onClick={handleSubmit(onSubmit)}
            className=' bg-gradient-to-r from-indigo-400 to-sky-300 py-4 hover:from-indigo-500 hover:to-sky-400'
            type='submit'
          >
            {status === 'pending' && (
              <FaSpinner className='mr-2 h-4 w-4 animate-spin' />
            )}
            Sign In
          </Button>
        </div>
      </div>
    </div>
  );
};
