import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './navbar_drop_down';

const meta: Meta<typeof Navbar> = {
  title: 'Sandbox/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  parameters: {
    // Ensures navbar stretches across canvas nicely
    layout: 'fullscreen', 
  },
  // Automatically wires up spy actions in Storybook console
  argTypes: {
    onLangChange: { action: 'languageChanged' },
    onBackClick: { action: 'backButtonClicked' },
  },
};

export default meta;
type Story = StoryObj<typeof Navbar>;

// Default state representing English viewport
export const English: Story = {
  args: {
    lang: 'en',
    translations: { back: 'Back' },
  },
};

// State variation documenting Korean translation fallback
export const Korean: Story = {
  args: {
    lang: 'ko',
    translations: { back: '뒤로가기' },
  },
};

// State variation documenting Spanish translation fallback
export const Spanish: Story = {
  args: {
    lang: 'es',
    translations: { back: 'Atrás' },
  },
};
