

function StoreCard(){
    const {title, genre, price ,platform, img_url} = game

    return (

        <div className='game-info' >
          <img className='img_url-size' onClick={handleClick} src={img_url} alt={title}/>
          <div >
            <h1>{title}</h1>
            <p>genre: {genre}</p>
            <p>platform: {platform} </p>
            <p> price: {price}</p>
            <button  onClick={handleCartClick} id="add-to-cart">
          Add to Cart{cart ? "" : ""} 
        </button>
          </div>
     
        </div>
    );
    
}

export default StoreCard;