import React from 'react'
import Search from './Search';
import {Link} from 'react-router-dom'

function Nav({searchGames, handleSearch}){
return(
    <div className='infoBar'>
      <ul>
      <li className="nav-button">
      <Link style = {{textDecoration: 'none', color:'white'}} to='/' >
         Home
      </Link>
      </li>
        <li className="nav-button">
      <Link style = {{textDecoration: 'none', color:'white'}} to='/moviecontainer' >
         Games
      </Link>
      </li>
      <li className="nav-button">
    <Link style = {{textDecoration: 'none', color:'white'}} to='/cartpage' >
    Cart
      </Link>
      </li>
      <li className="nav-button">
      <Link  style =  {{textDecoration: 'none', color:'white'}} to='/checkout' >
        Checkout
      </Link>
      </li>
      </ul>
      <Search searchGames={searchGames} handleSearch={handleSearch}/>
      </div>

)
}
export default Nav;

