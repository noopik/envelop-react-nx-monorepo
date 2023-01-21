import styled from 'styled-components';
import IntroductionContent from './introduction-content/introduction-content';
/* eslint-disable-next-line */
export interface EnvelopeLoginProps {}

const StyledEnvelopeLogin = styled.div`
  display: flex;
  height: 100vh;
  margin: 0;
  background-color: white;
  .content {
    flex: 1;
  }
`;

export function EnvelopeLogin(props: EnvelopeLoginProps) {
  return (
    <StyledEnvelopeLogin>
      <div className="content">
        <IntroductionContent />
      </div>
      <div className="content"></div>
    </StyledEnvelopeLogin>
  );
}

export default EnvelopeLogin;
