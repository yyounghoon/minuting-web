import { client } from '../client';
import { MinutesDetailType } from '../../types/minutes';

export const getMinutesBySpace = async (spaceId: number) => {
  const response = await client.get(`/spaces/${spaceId}/minutes`);
  return response.data;
};

export const getMinutesDetail = async (minutesId: number) => {
  const response = await client.get<MinutesDetailType>(`/minutes/${minutesId}`);
  return response.data;
};
