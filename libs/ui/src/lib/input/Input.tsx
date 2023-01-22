import styled from 'styled-components';
import { colors } from '../colors/colors';

/* eslint-disable-next-line */
export interface InputProps {
  label: string;
  id: string;
  onChange?: (value: any) => void;
  name: string;
  type: 'text' | 'password';
  onError?: boolean;
  errorMessage?: string;
}

const defaultProps: InputProps = {
  type: 'text',
  name: '',
  id: '',
  label: '',
};

export function Input({
  label,
  id,
  name,
  type,
  onChange,
  onError,
  errorMessage,
}: InputProps) {
  return (
    <StyledInput onError={onError}>
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} type={type} onChange={onChange} />
      {onError && <span>{errorMessage}</span>}
    </StyledInput>
  );
}

const StyledInput = styled.div.attrs((props: InputProps) => props)`
  position: relative;
  input {
    border: 1px solid #dfe5ec;
    border-radius: 5px;
    width: 100%;
    padding: 8px 14px;
    font: inherit;
    font-size: 1rem;
    &:focus {
      outline-color: ${colors.brand};
    }
  }
  label {
    position: absolute;
    background-color: white;
    top: -10px;
    left: 1rem;
    color: #6d7b90;
  }

  ${({ onError }) => {
    if (onError) {
      return `
        label {
          color: red;
        }
        input {
          border: 1px solid red;
        }
        span {
          margin: 8px 0 0 0;
          font-size: 12px;
          color: red;
        }
        
      `;
    }
  }}
`;

Input.defaultProps = defaultProps;

export default Input;
