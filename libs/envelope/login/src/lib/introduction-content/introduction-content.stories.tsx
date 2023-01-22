import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { IntroductionContent } from './introduction-content';

const Story: ComponentMeta<typeof IntroductionContent> = {
  component: IntroductionContent,
  title: 'Features / Introduction',
};
export default Story;

const Template: ComponentStory<typeof IntroductionContent> = (args) => (
  <IntroductionContent {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
