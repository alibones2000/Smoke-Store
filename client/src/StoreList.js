import StoreCard from './StoreCard'
import React from 'react'
import Nav from "./Nav"
import CardGroup from 'react-bootstrap/CardGroup';


function StoreList({filterAllGames, updateCartGame, games, searchGames, handleSearch, userData}) {
console.log(games)
const eachGame = filterAllGames.map(game => {
return <StoreCard key={game.id} game={game} updateCartGame={updateCartGame}/>
})




  return (
    <div>
      <Nav searchGames={searchGames} handleSearch={handleSearch}
       userData={userData}/>
      <h1>Store</h1>
      {/* <CardGroup > */}
      <div style={{display: 'flex', width: '100vw',height: "100vw", flexWrap: 'wrap', gap: '2vw ', alignItems: 'center', justifyContent: 'center', borderstyle: 'solid'}}>
        {eachGame}
      </div>
      {/* </CardGroup> */}
    </div>
  )
}
export default StoreList;