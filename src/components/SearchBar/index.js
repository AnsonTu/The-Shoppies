import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles({
  paper: {
    width: "900px",
    height: "120px",
    marginTop: "50px"
  },
  title: {
    margin: "15px 20px",
    fontSize: "20px"
  },
  searchComponents: {
    display: "flex",
    alignItems: "center"
  },
  searchField: {
    width: "700px",
    marginLeft: "14px"
  },
  searchButton: {
    width: "150px",
    marginLeft: "20px",
    textTransform: "none",
    fontSize: "18px",
    backgroundColor: "#6EC9EB"
  }
});

const SearchBar = (props) => {
  const classes = useStyle();
  const { setMovies } = props;
  const [movieTitle, setMovieTitle] = useState("");

  const handleTitleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const searchMovies = () => {
    fetch(`https://www.omdbapi.com/?s=${movieTitle}&apikey=211458f`)
      .then((response) => response.json())
      .then((data) => setMovies(data.Search))
      .catch((err) => console.error(err));
  };

  return (
    <Paper className={classes.paper} elevation={12}>
      <Typography className={classes.title}>
        Search for your favourite movies and nominate them!
      </Typography>
      <Grid item container className={classes.searchComponents}>
        <TextField
          className={classes.searchField}
          variant="outlined"
          size="small"
          onChange={handleTitleChange}
        />
        <Button
          className={classes.searchButton}
          variant="contained"
          onClick={searchMovies}
        >
          <SearchIcon />
          Search
        </Button>
      </Grid>
    </Paper>
  );
};

export default SearchBar;
