import React from 'react';
import CreateForm from '../../space/CreateForm';
import Head from 'next/head';

function CreateSpace() {
  return (
    <>
      <Head>
        <title>미뉴팅 - 스페이스 생성</title>
      </Head>
      <h1>스페이스 생성</h1>
      <CreateForm />
    </>
  );
}

export default CreateSpace;
