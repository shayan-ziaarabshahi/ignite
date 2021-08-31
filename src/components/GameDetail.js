import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { motion } from "framer-motion";
import { emptyGame } from "../actions/gameAction";

const GameDetail = () => {
  const { game, screenshots } = useSelector((state) => state.game);
  const dispatch = useDispatch();
  const handleExit = (e) => {
    const exitTarget = e.target;
    if (exitTarget.classList.contains("exitTarget")) {
      dispatch(emptyGame());
    }
  };

  const starMaker = (rate) => {
    let floorRate = Math.floor(rate);
    const starArray = [];
    let i;
    for (i=0; i<5; i++) {
      if (i < floorRate) {
        starArray.push(<i class="bi bi-star-fill" style={{color:"gold"}}></i>)
      }
      else {
        starArray.push(<i class="bi bi-star" style={{color:"gold"}}></i>)
      }
    }
    return starArray
  };

  const htmlString = game.description;

  return (
    <CardShadow onClick={handleExit} className="exitTarget">
      <CardDetail>
        <Media>
          <div className="rating">
            <H2>{game.name}</H2>
            <P>score: {starMaker(game.rating)}</P>
          </div>
          <div className="info">
            <H3>platforms</H3>
            <Platforms>
              {game.platforms.map((item) => (
                <H4 key={item.platform.id}>--{item.platform.name}</H4>
              ))}
            </Platforms>
          </div>
        </Media>
        <div className="media">
          <img src={game.background_image} alt="image_background" />
        </div>
        <Description dangerouslySetInnerHTML={{ __html: htmlString }} />
        <div className="gallery">
          {screenshots.results.map((item) => (
            <img src={item.image} key={item.id} alt="screenshot" />
          ))}
        </div>
      </CardDetail>
    </CardShadow>
  );
};

const CardShadow = styled(motion.div)`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0vh;
  left: 0px;
`;
const CardDetail = styled(motion.div)`
  height: 90vh;
  width: 80%;
  background-color: white;
  padding: 2rem;
  border-radius: 15px;
  position: absolute;
  top: 5vh;
  left: 10%;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 1vw;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    background-color: blue;
    border-radius: 15px;
  }

  img {
    width: 100%;
  }
`;

const Media = styled(motion.div)`
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction:column;
    text-align: center;
}
`;

const Platforms = styled(motion.div)`
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 768px) {
    flex-direction:column;
}
`;
const H3 = styled.h3`
  text-align: center;
  font-family: "Libre Baskerville", serif;
  color: #2A5592;
`;

const H4 = styled.h4`
  font-family: "Libre Baskerville", serif;
`;

const Description = styled.div`
  padding: 1rem 0;
  text-align: justify;
  color:black;
  font-family: "Libre Baskerville", serif;
`;

const H2 = styled.h2`
  font-family: "Libre Baskerville", serif;
`

const P = styled.p`
font-family: "Libre Baskerville", serif;
font-weight:bold;
color:#851D27
}
`

export default GameDetail;
