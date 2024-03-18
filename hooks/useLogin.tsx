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
      console.log(err);
      console.log(err.response.request.status);
      toast({
        variant: 'destructive',
        title: `Uh oh! ${err.response.data.message ?? 'something went wrong'}`,
        description: 'There was a problem with your request.',
      });
    },
  });
};
