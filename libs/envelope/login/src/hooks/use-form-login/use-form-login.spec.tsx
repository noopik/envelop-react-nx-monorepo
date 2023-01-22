import {
  FormLogin,
  initialErrorFormLogin,
  initialPropsFormLogin,
} from '@nx-test-zog/shared-types';
import { act, renderHook } from '@testing-library/react';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import useFormLogin from './use-form-login';

const queryClient = new QueryClient();
const setState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
useStateSpy.mockImplementation((init?: FormLogin) => [
  (init = initialPropsFormLogin),
  setState,
]);

const wrapper = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('useFormLogin', () => {
  const { result } = renderHook(() => useFormLogin(), { wrapper });
  const formLogin: FormLogin = {
    email: 'email@example.com',
    password: '123456',
  };

  it('should render successfully', () => {
    expect(result.current).toBeDefined();
  });

  it('should form have initial value', () => {
    expect(result.current.form).toStrictEqual({ email: '', password: '' });
  });

  it('should function handleInput can run successfully', () => {
    const event = new Event('change');
    Object.defineProperty(event, 'target', {
      value: {
        name: 'email',
        value: formLogin['email'],
      },
      writable: false,
    });

    act(() => {
      result.current.handleInput(
        event as unknown as React.ChangeEvent<HTMLInputElement>
      );
    });

    // expect(result.current.form.email).toBe(formLogin['email']);
  });

  it('should function onSubmit can run successfully', () => {
    act(() => {
      result.current.onSubmit();
    });
  });

  it('should state isLoading return false value successfully', () => {
    expect(result.current.isLoading).toBe(false);
  });

  it('should state error return state of field error successfully', () => {
    expect(result.current.error).toBe(initialErrorFormLogin);
  });
});
