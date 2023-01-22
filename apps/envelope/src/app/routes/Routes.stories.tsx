import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Routes } from './Routes';

const Story: ComponentMeta<typeof Routes> = {
  component: Routes,
  title: 'Routes',
};
export default Story;

const Template: ComponentStory<typeof Routes> = (args) => <Routes {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
