import { useMutation, useQuery } from 'react-query';
import { getMinutesBySpace, getMinutesDetail } from '../api/minutes';
import { MinutesSpaceType, MinutesType } from '../../types/minutes';

export const getSpaceMinutes = (spaceId: number) => {
    return useQuery<MinutesSpaceType, unknown>(['spaceMinutes'], () => 
    getMinutesBySpace(spaceId),
    );
};

export const getMinutes = (minutesId: number) => {
    return useQuery(['minutes'], () => getMinutesDetail(minutesId));
};