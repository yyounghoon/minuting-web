import { ChangeEvent, useState } from 'react';
import styled from '@emotion/styled';

export interface Props {
  className?: string;
  placeholder?: string;
  onChange: ({ value }: { value: string }) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  onKeyDown?: () => void;
  value?: string;
  disabled?: boolean;
}

function TextInput({
  className,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  value = '',
  disabled = false,
}: Props) {
  const [text, setText] = useState(value);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setText(value);
    onChange({ value });
  };

  return (
    <StyledInput
      type="text"
      value={text}
      className={className}
      placeholder={placeholder}
      onChange={handleChange}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      disabled={disabled}
    />
  );
}

export default TextInput;

const StyledInput = styled.input`
  width: 100%;

  font-weight: 400;
  font-size: 16px;
  border: none;
  padding: 8px 16px;

  &::placeholder {
    color: #d2d6da;
  }
`;
