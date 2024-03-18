import { useToast } from '@/components/ui/use-toast';
import authService from '@/service/auth';
import { useMutation } from '@tanstack/react-query';

export const useLogout = () => {
  const { toast } = useToast();
  console.log('logout');
  return useMutation({
    mutationFn: authService.logout,
    onSuccess: (data) => {
      console.log('data ', data);
      toast({
        title: 'Logged out  ✅',
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
