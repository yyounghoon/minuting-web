import Link from 'next/link';
import { ReactElement } from 'react';
import { Button } from 'antd';
import styled from '@emotion/styled';

function NotFound() {
  return (
    <Layout404>
      <Label404>404</Label404>
      <Title>요청하신 페이지를 찾을 수 없습니다!</Title>
      <Description>
        방문하시려는 페이지의 주소가 잘못 입력되었거나, 삭제되어 사용하실 수
        없습니다. 입력하신 주소가 정확한지 다시 한번 확인해 주세요
      </Description>
      <HomeButton>
        <Link href="/">홈으로 이동</Link>
      </HomeButton>
    </Layout404>
  );
}

export default NotFound;

NotFound.getLayout = function getLayout(page: ReactElement) {
  return { page };
};

const Layout404 = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Label404 = styled.h1`
  font-size: 10rem;
  margin-bottom: 1rem;
`;

const Title = styled.p`
  font-size: 2.4rem;
`;

const Description = styled.p`
  font-size: 1.5rem;
  margin-bottom: 4rem;
`;

const HomeButton = styled(Button)`
  width: 20rem;
  height: 5rem;
  background-color: #000;
  color: #fff;
`;
