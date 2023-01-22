import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { Text } from './text';

const Story: ComponentMeta<typeof Text> = {
  component: Text,
  title: 'Design System / UI / Text',
};
export default Story;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do euismod tempor incididun.',
  color: 'primary',
  fontWeight: 'regular',
  fontSize: 16,
};
Primary.parameters = {
  backgrounds: { default: 'envelope' },
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  color: 'secondary',
  fontWeight: 'regular',
  fontSize: 16,
};
Secondary.parameters = {
  backgrounds: { default: 'envelope' },
};

export const Brand = Template.bind({});
Brand.args = {
  children: 'Envelop',
  color: 'brand',
  fontWeight: 'bold',
  fontSize: 18,
};

export const SecondaryBrand = Template.bind({});
SecondaryBrand.args = {
  children: 'Envelop',
  color: 'secondary-brand',
  fontWeight: 'semibold',
  fontSize: 18,
};
