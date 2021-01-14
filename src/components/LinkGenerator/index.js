import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import LinkIcon from "@material-ui/icons/Link";

const useStyle = makeStyles({
  paper: {
    width: "1000px",
    height: "75px",
    marginTop: "40px",
    display: "flex",
    alignItems: "center"
  },
  linkField: {
    width: "765px",
    marginLeft: "14px"
  },
  copyButton: {
    marginRight: "-16px"
  },
  linkButton: {
    width: "185px",
    marginLeft: "20px",
    textTransform: "none",
    fontSize: "18px",
    backgroundColor: "#6EC9EB"
  },
  linkIcon: {
    marginRight: "8px"
  }
});

const LinkGenerator = (props) => {
  const { nominees } = props;
  const classes = useStyle();
  const [link, setLink] = useState("");

  const generateLink = () => {
    const nomineeIds = nominees.map((nominee) => nominee.imdbID);
    let url = nomineeIds.length > 0 ? `?id[0]=${nomineeIds[0]}` : "";
    for (let i = 1; i < nomineeIds.length; i++) {
      url += `&id[${i}]=${nomineeIds[i]}`;
    }
    setLink(`${window.location.origin}/${url}`);
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
        <LinkIcon className={classes.linkIcon} />
        Generate Link
      </Button>
    </Paper>
  );
};

export default LinkGenerator;
