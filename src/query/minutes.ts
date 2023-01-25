import { useQuery } from 'react-query';
import { getMinutesBySpace, getMinutesDetail } from '../api/minutes';
import { MinutesSpaceType } from '../types/minutes';

export const useGetSpaceMinutes = (spaceId: number) => {
  return useQuery<MinutesSpaceType, unknown>(['spaceMinutes'], () =>
    getMinutesBySpace(spaceId),
  );
};

export const useGetMinutes = (minutesId: number) => {
  return useQuery(['minutes'], () => getMinutesDetail(minutesId));
};
// import { useMutation, useQuery } from 'react-query';
// import { postMinute, getMinuteList, getDetailMinute, updateMinute, deleteMinute } from '../api/minutes';
// import { IPostMinute } from '../../types/minutes';

// export const useGetMinuteList = () => {
//   return useQuery(['minuteList'], () => getMinuteList());
// };

// export const usePostMinute = () => {
//   return useMutation(['createMinute'], (payload: IPostMinute) => postMinute(payload));
// };

// export const useGetMinuteDetail = (id: number) => {
//   return useQuery(['minuteList', id], () => getDetailMinute(id));
// };

// export const usePutMinute = (id: number) => {
//   return useMutation(['updateMinute', id], (payload: IPostMinute) => updateMinute(id, payload));
// }

// export const useDeleteMinute = (id: number) => {
//   return useMutation(['deleteMinute', id], () => deleteMinute(id));
// }
