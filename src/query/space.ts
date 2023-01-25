import { useMutation, useQuery } from 'react-query';
import { getPublicSpaces, postCreateSpace } from '../api/space';
import { CreateSpaceType, PublicSpacesType } from '../types/space';

export const useCreateSpace = () => {
  return useMutation<unknown, unknown, CreateSpaceType>(
    ['createSpace'],
    (payload) => postCreateSpace(payload),
  );
};

export const usePublicSpaces = () => {
  return useQuery<PublicSpacesType, unknown>(['publicSpaces'], () =>
    getPublicSpaces(),
  );
};
