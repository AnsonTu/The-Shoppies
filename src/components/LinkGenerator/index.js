import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";

const useStyle = makeStyles({
  paper: {
    width: "1000px",
    height: "75px",
    marginTop: "40px",
    display: "flex",
    alignItems: "center"
  },
  linkField: {
    width: "820px",
    marginLeft: "14px"
  },
  copyButton: {
    marginRight: "-16px"
  },
  linkButton: {
    width: "150px",
    textTransform: "none",
    fontSize: "18px",
    backgroundColor: "#6EC9EB"
  }
});

const LinkGenerator = (props) => {
  const { nominees } = props;
  const classes = useStyle();
  const [link, setLink] = useState("");

  const generateLink = () => {
    const nomineeIds = nominees.map((nominee) => nominee.imdbID);
    let url = nomineeIds.length > 0 ? `?id[]=${nomineeIds[0]}` : "";
    for (let i = 1; i < nomineeIds.length; i++) {
      url += `&id[]=${nomineeIds[i]}`;
    }
    // TODO: Change to use ENV host
    setLink(`http://localhost:3000/${url}`);
  };

  const copyToClipBoard = () => {
    navigator.clipboard.writeText(link);
  };

  return (
    <Paper className={classes.paper} elevation={12}>
      <TextField
        className={classes.linkField}
        variant="outlined"
        size="small"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                className={classes.copyButton}
                onClick={copyToClipBoard}
              >
                <FileCopyIcon />
              </IconButton>
            </InputAdornment>
          )
        }}
        value={link}
      />
      <Button className={classes.linkButton} onClick={generateLink}>
        Generate Link
      </Button>
    </Paper>
  );
};

export default LinkGenerator;
