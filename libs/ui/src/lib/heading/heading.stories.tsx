import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Heading } from './heading';

const Story: ComponentMeta<typeof Heading> = {
  component: Heading,
  title: 'Design System / UI / Heading',
};
export default Story;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  children: 'Introducing our 2020 report',
};

Primary.parameters = {
  backgrounds: { default: 'envelope' },
};
