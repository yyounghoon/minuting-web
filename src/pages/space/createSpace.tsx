import React from 'react';
import Head from 'next/head';
import CreateSpaceForm from '../../space/components/CreateSpaceForm';

function CreateSpace() {
  return (
    <>
      <Head>
        <title>미뉴팅 - 스페이스 생성</title>
      </Head>
      <CreateSpaceForm />
    </>
  );
}

export default CreateSpace;
