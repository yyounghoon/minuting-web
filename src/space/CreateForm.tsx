import React from 'react';
import { Button, Form, Input, Radio } from 'antd';
import SelectTag from '../shared/Tags/SelectTag';
import { useCreateSpace } from '../query/space';
import { Permission } from '../types/space';
import { TagType } from '../types/tags';
import { useRouter } from 'next/router';

type CreateFormType = {
  description: string;
  icon: string;
  isPublic: boolean;
  name: string;
  permissions: Permission[];
  tags: TagType[];
};

function CreateForm() {
  const [form] = Form.useForm();
  const { mutate } = useCreateSpace();
  const router = useRouter();

  // TODO: 팀권한, 개인 권한 추가
  const onFinish = (formValues: CreateFormType) => {
    const { name, description, isPublic, tags } = formValues;
    mutate(
      {
        name,
        description,
        isPublic,
        icon: '',
        permissions: [
          {
            memberId: '55a03586-5f14-11ed-8e54-6cd5e80d8470',
            type: 'EDIT',
          },
        ],
        tagIdList: tags.map((tag) => tag.id),
      },
      {
        onSuccess: () => {
          router.push('/');
        },
      },
    );
  };

  return (
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
      initialValues={{
        isPublic: true,
      }}
      scrollToFirstError
    >
      <Form.Item
        name="name"
        label="스페이스명"
        rules={[
          {
            required: true,
            message: '스페이스명을 입력하세요',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="tags"
        label="스페이스 목적"
        rules={[
          {
            required: true,
            message: '',
          },
        ]}
      >
        <SelectTag />
      </Form.Item>

      <Form.Item name="isPublic" label="스페이스 공개범위">
        <Radio.Group>
          <Radio value={true}>Public</Radio>
          <Radio value={false}>Private</Radio>
        </Radio.Group>
      </Form.Item>

      {/*<Form.Item name="team" label="팀 권한">*/}
      {/*  <SelectTeam />*/}
      {/*</Form.Item>*/}

      {/*<Form.Item name="individuals" label="개인 권한">*/}
      {/*  <div>개인 권한</div>*/}
      {/*</Form.Item>*/}

      <Form.Item
        name="description"
        label="스페이스 설명"
        rules={[
          {
            required: true,
            message: '스페이스 설명을 입력하세요',
          },
        ]}
      >
        <Input.TextArea maxLength={100} size={'large'} />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          sm: { span: 16, offset: 8 },
        }}
      >
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
}

export default CreateForm;
