import Card from 'react-bootstrap/Card';
import { useState} from 'react';

import { Button  } from 'react-bootstrap';

function StoreCard({game, updateCartGame}){
  const [gamePrice, setGamePrice] = useState([]);
    const {title, genre, price ,platform, img_url, id} = game
    function handleCartClick(game){
      fetch(`/add_to_cart/${id}`)
      .then(response => response.json())
      .then(data => updateCartGame(data))
      setGamePrice(...gamePrice, game.price)
    }
    console.log(gamePrice)

    return (
      // <Card>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <div style={{
      border: '1px solid gray',
      borderRadius: '11px',
      width: '25vw',
      // height: '100vh',
      display:'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      }}>

      {/* <Card.Img variant="top" src={img_url} /> */}
      <img src={img_url} style={{width: '100%', height: '35vh',  borderRadius: '10px'}}/>
      {/* <Card.Body> */}
      <div style={{
      }}>
        <Card.Title>{title}</Card.Title>
        <Card.Text>genre: {genre}</Card.Text>
        <Card.Text>platform: {platform}</Card.Text>
        <Card.Text>price: ${price}</Card.Text>
      </div>
      {/* <Card.Footer> */}
      {/* </Card.Footer> */}
    {/* </Card> */}
       </div>
    <Button style={{marginTop: '10px'}} onClick={() => handleCartClick(game)} id="add-to-cart">Add to Cart</Button>
    </div>
        // <div className='game-info' >
        //   <img className='img_url-size' src={img_url} />
        //   <div >
        //     <h1>{title}</h1>
        //     <p>genre: {genre}</p>
        //     <p>platform: {platform} </p>
        //     <p> price: {price}</p>
        //     <button onClick={handleCartClick} id="add-to-cart">
        //   Add to Cart
        // </button>
        //   </div>
     
        // </div>
    );
    
}

export default StoreCard;