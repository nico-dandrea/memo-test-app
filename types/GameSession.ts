import { MemoTest } from "./MemoTest";

export type GameSession = {
	id: number;
	memoTest: MemoTest;
	retries: number;
	numberOfPairs: number;
	state: string;
	score: number;
	createdAt: Date;
	updatedAt: Date;
}