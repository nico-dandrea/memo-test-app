import React from 'react';
import Card from './Card';
import { SessionCard } from '@/types/SessionCard';
import Box from '@/components/Box';

type CardGridProps = {
	cards: SessionCard[];
	handleCardClicked: (index: number) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, handleCardClicked }) => {
	// Adjust the number of columns based on the number of cards passed
	const numCols: number = Math.min(cards.length, 4) ?? 4;
	const gridClass: string = `grid grid-cols-${numCols} card-box gap-4`;

	return (
		<Box className={gridClass}>
			{cards.map((image, index) => (
				<Card
					key={`${image.id}-${index}`}
					image={image.image_url}
					index={index}
					isFlipped={image.isFlipped}
					isMatched={image.isMatched}
					onClick={() => handleCardClicked(index)}
				/>
			))}
		</Box>
	);
};

export default CardGrid;