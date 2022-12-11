import Head from 'next/head';
import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import { paths } from '../lib/constants';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

function login() {
  return (
    <>
      <Head>
        <title>미뉴팅 - 로그인</title>
      </Head>
      <Block>
        <Image src={Logo} alt={'로고'} width={300} height={200} />
        <Link href={paths.googleLogin}>
          <Button size={'large'}>구글 계정으로 로그인</Button>
        </Link>
      </Block>
    </>
  );
}

export default login;

login.getLayout = function getLayout(page: ReactElement) {
  return { page };
};

const Block = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
