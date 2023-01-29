import { client } from '../../api-config/client';
import { useMutation } from 'react-query';
import { TSearchUser } from '../types';

type Response = {
  error: {
    code: number;
    reason: string;
  };
  list: TSearchUser[];
};

const getUser = async (name: string) => {
  const { data } = await client.get<Response>(`/user?name=${name}`);
  return data;
};

export const useSearchUser = () => {
  return useMutation(['searchUser'], (name: string) => getUser(name));
};
