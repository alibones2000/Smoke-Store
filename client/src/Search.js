import React from 'react';


 function Search({searchGames, handleSearch}) {
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Games: </label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange= {handleSearch}
        value={searchGames}
      />
    </div>
  )
}

export default Search