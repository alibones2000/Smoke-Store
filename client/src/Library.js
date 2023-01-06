import Nav from "./Nav"

function Library({ userData, searchGames, handleSearch }){
    console.log(userData)
    const gamesImages = userData.games?.map(game => {
        return (
            <img src={game.img_url}/>
        )
    })
    return(
        <div>
             <Nav searchGames={searchGames} handleSearch={handleSearch} userData={userData}/>
            <h1>Library</h1>
            {gamesImages}
        </div>
    )
}

export default Library