import { css } from '@emotion/react';

type SidebarItemProps = {
  spaceName: string;
};

function SidebarItem({ spaceName }: SidebarItemProps) {
  return (
    <div css={ItemStyle}>
      <p>{spaceName}</p>
    </div>
  );
}

export default SidebarItem;

const ItemStyle = css`
  width: 100%;
  height: 5rem;

  display: flex;
  align-items: center;

  padding: 1rem;
  border-radius: 0.5rem;

  p {
    font-size: 1.6rem;
    font-weight: 600;
  }

  &:hover {
    color: #fff;
    background-color: #1755e7;
  }
`;
