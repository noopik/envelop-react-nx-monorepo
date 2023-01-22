import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Input } from './Input';

const Story: ComponentMeta<typeof Input> = {
  component: Input,
  title: 'Input',
};
export default Story;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
