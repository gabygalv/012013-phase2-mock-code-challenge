import React from "react";

function Search({setSearchVal}) {
 

  
  return (
    <div className="searchbar">
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={(e) => setSearchVal(e.target.value)}
      />
    </div>
  );
}

export default Search;
