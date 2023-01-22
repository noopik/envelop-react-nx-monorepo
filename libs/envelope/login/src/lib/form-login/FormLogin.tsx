import { Button, Card, Heading, Input, Link, Text } from '@nx-test-zog/ui';
import styled from 'styled-components';
import useFormLogin from '../../hooks/use-form-login/use-form-login';

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
  const { error, handleInput, onSubmit, isLoading } = useFormLogin();
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
            <Input
              label="Email"
              id="email"
              name="email"
              type="text"
              onChange={handleInput}
              onError={error['email']}
              errorMessage="Email is required"
            />
          </div>
          <div className="form-group">
            <Input
              label="Password"
              id="password"
              name="password"
              type="password"
              onChange={handleInput}
              onError={error['password']}
              errorMessage="Password is required"
            />
          </div>
          <Link href="/register">Forgot password?</Link>
          <div className="action-wrapper">
            <div className="create-new-account-wrapper">
              <Text color="black" fontSize={12}>
                New user?
              </Text>
              <Link href="/register">Create account</Link>
            </div>
            <div>
              <Button
                size="small"
                colorScheme="blue"
                variant="solid"
                onClick={onSubmit}
              >
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
