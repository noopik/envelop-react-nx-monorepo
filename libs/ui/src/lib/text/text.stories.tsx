import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './text';

const Story: ComponentMeta<typeof Text> = {
  component: Text,
  title: 'Text',
};
export default Story;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
