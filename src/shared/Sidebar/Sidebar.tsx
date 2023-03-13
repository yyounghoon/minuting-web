import { SidebarStyles } from './Sidebar.styles';
import { Button, Modal } from 'antd';
import SidebarItem from './SidebarItem';
import styled from '@emotion/styled';
import { useGetMeInfo } from '../../query/userQuery';
import { useRouter } from 'next/router';
import JoinSpace from '../Modal/JoinSpace';
import useToggle from '../hooks/useToggle';

function Sidebar() {
  const { toggle, setToggle } = useToggle();
  const router = useRouter();
  const { data } = useGetMeInfo();

  const onModalOpen = () => {
    setToggle(true);
  };

  const onModalCancel = () => {
    setToggle(false);
  };

  const onCreateSpace = () => {
    onModalCancel();
    router.push('/space/createSpace');
  };

  if (!data) return null;

  const { name, company, memberType, spaceList, team } = data.value;

  return (
    <div css={SidebarStyles}>
      <Modal
        centered
        title="공개된 스페이스 참가"
        open={toggle}
        onCancel={onModalCancel}
        maskClosable={true}
        footer={null}
        className="public-space-modal"
      >
        <JoinSpace />
        <CreateSpace onClick={onCreateSpace}>스페이스 만들기 </CreateSpace>
      </Modal>
      <SidebarGroup>
        {spaceList.map((space) => (
          <SidebarItem key={space.id} spaceData={space} />
        ))}
      </SidebarGroup>
      <ButtonBlock>
        <Button type="primary" block onClick={onModalOpen}>
          스페이스 +
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
