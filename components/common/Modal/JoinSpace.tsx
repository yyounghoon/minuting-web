import SpaceItem from './SpaceItem';
import { usePublicSpaces } from '../../../lib/query/space';
import styled from '@emotion/styled';

function JoinSpace() {
  const { data } = usePublicSpaces();

  if (!data) return <div>공개된 스페이스가 없습니다</div>;

  return (
    <>
      <Block>
        {data.list.map((space) => (
          <SpaceItem spaceId={space.id} spaceName={space.name} />
        ))}
      </Block>
    </>
  );
}

export default JoinSpace;

const Block = styled.div`
  height: 500px;
  overflow: auto;
`;
