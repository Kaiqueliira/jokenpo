import { createContext, useState } from "react";
export const GameContext = createContext({});

export const GameProvider = ({ children }) => {
  const [actionPlayer, setActionPlayer] = useState(null);
  const [actionAndroid, setActionAndroid] = useState(null);
  const [scorePlayer, setScorePlayer] = useState(0);
  const [scoreAndroid, setScoreAndroid] = useState(0);
  const [rulesImg, setRulesImg] = useState(false);

  function handleRulesImg() {
    setRulesImg(!rulesImg);
  }

  function handleActionPlayer(action) {
    setActionPlayer(action);
  }

  function handleActionAndroid(action) {
    setActionAndroid(action);
  }

  function clearScore() {
    setScorePlayer(0);
    setScoreAndroid(0);
  }

  function handleScorePlayer() {
    setScorePlayer((score) => (score += 1));
  }
  function handleScoreAndroid() {
    setScoreAndroid((score) => (score += 1));
  }

  return (
    <GameContext.Provider
      value={{
        actionPlayer,
        scorePlayer,
        actionAndroid,
        scoreAndroid,
        handleActionPlayer,
        handleActionAndroid,
        handleScorePlayer,
        handleScoreAndroid,
        clearScore,
        handleRulesImg,
        rulesImg,
      }}
    >
      {children}
    </GameContext.Provider>
  );
};
