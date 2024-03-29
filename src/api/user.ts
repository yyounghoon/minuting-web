import { client } from '../api-config/client';
import { GetMeInfoType } from '../types';
import { UserCalendarResType } from '../types/user';

export const getMeInfo = async () => {
  const response = await client.get<GetMeInfoType>('/me');
  return response.data;
};

export const postLogin = async (code: string) => {
  const response = await client.post(
    `/auth/login?code=${code}&type=${process.env.NEXT_PUBLIC_LOGIN_TYPE}`,
  );
  return response.data;
};

export const getUserCalendar = async (minDate: string, maxDate: string) => {
  const response = await client.get<UserCalendarResType[]>(`/calendars?minDate=${minDate}&maxDate=${maxDate}`);
  return response.data;
}
