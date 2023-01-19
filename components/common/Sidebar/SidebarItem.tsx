import { css } from '@emotion/react';
import { useRouter } from 'next/router';

type SidebarItemProps = {
  spaceId: number;
  spaceName: string;
};


function SidebarItem({ spaceId, spaceName }: SidebarItemProps) {
  const router = useRouter();


  const getSpace = (spaceId: number) => {
    router.push('/space/'+spaceId);
  };

  return (
    <div 
      css={ItemStyle} 
      onClick={() => getSpace(spaceId)}>
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
