import styled from 'styled-components';
import { colors } from '../colors/colors';

/* eslint-disable-next-line */
export interface InputProps {
  label: string;
  id: string;
  onChange?: (value: any) => void;
}

const StyledInput = styled.div`
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
`;

export function Input({ label, id, onChange }: InputProps) {
  return (
    <StyledInput>
      <label>{label}</label>
      <input id={id} onChange={onChange} />
    </StyledInput>
  );
}

export default Input;
