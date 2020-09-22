/** @format */

import React from 'react';
import { TextField } from '@material-ui/core';

type Props = {
  label: string;
  fullWidth: boolean;
  multiline: boolean;
  required: boolean;
  rows: number;
  type: string;
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function TextInput({
  label,
  fullWidth,
  multiline,
  required,
  rows,
  type,
  value,
  onChange,
}: Props) {
  return (
    <TextField
      label={label}
      fullWidth={fullWidth}
      multiline={multiline}
      required={required}
      rows={rows}
      type={type}
      value={value}
      onChange={onChange}
    />
  );
}

export default TextInput;
