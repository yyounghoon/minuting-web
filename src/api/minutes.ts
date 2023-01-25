import { client } from '../client';
import { IPostMinute, MinutesDetailType } from '../types/minutes';

export const getMinutesBySpace = async (spaceId: number) => {
  const response = await client.get(`/spaces/${spaceId}/minutes`);
  return response.data;
};

export const getMinutesDetail = async (minutesId: number) => {
  const response = await client.get<MinutesDetailType>(`/minutes/${minutesId}`);
  return response.data;
};

export const postMinute = async (minuteData: IPostMinute) => {
  const response = await client.post('/minutes', minuteData);
  return response.data;
};

export const getMinuteList = async () => {
  const response = await client.get('/minutes');
  return response.data;
};

export const getDetailMinute = async (id: number) => {
  const response = await client.get(`/minutes/${id}`);
  return response.data;
};

export const updateMinute = async (id: number, minuteData: IPostMinute) => {
  const response = await client.put(`/minutes/${id}`, minuteData);
  return response.data;
};

export const deleteMinute = async (id: number) => {
  const response = await client.delete(`/minutes/${id}`);
  return response.data;
};
