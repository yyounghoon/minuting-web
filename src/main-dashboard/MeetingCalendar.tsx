import { css } from '@emotion/react';

import { useGetUserCalendar } from '../query/user';
import { UserCalendarType } from '../types/user';
import { MeetingCalendarStyle } from './MeetingCalendar.styles';

function MeetingCalendar() {
    let now = new Date();
    const { data:schedules } = useGetUserCalendar(now.toISOString().slice(0,10), new Date(now.getFullYear(), now.getMonth(), now.getDate() + 2).toISOString().slice(0,10));

    let baseHour = now.getHours() - 1;
    let baseMinute = Number(now.getMinutes());
    
    if (baseMinute < 30) {
        baseMinute = 0;
    } else if (baseMinute > 30) {
        baseMinute = 30;
    }

    if(!schedules) return null;

    return <div css={MeetingCalendarStyle}>
        <div className='calendar-container'>
            <div className='calendar-top' css={ css('.time-bar { left:' + (-103 - (Number(now.getMinutes()) - baseMinute) * 3) + 'px; }') }>
                <div className='time-bar'>
                { getTimes(baseHour, baseMinute).map((it) => (<div key={it} className='time' ><p className='time-text'>{it}</p></div>)) }
                </div>
            </div>
            <div className='calendar-box'>
                <div className='calendar-now-bar'>
                    <div className='calendar-now-bar-line'></div>
                </div>
                <div className='schedule-container'>
                    {
                        getClassifiedSchedule(schedules).map(
                            (classifiedSchedule) => (
                                <div key={"schedule-step" + Number(Math.random())} className='schedule-step'>
                                    {classifiedSchedule.map((schedule) => (
                                        <div key={schedule.id} className='schedule-box' style={{background: getRandomColor(schedule.id.slice(-6), schedule.start.getDay()), width: getPxByDate(schedule.end, schedule.start), left: 115 + getPxByDate(schedule.start, now)}}>
                                            <div className='box-time'>
                                                {
                                                    getPxByDate(schedule.end, schedule.start) > 230 ? <p className='box-date'>{schedule.start.toISOString().split('T')[0]}</p> : <p className='box-date'></p>
                                                }
                                                {
                                                    getPxByDate(schedule.end, schedule.start) > 165 &&    
                                                        <p className='box-period'>{
                                                            schedule.start.getHours() % 12 + ":" + ("0" + schedule.start.getMinutes()).slice(-2) + ((schedule.start.getHours() >= 12) ? "pm" : "am")
                                                            + " to " + schedule.end.getHours() % 12 + ":" + ("0" + schedule.end.getMinutes()).slice(-2) + ((schedule.end.getHours() >= 12) ? "pm" : "am")
                                                        }</p>
                                                }
                                            </div>
                                            <h1 className='box-summary'>{schedule.summary}</h1>
                                            <p className='box-location'>{schedule.location != null ? schedule.location : ""}</p>
                                        </div>
                                    ))}
                                </div>
                            )
                        )
                    }
                </div>
            </div>
        </div>
    </div>
}

const getTimes = (hour: number, minute: number) => {
    let times = [];
    for (let i=0; i<39; i++) {
        times.push(("0" + hour).slice(-2) + ":" + ("0" + minute).slice(-2));
        if (minute == 30) {
            hour = (hour + 1) % 12;
            if (hour == 0) hour = 12;
            minute = 0;
        } else {
            minute = 30;
        }
    }
    return times;
}

const getClassifiedSchedule = (schedules :UserCalendarType[]) => {
    if (schedules.length == 0) return [];

    let classifiedSchedules: UserCalendarType[][] = [];
    pushClassifiedSchedule(classifiedSchedules, 0, schedules[0]);

    for(let i=1; i<schedules.length; i++) {
        let execute = false;
        for(let j=0; j<classifiedSchedules.length; j++) {
            if (getSchedulePushAvailability(schedules[i], classifiedSchedules[j])) {
                execute = true;
                pushClassifiedSchedule(classifiedSchedules, j, schedules[i]);
                break;
            }
        }
        if (!execute) {
            pushClassifiedSchedule(classifiedSchedules, classifiedSchedules.length, schedules[i]);
        }
    }
    return classifiedSchedules;
}

const getSchedulePushAvailability = (schedule: UserCalendarType, schedules: UserCalendarType[]) => {
    for(let i=0; i<schedules.length; i++) {
        if (schedules[i].start < schedule.start && schedules[i].end > schedule.start ||
            schedules[i].start < schedule.end && schedules[i].end > schedule.end ||
            schedule.start < schedules[i].start && schedule.end > schedules[i].start ||
            schedule.start < schedules[i].end && schedule.end > schedules[i].end) {
            return false
        }
    }
    return true;
}

const pushClassifiedSchedule = (classifiedSchedules: UserCalendarType[][], index: number, value: UserCalendarType) => {
    if (classifiedSchedules[index] == null) {
        classifiedSchedules[index] = [value];
    }
    else {
        classifiedSchedules[index].push(value);
    }
}

const colors = ['#AD1457', '#F4511E', '#E4C441', '#0B8043', '#3F51B5', '#8E24AA', '#D81B60', '#EF6C00', '#C0CA33', '#009688', '#7986CB',
                '#D50000', '#F09300', '#7CB342', '#039BE5', '#B39DDB', '#616161', '#E67C73', '#F6BF26', '#33B679', '#4285F4', '#9E69AF', '#A79B8E'];

const getRandomColor = (id: string, num: number) => {
    return colors[id.charCodeAt(num % 6) % colors.length];
}

const getPxByDate = (date1: Date, date2: Date) => {
    let dayGap = Number(date1.getDay()) - Number(date2.getDay());
    let hourGap = Number(date1.getHours()) - Number(date2.getHours());
    let minuteGap = Number(date1.getMinutes()) - Number(date2.getMinutes());
    return (4320 * dayGap) + (180 * hourGap) + (3 * minuteGap);
}

export default MeetingCalendar