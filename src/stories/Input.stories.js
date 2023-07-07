import React from 'react';

import { Input } from './Input';

export default {
  title: 'Example/Input',
  component: Input,
  argTypes: {
    label: { control: 'text' },
    type: { control: 'text' },
  },
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Input',
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password',
  type: 'password',
};

export const Email = Template.bind({});
Email.args = {
  label: 'Email',
  type: 'email',
};

export const Number = Template.bind({});
Number.args = {
  label: 'Number',
  type: 'number',
};
