import { GameSession } from "@/types/GameSession";
import { gql, TypedDocumentNode } from "@apollo/client";

export const CREATE_GAME_SESSION: TypedDocumentNode<{ gameSession: GameSession}> = gql`
  mutation ($input: CreateGameSessionInput!) {
	createGameSession(input: $input) {
	  id
	  retries
	  number_of_pairs
	  score
	  state
	  memoTest {
		id
		name
		images {
		  id
		  image_url
		}
	  }
	}
  }
`;
  
export const INCREMENT_GAME_SESSION_RETRIES: TypedDocumentNode<{ gameSession: GameSession}> = gql`
  mutation ($id: ID!) {
	incrementGameSessionRetries(id: $id) {
	  id
	}
  }
`;

export const END_GAME_SESSION: TypedDocumentNode<{ gameSession: GameSession}> = gql`
  mutation ($id: ID!) {
	endGameSession(id: $id) {
	  id
	}
  }
`;