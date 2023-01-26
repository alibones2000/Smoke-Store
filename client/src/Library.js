import Nav from "./Nav"
import Card from 'react-bootstrap/Card';

function Library({ userData, searchGames, handleSearch, gameCart }){
    console.log(userData)
    const {title, genre, platform} = gameCart
    const gamesImages = userData.games?.map(game => {
        return (
            <img src={game.img_url} style={{width: '100%', height: '35vh',  borderRadius: '10px'}}/>
            
            )
        })
        
        return (
            // <Card>
            <div>
    <Nav searchGames={searchGames} handleSearch={handleSearch} userData={userData}/>
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
    {gamesImages}
    {/* <Card.Body> */}
    <div style={{
    }}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>genre: {genre}</Card.Text>
      <Card.Text>platform: {platform}</Card.Text>
    </div>
    {/* <Card.Footer> */}
    {/* </Card.Footer> */}
   {/* </Card> */}
      </div>
      </div>
      </div>

    )
}

export default Library;