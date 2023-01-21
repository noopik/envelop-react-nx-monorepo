import styled from 'styled-components';
import FormLogin from './form-login/FormLogin';
import IntroductionContent from './introduction-content/introduction-content';
/* eslint-disable-next-line */
export interface EnvelopeLoginProps {}

const StyledEnvelopeLogin = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  background-color: white;
  .section {
    flex: 1;
  }
`;

export function EnvelopeLogin(props: EnvelopeLoginProps) {
  return (
    <StyledEnvelopeLogin>
      <div className="section">
        <IntroductionContent />
      </div>
      <div className="section">
        <FormLogin />
      </div>
    </StyledEnvelopeLogin>
  );
}

export default EnvelopeLogin;
