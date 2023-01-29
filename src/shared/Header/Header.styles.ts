import { css } from '@emotion/react';
import { palette } from '../../styles/palette';
import { borderStyle } from '../../styles/common.styles';

export const headerStyles = css`
  position: sticky;
  top: 0;

  min-width: 1180px;
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;

  padding: 0 30px;
  background-color: ${palette.white};
  ${borderStyle}
`;

export const logoStyle = css`
  width: 233px;
`;

export const menuStyle = css`
  flex: 1;
`;

export const searchStyle = css``;
