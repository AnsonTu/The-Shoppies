import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import EmojiEventsIcon from "@material-ui/icons/EmojiEvents";

const useStyle = makeStyles({
  card: {
    width: "400px",
    height: "115px",
    margin: "12px 10px",
    backgroundColor: "#F0E3B1"
  },
  movieInfo: {
    maxWidth: "380px",
    marginTop: "6px",
    marginLeft: "10px",
    textOverflow: "ellipsis",
    overflow: "hidden",
    whiteSpace: "nowrap"
  },
  button: {
    float: "right",
    marginTop: "8px",
    marginRight: "8px",
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
  const { movie, nominees, setNominees } = props;

  const addNominee = () => {
    setNominees([...nominees, movie]);
  };

  return (
    <Card className={classes.card}>
      <Typography className={classes.movieInfo}>
        Title: {movie && movie.Title}
      </Typography>
      <Typography className={classes.movieInfo}>
        Year: {movie && movie.Year}
      </Typography>
      <Button
        className={classes.button}
        onClick={addNominee}
        disabled={
          nominees.length === 5 ||
          nominees.map((nominee) => nominee.imdbID).indexOf(movie.imdbID) > -1
        }
      >
        <EmojiEventsIcon className={classes.buttonIcon} />
        <Typography>Nominate Movie</Typography>
      </Button>
    </Card>
  );
};

export default MovieCard;
