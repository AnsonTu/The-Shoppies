import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const useStyle = makeStyles({
  card: {
    width: "400px",
    height: "120px",
    margin: "12px 10px",
    backgroundColor: "#F0E3B1"
  },
  movieInfo: {
    maxWidth: "380px",
    marginTop: "8px",
    marginLeft: "12px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  avatar: {
    marginLeft: "14px",
    padding: "0px"
  },
  button: {
    marginRight: "14px",
    textTransform: "none",
    color: "#044204",
    backgroundColor: "#09DB09"
  },
  buttonIcon: {
    marginRight: "6px",
    color: "#047004"
  }
});

const MovieCard = (props) => {
  const classes = useStyle();
  const {
    movie,
    nominees,
    setNominees,
    handleOpenModal,
    handleNewPoster
  } = props;

  const addNominee = () => {
    setNominees([...nominees, movie]);
  };

  const openPoster = (event) => {
    handleNewPoster(event.target.src);
    handleOpenModal();
  };

  return (
    <Card className={classes.card}>
      <Typography className={classes.movieInfo}>
        Title: {movie && movie.Title}
      </Typography>
      <Typography className={classes.movieInfo}>
        Year: {movie && movie.Year}
      </Typography>
      <Grid container justify="space-between" style={{ marginTop: "8px" }}>
        <IconButton className={classes.avatar} onClick={openPoster}>
          <Avatar src={movie.Poster} />
        </IconButton>
        {!(
          nominees.length === 5 ||
          nominees.map((nominee) => nominee.imdbID).indexOf(movie.imdbID) > -1
        ) && (
          <Button className={classes.button} onClick={addNominee}>
            <EmojiEventsIcon className={classes.buttonIcon} />
            <Typography>Nominate Movie</Typography>
          </Button>
        )}
      </Grid>
    </Card>
  );
};

export default MovieCard;
