import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './heading';

const Story: ComponentMeta<typeof Heading> = {
  component: Heading,
  title: 'Heading',
};
export default Story;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
