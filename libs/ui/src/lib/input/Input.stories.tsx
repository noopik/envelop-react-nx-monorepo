import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

const Story: ComponentMeta<typeof Input> = {
  component: Input,
  title: 'Design System / UI / Input',
};
export default Story;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Text = Template.bind({});
Text.args = {
  label: 'Label',
  id: 'label',
  name: 'label',
  type: 'text',
};

export const TextError = Template.bind({});
TextError.args = {
  label: 'Label',
  id: 'label',
  name: 'label',
  type: 'text',
  error: true,
  errorMessage: 'This is error message',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  id: 'password',
  name: 'password',
  type: 'password',
};
