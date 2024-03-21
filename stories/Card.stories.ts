// Card.stories.ts

import type { Meta, StoryObj } from '@storybook/react';

import Card from '../app/session/[memoTestId]/Card';

const meta: Meta<typeof Card> = {
	title: 'Card',
	component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
	args: {
		image: '/images/boot.png',
		index: 1,
		isFlipped: false,
		isMatched: false,
		onClick: () => {},
	},
};