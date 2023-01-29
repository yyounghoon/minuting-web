import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import { css } from '@emotion/react';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <div css={container}>
      <div css={LayoutStyles}>
        <Header />
        <div css={mainBackground}>
          <main css={mainStyles}>
            <Sidebar />
            <div css={contentStyles}>{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Layout;

const container = css`
  height: 100%;
`;

const mainBackground = css`
  flex: 1;
  width: 100%;

  background: #f8f8f8;
`;

const LayoutStyles = css`
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const mainStyles = css`
  width: 100%;
  height: 100%;

  display: flex;

  min-width: 1180px;
  padding: 30px;
  margin: 0 auto;
`;

const contentStyles = css`
  width: 100%;
  height: 100%;
`;
