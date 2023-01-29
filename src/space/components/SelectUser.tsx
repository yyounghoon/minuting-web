import styled from '@emotion/styled';
import { Input } from 'antd';
import { useSearchUser } from '../../user/remotes/getUser';
import React, { useState } from 'react';
import SearchUserList from './SearchUserList';
import SelectedUserList from './SelectedUserList';
import { TSearchUser } from '../../user/types';

type SelectUserProps = {
  setValue: any;
};

function SelectUser({ setValue }: SelectUserProps) {
  const [isSearching, setIsSearching] = useState(false);
  const [selectedUserList, setSelectedUserList] = useState<TSearchUser[]>([]);
  const { mutate, data } = useSearchUser();

  const onSearch = (name: string) => {
    mutate(name);
  };

  const onBlurInput = () => {
    setIsSearching(false);
  };

  const onFocusInput = () => {
    setIsSearching(true);
  };

  return (
    <Block>
      <Input.Search
        placeholder="사용자 검색"
        onFocus={onFocusInput}
        onBlur={onBlurInput}
        onChange={(e) => {
          onSearch(e.target.value);
        }}
        onSearch={(value) => {
          onSearch(value);
        }}
        enterButton
      />
      {isSearching && (
        <SearchUserList
          userList={data?.list || []}
          selectedUserList={selectedUserList}
          setSelectedUserList={setSelectedUserList}
        />
      )}
      <SelectedUserList
        selectedUserList={selectedUserList}
        setValue={setValue}
      />
    </Block>
  );
}

export default SelectUser;

const Block = styled.div`
  position: relative;

  background: #fff;
  height: 200px;
`;
