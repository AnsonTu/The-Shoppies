import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Alert from "@material-ui/lab/Alert";
import MoviesList from "./MoviesList";
import NomineesList from "./NomineesList";

const useStyle = makeStyles({
  paper: {
    width: "1000px",
    height: "550px"
  },
  alert: {
    width: "900px",
    margin: "16px 0",
    fontSize: "18px"
  }
});

const ListContainer = (props) => {
  const classes = useStyle();
  const { movies } = props;
  const [nominees, setNominees] = useState([]);

  return (
    <Grid item container xs={12} justify="center">
      <Paper className={classes.paper} elevation="12">
        <Grid container justify="center">
          {nominees.length < 5 ? (
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
    </Grid>
  );
};

export default ListContainer;
