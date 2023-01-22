import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { EnvelopeLogin } from './EnvelopeLogin';

const Story: ComponentMeta<typeof EnvelopeLogin> = {
  component: EnvelopeLogin,
  title: 'Envelope Application / Login',
};
export default Story;

const Template: ComponentStory<typeof EnvelopeLogin> = (args) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <EnvelopeLogin {...args} />
    </QueryClientProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
