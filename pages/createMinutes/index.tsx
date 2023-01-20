import styled from '@emotion/styled';
import React, { useState } from 'react';
import MinuteEditor from '../../components/minutes/MinuteEditor';
import MinuteTitle from '../../components/minutes/MinuteTitle';
import { postMinute } from '../../lib/api/minutes';

function CreateMinutes() {
  const [title, setTitle] = useState(' ');
  const [contents, setContents] = useState(' ');

  const handleSubmit = () => {
    postMinute({
      title,
      contents,
    });
  }
  
  return (
    <>
      <MinuteTitle title={title} setTitle={setTitle} />
      <MinuteEditor contents={contents} setContents={setContents}  />
      <Submit type='button' onClick={handleSubmit}>생성</Submit>
    </>
  )
}

export default CreateMinutes;

const Submit = styled.button`
  text-align: center;
  width: 100px;
  height: 60px;
  line-height: 60px;
  color: white;
  background-color: skyblue;
  margin-top: 20px;
  float: right;
`;