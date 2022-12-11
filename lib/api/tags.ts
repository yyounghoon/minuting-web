import { client } from '../client';
import { GetTagResponse } from '../../types/tags';

export const getTags = async () => {
  const response = await client.get<GetTagResponse>('/tags/SPACE');
  return response.data;
};
