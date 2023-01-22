import { useCallback, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import {
  FormLogin,
  initialErrorFormLogin,
  initialPropsFormLogin,
  LOGIN_KEY,
  onErrorFormLogin,
} from '@nx-test-zog/shared-types';
// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseFormLogin {
  form: FormLogin;
  onSubmit: () => void;
  handleInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  error: onErrorFormLogin;
}

const loginUser = (user: FormLogin): any => {
  console.log(LOGIN_KEY, user);
  window.alert(`Wellcome to the club, ${user.email}!`);
  // axios.post<FormLogin>('http://localhost:4300/api/login', user);
};

export function useFormLogin(): UseFormLogin {
  const queryClient = useQueryClient();
  const [error, setError] = useState<onErrorFormLogin>(initialErrorFormLogin);

  const [form, setForm] = useState<FormLogin>(initialPropsFormLogin);
  const { isLoading, mutate } = useMutation(loginUser, {
    onSuccess: () => {
      queryClient.invalidateQueries(LOGIN_KEY);
    },
  });

  const handleInput = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prevState) => ({
        ...prevState,
        [event.target.name]: event.target.value,
      }));
    },
    []
  );

  const onSubmit = () => {
    if (!form?.email || !form.password) {
      return setError((prevState) => ({
        ...prevState,
        email: !form?.email ? true : false,
        password: !form?.password ? true : false,
      }));
    }
    setError(initialErrorFormLogin);

    mutate(form);
  };

  return { form, onSubmit, handleInput, isLoading, error };
}

export default useFormLogin;
