import StoreCard from './StoreCard'
import React from 'react'



function StoreList({filterAllGames, updateCartGame}) {

const eachGame = filterAllGames.map(game => {
return < StoreCard key={game.id} game={game} updateCartGame={updateCartGame}/>
})

  return (
    <div>
      {eachGame}
   
    </div>
  )
}
export default StoreList;