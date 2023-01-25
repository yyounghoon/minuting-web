import React from 'react';

import MinuteItem from './MinutesItem';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useGetSpaceMinutes } from '../../query/minutes';

type MinutesItemProps = {
  id: number;
};

function Space2({ id }: MinutesItemProps) {
  const router = useRouter();
  const { data } = useGetSpaceMinutes(id);

  if (!data) return <div>공개된 스페이스가 없습니다</div>;

  const SpaceDashboardDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    height: fit-content;

    background: #ffffff;
    border-radius: 1.2rem;

    padding: 1.5rem 2rem;
    margin-right: 3rem;
    margin-top: 3rem;

    box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
    -webkit-box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 20px -14px rgba(0, 0, 0, 0.75);
  `;

  return (
    <>
      <SpaceDashboardDiv>
        {data.list.map((minutes) => (
          <MinuteItem
            key={minutes.id}
            id={minutes.id}
            title={minutes.title}
          ></MinuteItem>
        ))}
        <MinuteItem id={id} title="test"></MinuteItem>
      </SpaceDashboardDiv>
    </>
  );
}

export default Space2;
