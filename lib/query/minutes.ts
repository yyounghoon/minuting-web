import { useQuery } from 'react-query';
import { getMinutesBySpace, getMinutesDetail } from '../api/minutes';
import { MinutesSpaceType } from '../../types/minutes';

export const useGetSpaceMinutes = (spaceId: number) => {
  return useQuery<MinutesSpaceType, unknown>(['spaceMinutes'], () =>
    getMinutesBySpace(spaceId),
  );
};

export const useGetMinutes = (minutesId: number) => {
  return useQuery(['minutes'], () => getMinutesDetail(minutesId));
};
