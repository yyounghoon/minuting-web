import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import { palette } from '../../styles/palette';
import { Space } from '../../types';
import useToggle from '../hooks/useToggle';

type SidebarItemProps = {
  spaceData: Space;
};

function SidebarItem({ spaceData }: SidebarItemProps) {
  const { id: spaceId, name: spaceName, boardList } = spaceData;
  const router = useRouter();
  const { spaceId: routerSpaceId } = useRouter().query;
  const { toggle, onToggle } = useToggle();
  const isSelected = spaceId === Number(routerSpaceId);

  const goToMainSpace = () => {
    router.push(`/space/${spaceId}`);
    onToggle();
  };

  const goToBoard = (boardId: number) => {
    router.push(`/space/${spaceId}/board/${boardId}`);
  };

  return (
    <>
      <div css={ItemStyle(isSelected)} onClick={goToMainSpace}>
        {spaceName}
      </div>
      {toggle &&
        boardList.map((board) => {
          const { id: boardId, name: boardName } = board;
          return (
            <div
              key={boardId}
              css={css`
                padding: 2rem;
                font-size: 1.4rem;
                background: ${palette.grey};
                cursor: pointer;
              `}
              onClick={() => goToBoard(boardId)}
            >
              {boardName}
            </div>
          );
        })}
    </>
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
