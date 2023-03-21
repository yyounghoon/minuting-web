import { AxiosError } from 'axios';
import { useQuery } from 'react-query';

import { getUserCalendar } from '../api/user';
import { UserCalendarResType, UserCalendarType } from '../types/user';

export const useGetUserCalendar = (start: string, end: string) => {
    return useQuery<UserCalendarResType[], AxiosError<any>, UserCalendarType[] >(['userCalendar'], () => getUserCalendar(start, end), {
        select: (data) => {
            return data.map((data)=> {
                const { id, start, end, summary, location } = data;
                return {
                    id,
                    start: new Date(start),
                    end: new Date(end),
                    summary,
                    location
                }
            })
        }
    });
};