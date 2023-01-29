import styled from '@emotion/styled';
import { Divider, Tag } from 'antd';
import React, { useState } from 'react';
import { useGetTags } from '../../query/tags';
import { TagType } from '../../types/tags';

function SelectTag({ setValue }: { setValue: any }) {
  const [selectedTag, setSelectedTag] = useState<TagType[]>([]);
  const { data: tagData } = useGetTags();

  const isTagSelected = (tag: TagType) => {
    return selectedTag.some((item) => item.id === tag.id);
  };

  const onAddTag = (tag: TagType) => {
    if (isTagSelected(tag)) {
      return;
    }
    setValue('tagIdList', [...selectedTag, tag]);
    setSelectedTag((prev) => [...prev, tag]);
  };

  const onDeleteTag = (tag: TagType) => {
    const newSelectedTag = selectedTag.filter((item) => item.id !== tag.id);

    setValue('tagIdList', [...selectedTag, tag]);
    setSelectedTag(newSelectedTag);
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
            style={{
              cursor: 'pointer',
              minWidth: '120px',
              marginBottom: '10px',
            }}
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
  border: 1px solid #e9ecf0;
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
