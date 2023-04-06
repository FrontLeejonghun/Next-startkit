import { ComponentStory, Meta } from '@storybook/react';
import React from 'react';

import { SampleButton } from '.';

export default {
  title: 'SampleButton',
  component: SampleButton,
} as Meta;

const Template: ComponentStory<typeof SampleButton> = (args) => <SampleButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  label: 'Button',
  type: 'primary',
};
