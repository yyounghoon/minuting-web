import { client } from '../client';
import { GetMeInfoType } from '../../types';

export const getMeInfo = async () => {
  const response = await client.get<GetMeInfoType>('/me');
  return response.data;
};

export const postLogin = async (code: string) => {
  const response = await client.post(`/auth/login?code=${code}`);
  return response.data;
};
