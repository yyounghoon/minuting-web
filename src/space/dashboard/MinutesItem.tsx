import React from 'react';

import { MinuteItemStyle } from './MinutesItem.styles';
import { Button, Modal } from 'antd';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';


type MinutesItemProps = {
  id: number;
  title: string;
};

function MinutesItem({id, title}: MinutesItemProps) {
  const router = useRouter();


  const getMinutes = (minutesId: number) => {
    router.push('/minutes/'+minutesId);
  };


  return (
    <div css={MinuteItemStyle} onClick={() => getMinutes(id)}>
      <MinuteItemText>{id}</MinuteItemText>
      <MinuteItemText>{title}</MinuteItemText>
    </div>
  );
}


const MinuteItemText = styled.p`
font-size: 15px;
margin-right:4rem;
`;

export default MinutesItem;
