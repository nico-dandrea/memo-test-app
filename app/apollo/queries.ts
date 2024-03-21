import { GameSession } from "@/types/GameSession";
import { MemoTest } from "@/types/MemoTest";
import { gql, TypedDocumentNode } from "@apollo/client";

export const FETCH_MEMO_TESTS: TypedDocumentNode<{ memoTests: MemoTest[] }> = gql`
	query {
		memoTests {
			id
			name
			images {
				id
				image_url
			}
			maxScore {
				id
				retries
				score
			}
		}
	}
`;

export const FETCH_MEMO_TEST: TypedDocumentNode<{ memoTest: MemoTest }> = gql`
	query ($id: ID!) {
		memoTest(id: $id) {
			id
			name
			images {
				id
				image_url
			}
			maxScore {
				id
				retries
				score
			}
		}
	}
`;

export const FETCH_GAME_SESSION: TypedDocumentNode<{ gameSession: GameSession }> = gql`
	query ($id: ID!) {
		gameSession(id: $id) {
			id
			retries
			number_of_pairs
			score
			state
			memoTest {
				id
			}
		}
	}
`;

const queries = {
	FETCH_MEMO_TESTS,
	FETCH_MEMO_TEST,
	FETCH_GAME_SESSION,
};

export default queries;