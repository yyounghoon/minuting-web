import type { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/globalStyles';
import 'antd/dist/reset.css';
import { Layout } from '../components/layout';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Global } from '@emotion/react';

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

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
      mutations: {
        retry: false,
      },
    },
  });

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
