import type { Meta, StoryObj } from '@storybook/react';
import { ProfileCard } from './ProfileCard';

// 1. Tell Storybook about our component
const meta: Meta<typeof ProfileCard> = {
  title: 'Components/ProfileCard',
  component: ProfileCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

// 2. Record State #1: Default / Offline
export const Offline: Story = {
  args: {
    name: 'Sarah Connor',
    role: 'Systems Engineer',
    avatarUrl: 'https://unsplash.com',
    isOnline: false,
  },
};

// 3. Record State #2: Online Badge Active
export const Online: Story = {
  args: {
    ...Offline.args, // Copy the properties from the Offline story
    isOnline: true,
  },
};

// 4. Record State #3: Long Text (Testing if the UI breaks layout!)
export const LongNameTest: Story = {
  args: {
    name: 'Alexander Maximillian-Thornton the Third',
    role: 'Principal Cloud Infrastructure Solutions Architect & Developer Evangelist',
    avatarUrl: 'https://unsplash.com',
    isOnline: true,
  },
};
