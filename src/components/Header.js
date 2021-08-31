import React , { useState }from "react";
import styled from "styled-components";
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { searchedGames } from '../actions/gamesActions';
import { header } from '../animation/animate';


function Header() {
    const [searchValue, setSearchValue] = useState('')

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setSearchValue(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchedGames(searchValue))
        setSearchValue('')
    }

    const emptySearchSec = () => {
        dispatch({
            type:'EMPTY_SEARCH'
        })
    }

  return (
    <>
      <Brand onClick={emptySearchSec} variants={header} initial='hidden' animate='show'>
        <i>logo</i>
        <p>World Games Website</p>
      </Brand>
      <SearchBox onSubmit={handleSubmit}>
        <input type="text" placeholder='type to search ---' onChange={handleChange} value={searchValue}></input>
        <button type='submit'>trigger</button>
      </SearchBox>
    </>
  );
}

const Brand = styled(motion.div)`
    display: flex;
    justify-content: center;
    p {
      font-size:4rem;
      @media (max-width: 768px) {
        font-size:1.5rem;
    }
    }
`
const SearchBox = styled.form`
    text-align: center;
    padding: 1rem;
    input {
        width:40%;
        height:5vh;
        padding: 1%;
        font-weight: bolder;
        @media (max-width: 768px) {
          width:80%;
        }
    }
    button {
        width:10%;
        height:5vh;
        background-color: black;
        color: white;
        @media (max-width: 768px) {
          width:20%;
        }
    }
    }
`
export default Header;
