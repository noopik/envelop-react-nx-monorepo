import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { FormLogin } from './FormLogin';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

const Story: ComponentMeta<typeof FormLogin> = {
  component: FormLogin,
  title: 'Features / Form Login',
};
export default Story;

const Template: ComponentStory<typeof FormLogin> = (args) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <FormLogin {...args} />
      </BrowserRouter>
    </QueryClientProvider>
  );
};

export const Primary = Template.bind({});
Primary.args = {};
