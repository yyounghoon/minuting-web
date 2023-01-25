import { client } from '../api-config/client';
import { CreateSpaceType } from '../types/space';

export const postCreateSpace = async (payload: CreateSpaceType) => {
  const response = await client.post('/spaces', payload);
  return response.data;
};

export const getPublicSpaces = async () => {
  const response = await client.get('/spaces/public');
  return response.data;
};
