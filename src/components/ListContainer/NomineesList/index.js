import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import ClearAllIcon from "@material-ui/icons/ClearAll";
import Divider from "@material-ui/core/Divider";
import NomineeCard from "../NomineeCard";

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
  clearButton: {
    textTransform: "none",
    backgroundColor: "#F29274"
  },
  clearIcon: { marginRight: "6px", color: "#7D2105" },
  cardContainer: {
    maxHeight: "400px"
  }
});

const NomineesList = (props) => {
  const classes = useStyle();
  const { nominees, setNominees, handleOpenModal, handleNewPoster } = props;

  const handleClearNominees = () => {
    setNominees([]);
  };

  return (
    <Paper className={classes.paper} variant="outlined">
      <Grid container justify="space-between">
        <Typography className={classes.title}>List of Nominees</Typography>
        <Button className={classes.clearButton} onClick={handleClearNominees}>
          <ClearAllIcon className={classes.clearIcon} />
          <Typography>Clear List</Typography>
        </Button>
      </Grid>
      <Divider />
      <Grid container justify="center" style={{ overflowY: "auto" }}>
        <div className={classes.cardContainer}>
          {nominees &&
            nominees.map(
              (movie) =>
                !movie.Error && (
                  <NomineeCard
                    key={`nominee-${movie.imdbID}`}
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

export default NomineesList;
