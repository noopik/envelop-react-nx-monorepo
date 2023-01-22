export * from './lib/shared-types';
export * from './lib/react-query-key';

export interface FormLogin {
  email: string;
  password: string;
}

export const initialPropsFormLogin = {
  email: '',
  password: '',
};

export const initialErrorFormLogin = {
  email: false,
  password: false,
};

export interface onErrorFormLogin {
  email: boolean;
  password: boolean;
}
