import React from 'react';
import Card from './Card';
import { SessionCard } from '@/types/SessionCard';
import Box from '@/components/Box';
import './cardgrid.css';

type CardGridProps = {
	cards: SessionCard[];
	handleCardClicked: (index: number) => void;
}

const CardGrid: React.FC<CardGridProps> = ({ cards, handleCardClicked }) => {
	return (
		<Box className="card-container">
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