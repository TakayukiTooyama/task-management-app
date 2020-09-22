/** @format */

import React, { useState } from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import { Button, TextInput } from '../Uikit';
import { addBoard } from '../../reducks/boards/operations';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles({
  paper: {
    padding: '2rem',
  },
});

const BoardContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const InputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  return (
    <div className="c-section-container">
      <Paper className={classes.paper} elevation={5}>
        <TextInput
          label="ボード名"
          fullWidth={true}
          multiline={false}
          required={true}
          rows={1}
          type="text"
          value={title}
          onChange={InputTitle}
        />
        <div className="module-spacer--small"></div>
        <Button
          label="作成"
          color="secondary"
          onClick={() => dispatch(addBoard(title))}
        />
      </Paper>
    </div>
  );
};

export default BoardContainer;
