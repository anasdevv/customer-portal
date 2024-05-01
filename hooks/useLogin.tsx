import { useToast } from '@/components/ui/use-toast';
import authService from '@/service/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogin = () => {
  const { toast } = useToast();
  console.log('login');
  return useMutation({
    mutationFn: authService.login,
    onSuccess: (data) => {
      console.log('data ', data);
      toast({
        title: 'Logged in  ✅',
      });
    },
    onError: (err: any) => {
      console.log('err ', err);
      console.log(err.message);
      toast({
        variant: 'destructive',
        title: `Uh oh! ${err?.props ?? err?.message ?? 'something went wrong'}`,
        description: 'There was a problem with your request.',
      });
    },
  });
};
