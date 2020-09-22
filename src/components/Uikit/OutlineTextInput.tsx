/** @format */

import React from 'react';
import { OutlinedInput } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type Props = {
  fullWidth: boolean;
  multiline?: boolean;
  required: boolean;
  value: string;
  rows: number;
  type: string;
  onChange?: any;
  autoFocus?: boolean;
  onClick?: any;
};

const useStyles = makeStyles({
  input: {
    height: 40,
    backgroundColor: 'white',
  },
});

const OutlineTextInput = ({
  fullWidth,
  multiline,
  required,
  value,
  rows,
  type,
  autoFocus,
  onChange,
  onClick,
}: Props) => {
  const classes = useStyles();
  return (
    <OutlinedInput
      className={classes.input}
      fullWidth={fullWidth}
      multiline={multiline}
      required={required}
      value={value}
      rows={rows}
      type={type}
      autoFocus={autoFocus}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default OutlineTextInput;
