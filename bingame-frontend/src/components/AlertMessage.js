import React from 'react';
import Alert from '@material-ui/lab/Alert';
import Collapse from '@material-ui/core/Collapse';
import { useStyles } from "./Theme";
import { selectAlert } from '../features/Alert/AlertSlice';
import { useSelector } from 'react-redux';

export default function AlertMessage() {
  const classes = useStyles();
  const alert = useSelector(selectAlert);
console.log(alert)
  return (
    <div className={classes.alert}>
      <Collapse in={alert.show}>
        <Alert severity={alert.type}>{alert.message}</Alert>
      </Collapse>
    </div>
  );
}