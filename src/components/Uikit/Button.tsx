/** @format */

import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

type Props = {
  label: string;
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
  startIcon?: React.ReactNode;
  disabled?: boolean;
  variant?: 'contained' | 'text' | 'outlined';
  onClick?: any;
};

const useStyles = makeStyles({
  button: {},
});

const DefaultButton = ({
  label,
  color,
  startIcon,
  disabled = false,
  variant = 'contained',
  onClick,
}: Props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      color={color}
      variant={variant}
      startIcon={startIcon}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </Button>
  );
};

export default DefaultButton;
