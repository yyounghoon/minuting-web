import type { AppProps } from 'next/app';
import 'antd/dist/reset.css';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { QueryClientProvider } from 'react-query';
import { Global } from '@emotion/react';
import Layout from '../shared/Layout';
import { GlobalStyles } from '../styles/globalStyles';
import { queryClient } from '../api-config/queryClient';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout
    ? (page: ReactElement) => page
    : (page: ReactElement) => <Layout>{page}</Layout>;

  return (
    <>
      <Head>
        <title>미뉴팅</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <Global styles={GlobalStyles} />
        {getLayout(<Component {...pageProps} />)}
      </QueryClientProvider>
    </>
  );
}
