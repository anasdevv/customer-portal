import React from 'react';
import { useQuery } from '@tanstack/react-query';
import FeaturesService from '@/service/features';
export const useGetFeatures = () => {
  const {
    data,
    isLoading: fetchFeaturesLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ['features'],
    queryFn: FeaturesService.getAll,
    retry: false,
  });
  console.log('data2 ', data);
  return { data, fetchFeaturesLoading, isError, error };
};

export default useGetFeatures;
