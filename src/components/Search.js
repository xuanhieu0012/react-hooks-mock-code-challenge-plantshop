import React from "react";


function Search({onSearchWord} ) {
  

  function handlesearch(e){
    onSearchWord(e.target.value)

  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handlesearch}
      />
    </div>
  );
}

export default Search;
