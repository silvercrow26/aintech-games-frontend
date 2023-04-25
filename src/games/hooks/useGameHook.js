import { useContext } from "react";

import { GameContext } from "../context/GameContext";

export const useGameHook = () => {
  const {
    state: {
      search,
      setSearch,
      searchGame,
      setSearchGame,
      inputSearch,
      setInputSearch,
      msgError,
      setMsgError,
      SetLatestGamesData,
      latestGamesData,

    },
    actions: { getSearchGame, getLatestGamesUploaded, },
  } = useContext(GameContext);

  return {
    getSearchGame,
    search,
    setSearch,
    searchGame,
    setSearchGame,
    inputSearch,
    setInputSearch,
    msgError,
    setMsgError,
    getLatestGamesUploaded,
    SetLatestGamesData,
    latestGamesData,

  };
};
