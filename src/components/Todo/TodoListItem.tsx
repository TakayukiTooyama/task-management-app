/** @format */

import React, { useState } from 'react';
import { IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

import { Checkbox } from '../Uikit';
import TodoEdit from './TodoEdit';
import { deleteTodo, doneTodo } from '../../reducks/boards/operations';
import { useDispatch } from 'react-redux';

type Props = {
  todoId: string;
  todoTitle: string;
  done: boolean;
};

const useStyles = makeStyles({
  root: {
    maxWidth: 600,
    margin: '0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

const TodoListItem = ({ todoId, todoTitle, done }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [editting, setEditting] = useState(false);
  const boardId = window.location.pathname.split('/boards/')[1];

  const handleToggleEditting = () => {
    setEditting(true);
  };

  return (
    <>
      {editting ? (
        <TodoEdit title={todoTitle} todoId={todoId} setEditting={setEditting} />
      ) : (
        <div className={classes.root}>
          <div>
            {done === false ? (
              <Checkbox
                checked={false}
                inputProps={{ 'aria-label': 'todo-checkbox' }}
                onClick={() => dispatch(doneTodo(todoId, true, boardId))}
              />
            ) : (
              <Checkbox
                checked={true}
                inputProps={{ 'aria-label': 'todo-checkbox' }}
                onClick={() => dispatch(doneTodo(todoId, false, boardId))}
              />
            )}
            {todoTitle}
          </div>
          <div>
            {done === false ? (
              <IconButton onClick={handleToggleEditting}>
                <EditIcon />
              </IconButton>
            ) : null}
            <IconButton onClick={() => dispatch(deleteTodo(todoId, boardId))}>
              <DeleteIcon />
            </IconButton>
          </div>
        </div>
      )}
    </>
  );
};

export default TodoListItem;
