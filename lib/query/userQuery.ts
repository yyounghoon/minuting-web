import { useQuery } from 'react-query';
import { getMeInfo } from '../api/user';

export const useGetMeInfo = () => {
  return useQuery(['getMeInfo'], () => getMeInfo());
};
