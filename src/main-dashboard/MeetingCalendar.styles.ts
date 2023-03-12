import { css } from '@emotion/react';

export const MeetingCalendarStyle = css`
    .calendar-container {
        width: 1364px;
        overflow: scroll;
        border-radius: 20px 20px 20px 20px;
    }

    .calendar-box {
        display: flex;
        width: 3000px;
        height: fit-content;
        min-height: 146px;
        overflow: hidden;

        background: #FFFFFF;
        box-shadow: 0px 8px 6px rgba(0, 0, 0, 0.05);
    }

    .calendar-top {
        box-sizing: border-box;
        width: 3000px;
        height: 40px;
        display: flex;
        align-items: center;
        overflow: hidden;

        background: #FDFEFD;
        border-bottom: 1px solid #F5F5F5;
    }

    .calendar-now-bar {
        position: relative;
        width: 6px;
        left: 118px;
        display: flex;
        flex-direction: column;
        align-items: center;
        z-index: 1;
    }

    .calendar-now-bar-line {
        width: 2px;
        height: 100%;
        background: #1755E7;
    }

    .calendar-now-bar-line::after {
        display: block;
        content: " ";
        width: 6px;
        height: 6px;
        border-radius: 20px 20px 20px 20px;
        background: #1755E7;
        position: relative;
        top: -4px;
        left: -2px;
    }

    .time-bar {
        position: relative;
        display: flex;
        align-items: center;
        margin: 0px;
    }

    .time {
        width: 40px;
        height: 22px;
        margin: 0 25px;
        display: flex;
        justify-content: center;
    }

    .time-text {
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 22px;
        width: max-content;
        color: #3A3A3A;
    }

    .schedule-container {
        position: relative;
        top: 0px;
        left: 0px;
        display: block;
    }

    .schedule-step {
        margin: 28px 0px;
        width: 3000px;
        height: 90px;
    }

    .schedule-box {
        position: absolute;
        height: 90px;

        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
        border-radius: 10px;

        padding: 8px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .box-time {
        display: flex;
        justify-content: space-between;
    }

    .box-date {
        font-size: 14px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    .box-period {
        font-size: 14px;
        color: #16A34A;
        box-sizing: border-box;
        padding: 0px 8px;
        gap: 12px;
        background: #DCFCE7;
        border: 0.5px dashed #16A34A;
        border-radius: 2px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    .box-summary {
        font-size: 16px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

    .box-location {
        font-size: 14px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }

`;