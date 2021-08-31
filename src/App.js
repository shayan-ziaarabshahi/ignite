import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { loadGames } from "./actions/gamesActions";
import Game from "./components/Game";
import GlobalStyle from "./components/GlobalStyle";
import GameDetail from "./components/GameDetail";
import Header from "./components/Header";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  const { popular, newGames, upcoming, searchedGames } = useSelector(
    (state) => state.games
  );
  const { game } = useSelector((state) => state.game);

  return (
    <GameList>
      <Header />
      {game.id && <GameDetail />}
      <GlobalStyle />
      {searchedGames.length ? 
        <div>
          <H1>searchedGames</H1>
          <Games>
            {searchedGames.map((game) => (
              <Game
                name={game.name}
                released={game.released}
                background_image={game.background_image}
                id={game.id}
                key={game.id}
              />
            ))}
          </Games>
        </div>
      :''}
      <H1>newGames</H1>
      <Games>
        {newGames.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            background_image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      <H1>popular</H1>
      <Games>
        {popular.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            background_image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
      <H1>upcoming</H1>
      <Games>
        {upcoming.map((game) => (
          <Game
            name={game.name}
            released={game.released}
            background_image={game.background_image}
            id={game.id}
            key={game.id}
          />
        ))}
      </Games>
    </GameList>
  );
}

const GameList = styled(motion.div)`
  padding: 4rem 5rem 1rem 5rem;
  @media (max-width: 768px) {
    padding: 2rem 1rem 1rem 1rem;
}
`;
const Games = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 5rem 3rem;
  margin-top: 2rem;
`;
const H1 = styled.h1`
  padding-top: 3rem;
  font-family: "Libre Baskerville", serif;
  @media (max-width: 768px) {
    text-align: center;
`;

export default App;
