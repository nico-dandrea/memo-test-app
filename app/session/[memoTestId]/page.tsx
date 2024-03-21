"use client";
import { END_GAME_SESSION, INCREMENT_GAME_SESSION_RETRIES } from "@/app/apollo/mutations";
import SessionHelper from "@/helpers/SessionHelper";
import { SessionCard } from "@/types/SessionCard";
import { useMutation } from "@apollo/client";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import CardGrid from "./CardGrid";
import EndGameModal from "./EndGameModal";
import LoadingIndicator from "@/components/LoadingIndicator";

export default function Session() {

  const { memoTestId }: { memoTestId: string } = useParams();
  const router = useRouter();
  const [cards, setCards] = useState<SessionCard[]>([]);
  const [sessionId, setSessionId] = useState<string | null>();
  const [isMatching, setIsMatching] = useState<boolean>(false);
  const [isCheckingMatch, setIsCheckingMatch] = useState<boolean>(false);
  const [sessionHelper] = useState(() => SessionHelper({ params: { memoTestId } }));
  const [showModal, setShowModal] = useState(false);

  const [incrementGameSessionRetries] = useMutation(INCREMENT_GAME_SESSION_RETRIES);
  const [endGameSession] = useMutation(END_GAME_SESSION);


  const handleGoHome = () => {
    if (showModal) {
      setShowModal(false);
    }
    router.push("/");
  };

  useEffect(() => {
    setIsCheckingMatch(true);
    const storedSessionId = sessionHelper.getMemoTestSession();
    const cardsJSONString = sessionHelper.getSessionCards();
    if (!storedSessionId || !cardsJSONString) {
      handleGoHome();
    }
    setSessionId(storedSessionId);
    // @ts-ignore
    const cardsJSON: SessionCard[] = JSON.parse(cardsJSONString);
    setCards(cardsJSON);
    setIsCheckingMatch(false);
  }, [memoTestId, sessionHelper]);

  const handleEndSession = () => {
    if (cards.every((card) => card.isMatched)) {
      endGameSession({
        variables: {
          id: sessionId
        }
      });
      sessionHelper.endSession();
      setShowModal(true);
    }
  }

  const handleIncrementSessionRetries = () => {
    setIsMatching(false);
    incrementGameSessionRetries({
      variables: {
        id: sessionId
      }
    });
  }


  const handleResetCards = () => {
    cards.forEach((card) => {
      if (!card.isMatched) {
        card.isFlipped = false;
      }
    });
    setCards([...cards]);
  };

  const handleCardMatching = (index: number): void => {
    // if another card with the same url is flipped, set isMatching to false and set isMatched to true
    const sameUrlCardIndex = cards.findIndex((card, i) => i !== index && card.image_url === cards[index].image_url && card.isFlipped);
    if (sameUrlCardIndex !== -1) {
      cards[index].isMatched = true;
      cards[sameUrlCardIndex].isMatched = true;
      sessionHelper.setSessionCards(JSON.stringify(cards));
    }
  };


  const handleCardClicked = (index: number) => {
    if (isCheckingMatch) {
      return;
    }
    cards[index].isFlipped = true;
    if (isMatching) {
      handleCardMatching(index);
      handleIncrementSessionRetries();
      setIsCheckingMatch(true);
      setTimeout(() => {
        handleResetCards();
        setIsCheckingMatch(false);
        handleEndSession();
      }, 1000);
    } else {
      setIsMatching(true);
      setCards([...cards]);
    }
  };

  return (
    <>
      {!cards.length ? (
        <LoadingIndicator />
      ) : (

        <>
          <CardGrid cards={cards} handleCardClicked={handleCardClicked} />
          <EndGameModal
            title="Congratulations!"
            isOpen={showModal}
            onClose={handleGoHome}
            description="You've completed the game!"
          />
        </>
      )}
    </>
  );
};