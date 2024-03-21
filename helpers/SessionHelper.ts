type ParamsType = {
    memoTestId: string,
};

function SessionHelper({ params }: { params: ParamsType }) {
    const memoTestId = params.memoTestId;
	const sessionKey = `memoTestSession_${memoTestId}`;
	const cardsKey = `memoTestSessionCards_${memoTestId}`;

    return {
        getMemoTestSession: (): string | null => {
            return localStorage.getItem(sessionKey);
        },
        getSessionCards: (): string | null => {
            return localStorage.getItem(cardsKey);
        },
        setMemoTestSession: (value: string): void => {
            localStorage.setItem(sessionKey, value);
        },
        setSessionCards: (value: string): void => {
            localStorage.setItem(cardsKey, value);
        },
        endSession: (): void => {
            localStorage.removeItem(sessionKey);
            localStorage.removeItem(cardsKey);
        },
    };
}

export default SessionHelper;