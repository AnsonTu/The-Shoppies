import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import PageContainer from "./components/PageContainer";
import SearchBar from "./components/SearchBar";
import ListContainer from "./components/ListContainer";
import LinkGenerator from "./components/LinkGenerator";

function App() {
  const [movies, setMovies] = useState([]);
  const [nominees, setNominees] = useState([]);
  let location = useLocation();
  const nomineeIds = queryString.parse(location.search);
  const nomineeKeys = nomineeIds && Object.keys(nomineeIds);

  useEffect(() => {
    let urls = [];

    if (nomineeIds) {
      const numOfNominees = nomineeKeys.length < 5 ? nomineeKeys.length : 5;
      for (let i = 0; i < numOfNominees; i++) {
        urls.push(
          `https://www.omdbapi.com/?i=${
            nomineeIds[nomineeKeys[i]]
          }&apikey=211458f`
        );
      }
      let requests = urls.map((url) => fetch(url));
      Promise.all(requests)
        .then((response) => Promise.all(response.map((r) => r.json())))
        .then(async (data) => setNominees(data))
        .catch((err) => console.error(err));
    }
  }, []);

  return (
    <div style={{ backgroundColor: "#0E72B5" }}>
      <PageContainer>
        <SearchBar setMovies={setMovies} />
        <ListContainer
          movies={movies}
          nominees={nominees}
          setNominees={setNominees}
        />
        <LinkGenerator nominees={nominees} />
      </PageContainer>
    </div>
  );
}

export default App;
