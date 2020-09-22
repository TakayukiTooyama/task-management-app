/** @format */

import React from 'react';
import { Checkbox } from '@material-ui/core';

type Props = {
  size?: 'small' | 'medium' | undefined;
  checked?: boolean;
  inputProps?: {
    'aria-label': string;
  };
  disabled?: boolean;
  onChange?: any;
  onClick?: any;
};

const DefaultCheckbox = ({
  size,
  checked = false,
  inputProps,
  disabled = false,
  onChange,
  onClick,
}: Props) => {
  return (
    <Checkbox
      checked={checked}
      color="primary"
      size={size}
      inputProps={inputProps}
      disabled={disabled}
      onChange={onChange}
      onClick={onClick}
    />
  );
};

export default DefaultCheckbox;
