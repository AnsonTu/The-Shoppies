import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";

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
    marginLeft: "14px"
  },
  button: {
    marginRight: "14px",
    textTransform: "none",
    color: "#631A04",
    backgroundColor: "#F29274"
  },
  buttonIcon: {
    marginRight: "6px",
    color: "#7D2105"
  }
});

const NomineeCard = (props) => {
  const classes = useStyle();
  const {
    movie,
    nominees,
    setNominees,
    handleOpenModal,
    handleNewPoster
  } = props;

  const removeNominee = () => {
    setNominees(nominees.filter((nominee) => nominee.imdbID !== movie.imdbID));
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
        <Avatar
          className={classes.avatar}
          src={movie.Poster}
          onClick={openPoster}
        />
        <Button className={classes.button} onClick={removeNominee}>
          <CancelIcon className={classes.buttonIcon} />
          <Typography>Remove Nomination</Typography>
        </Button>
      </Grid>
    </Card>
  );
};

export default NomineeCard;
