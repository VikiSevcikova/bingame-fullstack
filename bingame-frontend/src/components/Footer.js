import React from "react";
import Typography from "@material-ui/core/Typography";
import { useStyles } from "./Theme";

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography align='center'> © {new Date().getFullYear()} VikiSevcikova</Typography>
    </div>
  );
}
