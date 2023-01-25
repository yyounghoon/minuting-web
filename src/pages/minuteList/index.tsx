import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const tmp = [
  {
    id: 1,
    title: '테스트중입니다. 1',
    contents: '',
  },
  {
    id: 2,
    title: '테스트중입니다. 2',
    contents: '',
  },
  {
    id: 3,
    title: '테스트중입니다. 3',
    contents: '',
  },
  {
    id: 4,
    title: '테스트중입니다. 4',
    contents: '',
  },
  {
    id: 5,
    title: '테스트중입니다. 5',
    contents: '',
  },
]

function CreateMinutes() {
  const handleClick = (id: number) => {
    console.log('상세 페이지로 이동하기');
  };
  
  return (
    <Container>
      <List>
          {tmp.map((item) => 
            <MinuteContainer key={item.id}>
                <MinuteTitle>
                  <Link href={`/minuteList/${item.id}`}>{item.title}</Link>
                </MinuteTitle>
              <div>
                <DelBtn>삭제</DelBtn>
                <UpdBtn>수정</UpdBtn>
              </div>
            </MinuteContainer>
          )}
      </List>
    </Container>
  )
}

export default CreateMinutes;

const Container = styled.div``;

const List = styled.dl`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;  
`;

const MinuteContainer = styled.div`
    width: 90%;
    height: 50px;
    border: 0.6px solid black;
    border-radius: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    padding: 0 20px;
    margin-bottom: 15px;
`;

const MinuteTitle = styled.dt`
  font-size: 20px;
  width: 50%;
  cursor: pointer;
`;

const DelBtn = styled.button`
  width: 60px;
  height: 30px;
  background-color: tomato;
  color: white;
  font-size: 17px;
  margin-right: 10px;
`;

const UpdBtn = styled.button`
  width: 60px;  
  height: 30px;
  background-color: orange;
  color: white;
  font-size: 17px;
`;