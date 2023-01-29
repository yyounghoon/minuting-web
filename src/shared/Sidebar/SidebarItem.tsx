import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { palette } from '../../styles/palette';

type SidebarItemProps = {
  spaceId: number;
  spaceName: string;
};

function SidebarItem({ spaceId, spaceName }: SidebarItemProps) {
  const router = useRouter();
  const { spaceId: routerSpaceId } = router.query;
  const isSelected = spaceId === Number(routerSpaceId);

  const getSpace = (spaceId: number) => {
    router.push('/space/' + spaceId);
  };

  return (
    <div css={ItemStyle(isSelected)} onClick={() => getSpace(spaceId)}>
      {spaceName}
    </div>
  );
}

export default SidebarItem;

const ItemStyle = (isSelected: boolean) => css`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;

  padding: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  color: #8e98a4;
  font-size: 1.6rem;
  font-weight: 500;

  :hover {
    color: ${palette.black};
    font-weight: 700;
  }

  ${isSelected &&
  css`
    color: ${palette.black};
    font-weight: 700;
  `}
`;
