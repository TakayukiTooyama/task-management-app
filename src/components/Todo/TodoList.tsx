/** @format */

import React, { useState } from 'react';
import { makeStyles, Paper } from '@material-ui/core';

import { OutlineTextInput } from '../Uikit';
import { TodoListItem } from '.';
import { addTodo } from '../../reducks/boards/operations';
import { useDispatch } from 'react-redux';
import { Todo } from '../../reducks/boards/types';
// import { addBoard, addTodo } from '../../reducks/boards/operations';

type Props = {
  boardId: string;
  todos: Todo[];
};

const useStyles = makeStyles({
  paper: {
    padding: '2rem',
    backgroundColor: '#d9d9d9',
  },
});

const TodoList = ({ boardId, todos }: Props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [todoTitle, setTodoTitle] = useState('');
  const todoList = todos.filter((todo) => todo.done === false);

  const InputTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todoTitle === '') {
      return false;
    }
    dispatch(addTodo(boardId, todoTitle));
    setTodoTitle('');
  };

  return (
    <>
      <Paper className={classes.paper}>
        <h3 className="u-text__headline u-text-center">To Do</h3>
        <form onSubmit={(e) => onSubmit(e)}>
          <OutlineTextInput
            fullWidth={true}
            multiline={false}
            required={false}
            value={todoTitle}
            rows={1}
            type="text"
            onChange={InputTodo}
          />
        </form>
        {todoList.length > 0 &&
          todoList.map((item: Todo) => (
            <TodoListItem
              key={item.todoId}
              todoId={item.todoId}
              todoTitle={item.todoTitle}
              done={item.done}
            />
          ))}
      </Paper>
      <div className="module-spacer--medium"></div>
    </>
  );
};

export default TodoList;
