import styled from 'styled-components';

/* eslint-disable-next-line */
export interface EnvelopeRegisterProps {}

const StyledEnvelopeRegister = styled.div`
  color: pink;
`;

export function EnvelopeRegister(props: EnvelopeRegisterProps) {
  return (
    <StyledEnvelopeRegister>
      <h1>Welcome to EnvelopeRegister!</h1>
    </StyledEnvelopeRegister>
  );
}

export default EnvelopeRegister;
