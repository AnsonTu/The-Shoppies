import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CancelIcon from "@material-ui/icons/Cancel";

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
  const { movie, removeNominee } = props;

  return (
    <Card className={classes.card}>
      <Typography className={classes.movieInfo}>
        Title: {movie && movie.title}
      </Typography>
      <Typography className={classes.movieInfo}>
        Year: {movie && movie.year}
      </Typography>
      <Button className={classes.button} onClick={removeNominee}>
        <CancelIcon className={classes.buttonIcon} />
        <Typography>Remove Nomination</Typography>
      </Button>
    </Card>
  );
};

export default NomineeCard;
