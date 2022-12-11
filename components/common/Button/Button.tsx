import { buttonStyles } from './Button.styles';

type ButtonProps = {
  children: string;
};

function Button({ children }: ButtonProps) {
  return <button css={buttonStyles}>{children}</button>;
}

export default Button;
