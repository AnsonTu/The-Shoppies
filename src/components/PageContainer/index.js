import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  rootContainer: {
    maxWidth: "1200px",
    minHeight: "100vh",
    margin: "auto",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3)
  }
}));

const PageContainer = (props) => {
  const classes = useStyle();

  return (
    <Grid
      item
      container
      className={classes.rootContainer}
      direction="column"
      alignItems="center"
    >
      {props.children}
    </Grid>
  );
};

export default PageContainer;
