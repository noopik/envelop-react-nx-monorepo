import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './Card';

const Story: ComponentMeta<typeof Card> = {
  component: Card,
  title: 'Design System / UI / Card',
};
export default Story;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Our card component',
};
