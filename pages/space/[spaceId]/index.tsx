import React from 'react';
import Head from 'next/head';

import MinuteItem from '../../../components/space/dashboard/MinutesItem';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { useGetSpaceMinutes } from '../../../lib/query/minutes';

function Space() {
  const router = useRouter();
  const spaceId = Number(router.query.spaceId);
  console.log(spaceId);
  const { data } = useGetSpaceMinutes(spaceId);

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
      <Head>
        <title>미뉴팅 - 스페이스 조회</title>
      </Head>
      <h1>스페이스 조회</h1>
      <SpaceDashboardDiv>
        {data.list.map((minutes) => (
          <MinuteItem id={minutes.id} title={minutes.title}></MinuteItem>
        ))}
        <MinuteItem id={spaceId} title="test"></MinuteItem>
      </SpaceDashboardDiv>
    </>
  );
}

export default Space;
