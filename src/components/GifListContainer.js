import React, { useState, useEffect } from "react";
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery) {
      
      fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then((response) => response.json())
        .then((data) => {
          setGifs(data.data.slice(0, 3));
        })
        .catch((error) => {
          console.error("Error fetching data: ", error);
        });
    }
  }, [searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <GifSearch onSearch={handleSearch} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
