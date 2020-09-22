/** @format */

import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core';

import { Button, OutlineTextInput } from '../Uikit';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../reducks/boards/operations';

type Props = {
  title: string;
  todoId: string;
  setEditting: React.Dispatch<React.SetStateAction<boolean>>;
};

const useStyles = makeStyles({
  background: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100vh',
    height: '100vh',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
});

function TodoEdit({ title, todoId, setEditting }: Props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState(title);

  const boardId = window.location.pathname.split('/boards/')[1];

  const handleClose = useCallback(() => {
    setEditting(false);
  }, [setEditting]);

  const InputTodoTitle = useCallback(
    (e) => {
      setTodoTitle(e.target.value);
    },
    [setTodoTitle]
  );

  return (
    <>
      <OutlineTextInput
        fullWidth={false}
        multiline={false}
        required={true}
        value={todoTitle}
        rows={1}
        type="text"
        autoFocus={true}
        onChange={InputTodoTitle}
      />
      <Button
        label="保存"
        color="primary"
        onClick={() => {
          dispatch(editTodo(todoId, todoTitle, boardId));
          handleClose();
        }}
      />
      <div className={classes.background} onClick={handleClose}></div>
    </>
  );
}

export default TodoEdit;
