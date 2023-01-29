import styled from '@emotion/styled';
import React, { useEffect } from 'react';
import { TSearchUser } from '../../user/types';
import SelectedUserItem from './SelectedUserItem';

type SelectedUserListProps = {
  selectedUserList: TSearchUser[];
  setValue: any;
};

function SelectedUserList({
  selectedUserList,
  setValue,
}: SelectedUserListProps) {
  useEffect(() => {
    setValue('permissionList', selectedUserList);
  }, [selectedUserList]);

  return (
    <Block>
      {selectedUserList.map((selectedUser) => (
        <SelectedUserItem
          key={selectedUser.userId}
          selectedUser={selectedUser}
        />
      ))}
    </Block>
  );
}

export default SelectedUserList;

const Block = styled.div`
  min-height: 60px;
  max-height: 168px;

  padding: 12px;
  overflow: auto;
`;
