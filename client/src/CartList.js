import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import CartCard from "./CartCard"
import Nav from "./Nav"


 function CartList({handleSearch, searchGames, userData, setUserData, gameCart, setGameCart}) {
  
  
  // useEffect(() => {
  //   fetch('/purchases')
  //   .then(res => res.json())
  //   .then(data => setgameCart(data))
  // },[])
  console.log(gameCart)

function addToLibrary(newObj) {
  console.log(newObj)
  setGameCart(prevState => [...prevState, newObj])
}

  const eachCartGame = gameCart.map(cartGame => {
    return <CartCard key={gameCart.id} cartGame={cartGame} addToLibrary={addToLibrary} setgameCart={setGameCart} userData={userData} setUserData={setUserData} />
  })
  
  return (
    <div id="fav">
      <div>
      <Nav searchGames={searchGames} handleSearch={handleSearch} userData={userData}/>
      <Link style = {{textDecoration: 'none', color:'black'}} to='/storelist' >
      Back To Store Page
      </Link>
      <div style={{display: 'flex', width: '100vw',height: "100vw", flexWrap: 'wrap', gap: '2vw ', alignItems: 'center', justifyContent: 'center', borderstyle: 'solid'}}>
      {eachCartGame}
      </div>
    </div>
   </div>
  )
}
export default CartList;
