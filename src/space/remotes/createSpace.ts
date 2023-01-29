import { client } from '../../api-config/client';
import { useMutation } from 'react-query';
import { CreateSpaceType } from '../types';

export const postCreateSpace = async (payload: CreateSpaceType) => {
  const response = await client.post('/spaces', payload);
  return response.data;
};

export const useCreateSpace = () => {
  return useMutation<unknown, unknown, CreateSpaceType>(
    ['createSpace'],
    (payload) => postCreateSpace(payload),
  );
};
