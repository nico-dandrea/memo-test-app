import { MemoTest } from "@/types/MemoTest";
import { useMutation } from "@apollo/client";
import { CREATE_GAME_SESSION } from "@/app/apollo/mutations";
import { useRouter } from "next/navigation";
import Box from "@/components/Box";
import Button from "@/components/Button";

// handleNewGameSession should receive a memotest id
const MemoTestList = ({ memoTests }: { memoTests: MemoTest[] }) => {

	const router = useRouter();
	const [createGameSession] = useMutation(CREATE_GAME_SESSION, {
		onCompleted: (data) => {
			// @ts-ignore
			const newGameSession = data.createGameSession;
			const memoTest = newGameSession.memoTest;
			localStorage.setItem(`memoTestSession_${memoTest.id}`, newGameSession.id);
			handleNewGameSession(memoTest);
		}
	});

	const handleNewGameSession = (memoTest: MemoTest): void => {
		const images = memoTest.images;
		const pairedImages = [...images, ...images];

		// Shuffle the images
		for (let i = pairedImages.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[pairedImages[i], pairedImages[j]] = [pairedImages[j], pairedImages[i]];
		}

		// Create a copy of the original images with isFlipped and isMatched set to false
		const memoTestSessionImages = pairedImages.map(image => ({ ...image, isFlipped: false, isMatched: false }));

		// Store the shuffled images in localStorage
		localStorage.setItem(`memoTestSessionCards_${memoTest.id}`, JSON.stringify(memoTestSessionImages));
		handleGoToSession(memoTest);
	}

	const handleGoToSession = (memoTest: MemoTest) => {
		router.push(`/session/${memoTest.id}`);
	}

	return (
		<Box>
			<ul className="space-y-4">
				{memoTests.map(memoTest => (
					<li key={memoTest.id}>
						<h2 className="text-2xl font-bold">{memoTest.name}</h2>
						<p className="text-gray-600 mb-2">Max Score: {memoTest.maxScore ? memoTest.maxScore.score : 0}</p>
						<Box>
							<Button
								className="bg-pink-600 hover:bg-pink-700"
								onClick={() => createGameSession({
									variables: {
										input:
										{
											memoTest: { connect: memoTest.id },
											number_of_pairs: memoTest.images.length
										}
									}
								})}
							>
								Play Now
							</Button>

							{localStorage.getItem(`memoTestSession_${memoTest.id}`) && (
								<Button
									className="bg-blue-600 hover:bg-blue-700"
									onClick={() => handleGoToSession(memoTest)}
									>
									Continue
								</Button>
							)}
						</Box>
					</li>
				))}
			</ul>
		</Box>
	)
};

export default MemoTestList;