import styled from '@emotion/styled';
import SelectTag from '../../shared/Tags/SelectTag';
import { Input, Radio } from 'antd';
import React from 'react';
import { borderStyle } from '../../styles/common.styles';
import Button from '../../shared/Button/Button';
import { useCreateSpace } from '../remotes/createSpace';
import { Controller, useForm } from 'react-hook-form';
import SelectUser from './SelectUser';
import { useRouter } from 'next/router';

function CreateSpaceForm() {
  const router = useRouter();
  const { mutate } = useCreateSpace();

  const { register, handleSubmit, control, setValue } = useForm({
    defaultValues: {
      name: '',
      isPublic: true,
      tagIdList: [],
      permissionList: [],
      description: '',
    },
  });

  const onClickCreateButton = (values: any) => {
    mutate(
      {
        ...values,
        icon: '',
        tagIdList: values.tagIdList.map((tag: any) => tag.id),
        permissionList: values.permissionList.map((user: any) => ({
          memberId: user.userId,
          type: 'EDIT',
        })),
      },
      {
        onSuccess: () => {
          router.push('/');
        },
      },
    );
  };

  const onError = (values: any) => {
    console.log('에러');
    console.log('values', values);
  };

  return (
    <Form onSubmit={handleSubmit(onClickCreateButton, onError)}>
      <SectionTitle>스페이스 생성</SectionTitle>
      <Row>
        <StyledLabel>스페이스명</StyledLabel>
        <Controller
          name="name"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </Row>
      <Row>
        <StyledLabel>스페이스 목적</StyledLabel>
        <SelectTag setValue={setValue} />
      </Row>
      <Row>
        <StyledLabel>스페이스 공개범위</StyledLabel>
        <RadioBlock>
          <Controller
            name="isPublic"
            control={control}
            render={({ field }) => (
              <Radio.Group {...field}>
                <Radio value={true}>Public</Radio>
                <Radio value={false}>Private</Radio>
              </Radio.Group>
            )}
          />
        </RadioBlock>
      </Row>
      <Row>
        <StyledLabel>개인 권한</StyledLabel>
        <SelectUserBlock>
          <SelectUser setValue={setValue} />
        </SelectUserBlock>
      </Row>
      <Row>
        <StyledLabel>스페이스 설명</StyledLabel>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Input.TextArea {...field} maxLength={100} size={'large'} />
          )}
        />
      </Row>

      <div>
        <Button>취소</Button>
        <Button reverse>생성</Button>
      </div>
    </Form>
  );
}

export default CreateSpaceForm;

const Form = styled.form`
  height: 100%;
  background: #fff;
  padding: 24px;
  ${borderStyle}
`;

const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;

  margin-bottom: 40px;
`;

const Row = styled.div`
  margin-bottom: 24px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  background: #f1f4f9;
  ${borderStyle}
`;

const StyledLabel = styled.label`
  display: block;

  font-weight: 500;
  font-size: 16px;
  margin-bottom: 10px;
`;

const RadioBlock = styled.div`
  padding: 10px;
  ${borderStyle};
`;

const SelectTeamBlock = styled.div`
  display: flex;
`;

const SelectUserBlock = styled.div`
  ${borderStyle}
  .user-search {
    padding: 10px;
  }
`;

const SelectedUserBlock = styled.div`
  min-height: 60px;
  padding: 12px;
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  resize: none;
  overflow: auto;
  min-height: 200px;

  font-size: 14px;
  padding: 8px 16px;

  :focus {
    outline: none;
  }

  ${borderStyle}
`;
