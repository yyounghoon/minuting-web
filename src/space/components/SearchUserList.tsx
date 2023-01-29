import styled from '@emotion/styled';
import SearchUserItem from './SearchUserItem';
import { borderStyle } from '../../styles/common.styles';
import { TSearchUser } from '../../user/types';

type SelectUserListProps = {
  userList: TSearchUser[];
  setSelectedUserList: any;
  selectedUserList: TSearchUser[];
};

function SearchUserList({
  userList,
  setSelectedUserList,
  selectedUserList,
}: SelectUserListProps) {
  if (userList.length === 0) return null;

  // 여기서 이미 있는 유저를 제외 시킨 후, 전달
  const nonSelectedUserList = userList.filter((user) => {
    const isExist = selectedUserList.find(
      (selectedUser) => selectedUser.userId === user.userId,
    );
    return !isExist;
  });

  return (
    <Block>
      {nonSelectedUserList.map((user) => (
        <SearchUserItem
          key={user.userId}
          data={user}
          setSelectedUserList={setSelectedUserList}
          selectedUserList={selectedUserList}
        />
      ))}
    </Block>
  );
}

export default SearchUserList;

const Block = styled.div`
  position: absolute;
  top: 32px;

  min-width: 400px;
  height: 180px;
  overflow: auto;

  background: #fff;
  z-index: 99;
  ${borderStyle}
  border-radius: 0;
`;
