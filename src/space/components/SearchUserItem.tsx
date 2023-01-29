import React from 'react';
import styled from '@emotion/styled';
import { palette } from '../../styles/palette';
import { TSearchUser } from '../../user/types';

type SelectUserItemProps = {
  data: TSearchUser;
  setSelectedUserList: any;
  selectedUserList: any;
};

function SearchUserItem({ data, setSelectedUserList }: SelectUserItemProps) {
  const onClickUser = () => {
    setSelectedUserList((prev: any) => [...prev, data]);
  };

  const { userId, name, email } = data;
  return (
    <Block onMouseDown={onClickUser}>
      <span className="name" key={`${userId}-name`}>
        {name}
      </span>
      <span className="email" key={`${userId}-email`}>
        ({email})
      </span>
    </Block>
  );
}

export default SearchUserItem;

const Block = styled.div`
  font-size: 14px;
  padding: 8px;

  :hover {
    background: ${palette.grey};
  }

  .name {
    font-weight: 500;
    margin-right: 4px;
  }

  .email {
    color: #5f6368;
  }
`;
