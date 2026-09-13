import type { Meta, StoryObj } from '@storybook/react';
import { Hello } from './HelloArguments';

// 1. Tell Storybook about our component and its types
const meta: Meta<typeof Hello> = {
  title: 'Basics/HelloArguments',
  component: Hello,
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof Hello>;

// 2. Record State #1: Just the username (Age is omitted)
export const JustName: Story = {
  args: {
    username: 'James',
  },
};

// 3. Record State #2: Both username and age provided
export const NameAndAge: Story = {
  args: {
    username: 'Sarah Connor',
    age: 29,
  },
};
