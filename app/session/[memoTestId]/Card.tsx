import Image from "next/image";
import "./card.css";
import Box from "../../../components/Box";

const CardBack = ({ cardNumber, cardBackUrl, props, isFlipped }: { cardNumber: number, cardBackUrl: string, props: any, isFlipped: boolean }) => (
	<Box hidden={isFlipped} className="relative">
		<Image
			src={cardBackUrl}
			alt={cardBackUrl}
			{...props}
		/>
		<span
			className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xl text-white font-bold select-none"
		>
			{cardNumber + 1}
		</span>
	</Box>
);

export default function Card({ image, index, isFlipped, isMatched, onClick }
	: { image: string, index: number, isFlipped: boolean, isMatched: boolean, onClick: (index: number) => void }) {

	const cardBackUrl = '/images/cardback.png';

	const imageProps = {
		width: 186,
		height: 270,
		draggable: false,
		className: "mx-auto object-contain",
	};

	const handleImageClick = () => {
		onClick(index);
	};

	return (
		<Box
			key={index}
			className={`card-box border rounded-lg shadow-md flex item-center`}
			onClick={() => (!isFlipped && !isMatched) && handleImageClick()}
		>
			<Image hidden={!isFlipped} src={`/images/${image}`} alt={image} {...imageProps} />
			{!isFlipped &&
				<CardBack cardNumber={index} cardBackUrl={cardBackUrl} props={imageProps} isFlipped={isFlipped} />
			}
		</Box>);
}