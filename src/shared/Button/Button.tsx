import { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  reverse?: boolean;
}

function Button({ children, reverse, ...rest }: ButtonProps) {
  return (
    <button css={buttonStyles(reverse)} {...rest}>
      {children}
    </button>
  );
}

export default Button;

const buttonStyles = (reverse?: boolean) => css`
  min-width: 84px;
  min-height: 20px;

  padding: 10px 16px;
  font-weight: 500;
  font-size: 14px;

  border: 1px solid black;
  border-radius: 8px;

  ${reverse &&
  css`
    background: black;
    color: white;
  `}
`;
