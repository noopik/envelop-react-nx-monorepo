import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Link } from './Link';

const Story: ComponentMeta<typeof Link> = {
  component: Link,
  title: 'Design System / UI / Link',
};
export default Story;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'Link',
  href: 'https://www.linkedin.com/in/novidwicahya/',
};
