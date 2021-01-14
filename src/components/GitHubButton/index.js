import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyle = makeStyles({
  buttonIcon: {
    width: "40px",
    height: "40px",
    color: "#FFFFFF"
  }
});

const GitHubButton = () => {
  const classes = useStyle();

  return (
    <IconButton
      href="https://github.com/AnsonTu/The-Shoppies"
      target="_blank"
      style={{ marginTop: "12px" }}
    >
      <GitHubIcon className={classes.buttonIcon} />
    </IconButton>
  );
};

export default GitHubButton;
