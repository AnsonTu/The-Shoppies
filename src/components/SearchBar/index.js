import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const useStyle = makeStyles({
  paper: {
    width: "900px",
    height: "120px"
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

  return (
    <Grid
      item
      container
      xs={12}
      justify="center"
      style={{ margin: "80px 0 40px" }}
    >
      <Paper className={classes.paper} elevation={12}>
        <Typography className={classes.title}>
          Search for your favourite movies and nominate them!
        </Typography>
        <Grid item container className={classes.searchComponents}>
          <TextField
            className={classes.searchField}
            variant="outlined"
            size="small"
          />
          <Button className={classes.searchButton} variant="contained">
            <SearchIcon />
            Search
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default SearchBar;
