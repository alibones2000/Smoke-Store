import './App.css';
import StoreList from './StoreList'
import { useEffect, useState } from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CartList from './CartList';
import LogIn from './LogIn';
import SignUp from './signup';
import Library from './Library';


function App() {
  const [userData, setUserData] = useState({})
  const [games, setGames] = useState([])
  const [searchGames, setSearchGames] = useState('')

  useEffect(() => {
    fetch('/me')
    .then(r => {
      if(r.ok){
        r.json()
        .then(data => {
          setUserData(data)
        })
      }
    })
  }, [])
  
  useEffect(() =>{
    fetch('/games')
    .then(res => res.json())
    .then(data => {
      if (!data.message){ 
        setGames(data)
      } 
    })
  
  },[])

  // console.log(games)

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
  // const cartGames = games.filter(game => {
  //   if (game.cart === true) {
  //     return game
  //   } 
  // })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/storelist">
            <StoreList filterAllGames={filterAllGames} updateCartGame={updateCartGame} games={games} userData={userData} setUserData={setUserData}/>
          </Route>
         
          <Route exact path="/cart"> 
            <CartList userData={userData} />
          </Route>
          
          <Route exact path="/">
            <LogIn userData={userData} setUserData={setUserData} />
          </Route>
          
          <Route exact path="/signup">
            <SignUp setUserData={setUserData}/>
          </Route>
          
          <Route exact path="/library">
            <Library userData={userData}/>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
