import logo from './logo.svg';
import './App.css';
import StoreList from './StoreList'
import StoreCard from './StoreCard'
import StorePage from './StorePage'
import Nav from './Nav'
import { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom"


function App() {
  const [games, setGames] = useState([])
  const [searchGames, setSearchGames] = useState('')
  
  useEffect(() =>{
    fetch('http://localhost:4000/games')
    .then(res => res.json())
    .then(data => setGames(data))

  },[])

  const filterAllGames = games.filter(filterGames => {
    return filterGames.title.toLowerCase().includes(searchGames.toLowerCase())
  })

  function handleSearch(e){
    setSearchGames(e.target.value)
  }
  function updateCartGame(updatedGame) {
    const updatedGames = games.map(game => {
      if (game.id === updatedGame.id) {
        return updatedGame
      } else return game
    })
    setGames(updatedGames) 
  }
  const cartGames = games.filter(game => {
    if (game.cart === true) {
      return game
    } 
  })
  
  
  return (
    <div className="App">
      <Nav searchGames={searchGames} handleSearch={handleSearch}/>
      <Routes>
        <Route path="storelist" element={<StoreList filterAllGames={filterAllGames} updateCartGame={updateCartGame}  />}/>
      </Routes>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
