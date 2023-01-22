import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './button';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Design System / UI / Button',
};
export default Story;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  colorScheme: 'blue',
  children: 'Primary',
  size: 'small',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'outlined',
  children: 'Secondary',
  size: 'medium',
};
Secondary.parameters = {
  backgrounds: { default: 'envelope' },
};
