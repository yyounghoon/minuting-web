import React from 'react';
import styled from '@emotion/styled';

interface IProceedTitle{
  title: string;
  setTitle: (_: string) => void;
}

function MinuteTitle({title, setTitle}: IProceedTitle) {
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  }

  return(
    <Title value={title} onChange={handleTitle} />
  ) 
        
}

export default MinuteTitle;

const Title = styled.input`
  border: none;
  width: 100%;
  padding: 20px;
  font-size: 15px;
`;