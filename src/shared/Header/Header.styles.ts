import { css } from '@emotion/react';
import { palette } from '../../styles/palette';

export const headerStyles = css`
  position: sticky;
  top: 0;

  max-width: 1440px;
  min-width: 1180px;
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: center;

  padding: 0 30px;
  margin: 0 auto;
  background-color: ${palette.white};
`;

export const logoStyle = css`
  width: 233px;
`;

export const menuStyle = css`
  flex: 1;
`;

export const searchStyle = css``;
