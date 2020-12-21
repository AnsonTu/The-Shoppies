import React, { useState } from "react";
import PageContainer from "./components/PageContainer";
import SearchBar from "./components/SearchBar";
import ListContainer from "./components/ListContainer";

function App() {
  const [movies, setMovies] = useState([]);

  return (
    <div style={{ backgroundColor: "#0E72B5" }}>
      <PageContainer>
        <SearchBar setMovies={setMovies} />
        <ListContainer movies={movies} />
      </PageContainer>
    </div>
  );
}

export default App;
