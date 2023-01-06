import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import CartCard from "./CartCard"
import Nav from "./Nav"


 function CartList({handleSearch, searchGames, userData, setUserData}) {
  const [cartGames, setCartGames] = useState([])
  
  useEffect(() => {
    fetch('/purchases')
    .then(res => res.json())
    .then(data => setCartGames(data))
  },[])
  console.log(cartGames)

function addToLibrary(newObj) {
  console.log(newObj)
  setCartGames(prevState => [...prevState, newObj])
}

  const eachCartGame = cartGames.map(cartGame => {
    return <CartCard key={cartGame.id} cartGame={cartGame} addToLibrary={addToLibrary} setCartGames={setCartGames} userData={userData} setUserData={setUserData} />
  })
  
  return (
    <div id="fav">
      <div>
      <Nav searchGames={searchGames} handleSearch={handleSearch} userData={userData}/>
      <Link style = {{textDecoration: 'none', color:'black'}} to='/storelist' >
      Back To Store Page
      </Link>
      {eachCartGame}
    </div>
   </div>
  )
}
export default CartList;
