/** @format */

import { makeStyles, Paper } from '@material-ui/core';
import React, { useState } from 'react';
import { Todo } from '../../reducks/boards/types';
import { Button } from '../Uikit';
import TodoListItem from './TodoListItem';

type Props = {
  todos: Todo[];
};

const useStyles = makeStyles({
  paper: {
    width: '95%',
    maxWidth: 600,
    padding: '2rem',
    backgroundColor: '#d9d9d9',
  },
});

const DoneList = ({ todos }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const doneList = todos.filter((todo) => todo.done === true);
  const label = open
    ? '完了済みのタスクを非表示にする'
    : '完了済みのタスクを表示する';

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Button label={label} onClick={toggleOpen} />
      <div className="module-spacer--medium"></div>
      {doneList.length > 0 ? (
        <>
          {open ? (
            <Paper className={classes.paper}>
              <h3 className="u-text__headline u-text-center">Done</h3>
              {doneList.length > 0 &&
                doneList.map((item: Todo) => (
                  <TodoListItem
                    key={item.todoId}
                    todoId={item.todoId}
                    todoTitle={item.todoTitle}
                    done={item.done}
                  />
                ))}
            </Paper>
          ) : null}
        </>
      ) : null}
    </>
  );
};

export default DoneList;
