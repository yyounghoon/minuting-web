import { SidebarStyles } from './Sidebar.styles';
import { Button, Modal } from 'antd';
import SidebarItem from './SidebarItem';
import styled from '@emotion/styled';
import { useState } from 'react';
import { useGetMeInfo } from '../../../lib/query/userQuery';
import { useRouter } from 'next/router';
import JoinSpace from '../Modal/JoinSpace';

function Sidebar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();
  const { data } = useGetMeInfo();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleSpace = () => {
    handleCancel();
    router.push('/createSpace');
  };

  if (!data) return null;

  const { name, company, memberType, spaceList, team } = data.value;

  return (
    <div css={SidebarStyles}>
      <Modal
        centered
        title="공개된 스페이스 참가"
        open={isModalOpen}
        onCancel={handleCancel}
        maskClosable={true}
        footer={null}
        className="public-space-modal"
      >
        <JoinSpace />
        <CreateSpace onClick={handleSpace}>새 스페이스 생성 +</CreateSpace>
      </Modal>
      <SidebarGroup>
        {spaceList.map((space) => (
          <SidebarItem
            key={space.id}
            spaceId={space.id}
            spaceName={space.name}
          />
        ))}
      </SidebarGroup>
      <ButtonBlock>
        <Button type="primary" block onClick={showModal}>
          새 그룹 생성
        </Button>
      </ButtonBlock>
    </div>
  );
}

export default Sidebar;

const SidebarGroup = styled.div`
  overflow: auto;
`;

const ButtonBlock = styled.div``;

const CreateSpace = styled.button`
  width: 100%;
  height: 30px;

  margin-top: 20px;
  background: #1a1a1c;
  color: #fff;
`;
