import Head from 'next/head';
import { ReactElement, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../public/logo.svg';
import { Button } from 'antd';
import styled from '@emotion/styled';
import { GetStaticProps } from 'next';
import { paths } from '../lib/constants';
import { useRouter } from 'next/router';
import { postLogin } from '../lib/api/user';
import { setCookie } from '../lib/utils/browserStorage';

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {},
  };
};

function Login() {
  const router = useRouter();
  const { code } = router.query;

  useEffect(() => {
    if (code) {
      const loginCall = async () => {
        try {
          const { accessToken, refreshToken } = await postLogin(
            code as string,
            process.env.NEXT_PUBLIC_LOGIN_TYPE as 'DEV' | 'PROD',
          );
          setCookie('accessToken', accessToken);
          setCookie('refreshToken', refreshToken);
          await router.replace('/');
        } catch (e) {
          console.error('로그인 실패');
        }
      };
      loginCall();
    }
  }, [router.query]);

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

export default Login;

Login.getLayout = function getLayout(page: ReactElement) {
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
