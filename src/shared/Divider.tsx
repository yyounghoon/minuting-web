import { css } from '@emotion/react';

function Divider() {
  return <div css={dividerStyle} />;
}

export default Divider;

const dividerStyle = css`
  width: 100%;
  height: 1px;
  background: #f1f4f9;
`;
