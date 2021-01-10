import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import MoviesList from "./MoviesList";
import NomineesList from "./NomineesList";

const useStyle = makeStyles({
  paper: {
    width: "1000px",
    height: "550px",
    marginTop: "40px"
  },
  alert: {
    width: "900px",
    margin: "16px 0",
    fontSize: "18px"
  }
});

const ListContainer = (props) => {
  const classes = useStyle();
  const { movies, nominees, setNominees } = props;

  return (
    <Paper className={classes.paper} elevation={12}>
      <Grid container justify="center">
        {nominees && nominees.length < 5 ? (
          <Alert className={classes.alert} severity="info">
            {5 - nominees.length} more movies can be nominated!
          </Alert>
        ) : (
          <Alert className={classes.alert} severity="success">
            5 movies have been nominated!
          </Alert>
        )}
        <Grid item container sm={6} alignItems="center" justify="center">
          <MoviesList
            movies={movies}
            nominees={nominees}
            setNominees={setNominees}
          />
        </Grid>
        <Grid item container sm={6} alignItems="center" justify="center">
          <NomineesList nominees={nominees} setNominees={setNominees} />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ListContainer;
