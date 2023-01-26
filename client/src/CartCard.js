import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import { useState } from 'react';

function CartCard({addToLibrary, setCartGames, cartGame, userData, setUserData}){
  
 
    const {id, title, genre, price ,platform, img_url} = cartGame
  //  const [ buyGame, setBuyGame ] = useState({})
    function handleDelete() {
    
      fetch(`/purchases/${id}`, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({cart : !cartGame.cart}),
    })
    .then(response => response.json())
    .then((data)=> setCartGames(data))
  }
  function handleBuy(){
    console.log(userData.id)
    fetch(`/buy_game`, {
      method: "POST",
      headers: {
        "content-type":"application/json"
      },
      body: JSON.stringify({
          game_id: id,
          user_id: userData.id
      })
    })
    .then(r => r.json())
    .then(data => addToLibrary(data))
    
  }

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
<Button style={{marginTop: '10px'}} onClick={handleDelete} id="add-to-cart">Remove from Cart</Button>
<Button style={{marginTop: '10px'}} onClick={handleBuy} className="buy-btn">Buy Game</Button>
</div>
);
}
export default CartCard;