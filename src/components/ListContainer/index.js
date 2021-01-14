import React, { Suspense } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Alert from "@material-ui/lab/Alert";
import MoviesList from "./MoviesList";
import NomineesList from "./NomineesList";
import useModal from "../useModal";

const PosterModal = React.lazy(() => import("../PosterModal"));

const useStyle = makeStyles({
  paper: {
    width: "1000px",
    height: "560px",
    marginTop: "30px"
  },
  alert: {
    width: "920px",
    margin: "16px 0",
    fontSize: "18px"
  }
});

const ListContainer = (props) => {
  const classes = useStyle();
  const { movies, nominees, setNominees } = props;
  const {
    isOpen,
    handleOpenModal,
    handleCloseModal,
    poster,
    handleNewPoster
  } = useModal();

  return (
    <Paper className={classes.paper} elevation={12}>
      <Grid container justify="center">
        {nominees && nominees.length < 5 ? (
          <Alert className={classes.alert} severity="info">
            {5 - nominees.length} more movies can be nominated!
          </Alert>
        ) : (
          <Alert className={classes.alert} severity="success">
            5 movies have been nominated! Thank you for participating!
          </Alert>
        )}
        <Grid item container xs={6} alignItems="center" justify="center">
          <MoviesList
            movies={movies}
            nominees={nominees}
            setNominees={setNominees}
            handleOpenModal={handleOpenModal}
            handleNewPoster={handleNewPoster}
          />
        </Grid>
        <Grid item container xs={6} alignItems="center" justify="center">
          <NomineesList
            nominees={nominees}
            setNominees={setNominees}
            handleOpenModal={handleOpenModal}
            handleNewPoster={handleNewPoster}
          />
        </Grid>
        {isOpen && (
          <Suspense fallback={null}>
            <PosterModal
              isOpen={isOpen}
              handleCloseModal={handleCloseModal}
              poster={poster}
            />
          </Suspense>
        )}
      </Grid>
    </Paper>
  );
};

export default ListContainer;
