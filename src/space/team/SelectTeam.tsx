import styled from '@emotion/styled';
import { Tag, Tree, TreeDataNode, TreeProps } from 'antd';

const treeData: TreeDataNode[] = [
  {
    title: 'parent 1',
    key: '0-0',
    children: [
      {
        title: 'parent 1-0',
        key: '0-0-0',
        children: [
          {
            title: 'leaf',
            key: '0-0-0-0',
          },
          {
            title: 'leaf',
            key: '0-0-0-1',
          },
        ],
      },
      {
        title: 'parent 1-1',
        key: '0-0-1',
        children: [{ title: <span style={{ color: '#1890ff' }}>sss</span>, key: '0-0-1-0' }],
      },
    ],
  },
];

function SelectTeam() {
  const onSelect: TreeProps['onSelect'] = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  };

  const onCheck: TreeProps['onCheck'] = (checkedKeys, info) => {
    console.log('onCheck', checkedKeys, info);
  };

  const log = (e: React.MouseEvent<HTMLElement>) => {
    console.log(e);
  };

  return (
    <Block>
      <SelectedBlock>
        <Tag closable onClose={log}>
          Tag 2
        </Tag>
        <Tag closable onClose={log}>
          Tag 2
        </Tag>
        <Tag closable onClose={log}>
          Tag 2
        </Tag>
      </SelectedBlock>
      <TeamBlock>
        <Tree
          checkable
          defaultExpandedKeys={['0-0-0', '0-0-1']}
          defaultSelectedKeys={['0-0-0', '0-0-1']}
          defaultCheckedKeys={['0-0-0', '0-0-1']}
          onSelect={onSelect}
          onCheck={onCheck}
          treeData={treeData}
        />
      </TeamBlock>
    </Block>
  );
}

export default SelectTeam;

const Block = styled.div`
  width: 100%;

  display: flex;

  height: 500px;
`;

const SelectedBlock = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
  margin-right: 1rem;

  display: flex;
  flex-direction: column;
`;

const TeamBlock = styled.div`
  width: 50%;
  height: 100%;
  background: #fff;
`;
