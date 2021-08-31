import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { gameAction } from "../actions/gameAction";
import { popup } from "../animation/animate";

const Game = ({ name, background_image, released, id }) => {
  const dispatch = useDispatch()
  const handleClick = () => {
    dispatch(gameAction(id))
  }
  return (
    <Container onClick={handleClick} variants={popup} initial='hidden' animate='show'>
      <h4>{name}</h4>
      <div>
        <p>{released}</p>
        <img src={background_image} alt="background_image"></img>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  text-align: center;
  box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 0 0 15px 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h4 {
    padding: 1rem 0 2rem;
    font-family: 'Kaisei Tokumin', serif;
  }
  p{
    color: grey;
    font-family: 'Roboto Mono', monospace;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
    border-radius: 0 0 15px 15px;
    display:block;
  }
`;

export default Game;
