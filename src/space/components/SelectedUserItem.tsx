import styled from '@emotion/styled';
import { palette } from '../../styles/palette';
import { TSearchUser } from '../../user/types';
import { borderStyle } from '../../styles/common.styles';

type SelectedUserItemProps = {
  selectedUser: TSearchUser;
};

function SelectedUserItem({ selectedUser }: SelectedUserItemProps) {
  const { name, email } = selectedUser;
  return (
    <Block>
      <p>{name}</p>
    </Block>
  );
}

export default SelectedUserItem;

const Block = styled.div`
  font-size: 14px;
  padding: 8px;

  margin-bottom: 8px;

  :hover {
    background: ${palette.grey};
  }

  ${borderStyle}
`;
