import { Button, Card, Heading, Input, Text } from '@nx-test-zog/ui';
import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FormLoginProps {}

const StyledFormLogin = styled.div`
  height: 100%;
  display: grid;
  place-items: center;
  .content {
    width: 80%;
    .heading-wrapper {
      margin-bottom: 2rem;
    }
    .form-group {
      margin-bottom: 1rem;
    }
    .action-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .create-new-account-wrapper {
        display: flex;
        gap: 2px;
      }
    }
  }
`;

export function FormLogin(props: FormLoginProps) {
  return (
    <StyledFormLogin>
      <div className="content">
        <div className="heading-wrapper">
          <Heading color="brand">Welcome back</Heading>
          <Text color="secondary-brand" fontWeight="semibold" fontSize={18}>
            Sign in to continue
          </Text>
        </div>
        <Card>
          <div className="form-group">
            <Input label="Email" id="email" />
          </div>
          <div className="form-group">
            <Input label="Password" id="email" />
          </div>
          <Text color="brand" fontSize={12}>
            Forgot password?
          </Text>
          <div className="action-wrapper">
            <div className="create-new-account-wrapper">
              <Text color="black" fontSize={12}>
                New user?
              </Text>
              <Text color="brand" fontSize={12}>
                Create account
              </Text>
            </div>
            <div>
              <Button size="small" colorScheme="blue" variant="solid">
                Sign in
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </StyledFormLogin>
  );
}

export default FormLogin;
