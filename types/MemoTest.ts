import { GameSession } from "@/types/GameSession";

type MaxScore = Pick<GameSession, 'id' | 'retries' | 'score'>;
export type MemoTestImage = {
    id: number;
    image_url: string;
}

export type MemoTest = {
    id: number;
    name: string;
    images: MemoTestImage[];
	maxScore: MaxScore;
}