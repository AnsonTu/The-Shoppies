import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import MovieCard from "../MovieCard";

const useStyle = makeStyles({
  paper: {
    width: "450px",
    height: "455px",
    backgroundColor: "#E0BB14"
  },
  title: {
    fontSize: "18px",
    margin: "8px 0 8px 10px"
  },
  cardContainer: {
    maxHeight: "400px"
  }
});

const MoviesList = (props) => {
  const classes = useStyle();
  const {
    movies,
    nominees,
    setNominees,
    handleOpenModal,
    handleNewPoster
  } = props;

  return (
    <Paper className={classes.paper} variant="outlined">
      <Typography className={classes.title}>List of Movies</Typography>
      <Divider />
      <Grid container justify="center" style={{ overflowY: "auto" }}>
        <div className={classes.cardContainer}>
          {movies &&
            movies.map(
              (movie) =>
                movie.Type === "movie" && (
                  <MovieCard
                    key={`movie-${movie.imdbID}`}
                    movie={movie}
                    nominees={nominees}
                    setNominees={setNominees}
                    handleOpenModal={handleOpenModal}
                    handleNewPoster={handleNewPoster}
                  />
                )
            )}
        </div>
      </Grid>
    </Paper>
  );
};

export default MoviesList;
