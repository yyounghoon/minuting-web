import { useQuery } from 'react-query';
import { getTags } from '../api/tags';

export const useGetTags = () => {
  return useQuery('tags', () => getTags(), {});
};
