import styled from '@emotion/styled';
import { Divider, Form, Tag } from 'antd';
import React, { useState } from 'react';
import { useGetTags } from '../../../lib/query/tags';
import { TagType } from '../../../types/tags';

function SelectTag() {
  const [selectedTag, setSelectedTag] = useState<TagType[]>([]);
  const { data: tagData } = useGetTags();
  const form = Form.useFormInstance();

  const isTagSelected = (tag: TagType) => {
    return selectedTag.some((item) => item.id === tag.id);
  };

  const onAddTag = (tag: TagType) => {
    if (isTagSelected(tag)) {
      console.log('선택된 태그입니다');
      return;
    }

    setSelectedTag((prev) => [...prev, tag]);
    form.setFieldsValue({ tags: [...selectedTag, tag] });
  };

  const onDeleteTag = (tag: TagType) => {
    console.log('Tag 삭제');
    const newSelectedTag = selectedTag.filter((item) => item.id !== tag.id);
    setSelectedTag(newSelectedTag);
    form.setFieldsValue({ tags: [...newSelectedTag] });
  };

  return (
    <Block>
      <SelectedBlock>
        {selectedTag.map((tag) => (
          <Tag
            key={`selected ${tag.id}`}
            color={`#${tag.color}`}
            closable={true}
            onClose={() => onDeleteTag(tag)}
            style={{ cursor: 'default' }}
          >
            {tag.name}
          </Tag>
        ))}
      </SelectedBlock>
      <CustomDivider />
      <TagBlock>
        {tagData?.list.map((tag) => (
          <Tag
            key={tag.id}
            color={`#${tag.color}`}
            onClick={() => onAddTag(tag)}
            style={{ cursor: 'pointer' }}
          >
            {tag.name}
          </Tag>
        ))}
      </TagBlock>
    </Block>
  );
}

export default SelectTag;

const Block = styled.div`
  background: #fff;
`;

const SelectedBlock = styled.div`
  display: flex;
  align-items: center;

  min-height: 50px;
  padding: 1rem;
`;

const TagBlock = styled.div`
  padding: 1rem;
`;

const CustomDivider = styled(Divider)`
  margin: 0;
`;
