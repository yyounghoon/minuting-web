import styled from '@emotion/styled';
import React, { useState } from 'react';
import { Form, Radio } from 'antd';
import MinuteTitle from '../../minutes/MinuteTitle';
import { postMinute } from '../../api/minutes';
import { useGetMeInfo } from '../../query/userQuery';
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';

const MinuteEditor = dynamic(() => import('../../minutes/MinuteEditor'), {
  ssr: false,
});

type CreateFormType = {
  spaceId: number;
};

function CreateMinutes() {
  const [title, setTitle] = useState(' ');
  const [contents, setContents] = useState(' ');

  const { data } = useGetMeInfo();
  const [form] = Form.useForm();
  const router = useRouter();

  if (!data) return null;
  const { name, company, memberType, spaceList, team } = data.value;

  const onFinish = (formValues: CreateFormType) => {
    const { spaceId } = formValues;
    postMinute({
      title,
      contents,
      spaceId,
    })
      .then(function (resolve) {
        router.push('/minutes/' + resolve.value.id);
      })
      .catch(function (err) {
        console.error(err);
      });
  };

  return (
    <>
      <Form
        labelCol={{
          sm: { span: 8 },
        }}
        wrapperCol={{
          sm: { span: 16 },
        }}
        form={form}
        name="register"
        onFinish={onFinish}
      >
        <Form.Item name="spaceId" label="게시할 스페이스">
          <Radio.Group>
            {spaceList.map((space) => (
              <Radio key={space.id} value={space.id}>
                {space.name}
              </Radio>
            ))}
          </Radio.Group>
        </Form.Item>
        <MinuteTitle title={title} setTitle={setTitle} />
        <MinuteEditor contents={contents} setContents={setContents} />
        <Submit>생성</Submit>
      </Form>
    </>
  );
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
