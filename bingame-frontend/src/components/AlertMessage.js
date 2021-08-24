import React from 'react';
import Alert from '@material-ui/lab/Alert';
import { useStyles } from "./Theme";
import { selectAlert } from '../features/counter/Alert/AlertSlice';
import { useSelector, useDispatch } from 'react-redux';

export default function AlertMessage() {
  const classes = useStyles();
  const alert = useSelector(selectAlert);

  return (
    <div className={classes.alert}>
      <Alert severity="error">Here is gonna be a message</Alert>
    </div>
  );
}