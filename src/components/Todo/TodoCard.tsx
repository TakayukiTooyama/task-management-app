/** @format */

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import { TodoList, DoneList } from '.';
import { db } from '../../firebase/index';
import { Todo } from '../../reducks/boards/types';

type Props = {
  boardId: string;
  boardTitle: string;
};

const useStyles = makeStyles({
  root: {
    margin: '0 auto',
    width: '95%',
    maxWidth: 550,
  },
});

const TodoCard = ({ boardId }: Props) => {
  const classes = useStyles();
  const [todosState, setTodosState] = useState<Todo[]>([]);
  console.log(todosState);

  useEffect(() => {
    const unSub = db
      .collection('boards')
      .doc(boardId)
      .collection('todos')
      .orderBy('created_at', 'desc')
      .onSnapshot((snapshot) => {
        setTodosState(
          snapshot.docs.map((doc) => ({
            todoId: doc.id,
            todoTitle: doc.data().todoTitle as string,
            done: doc.data().done as boolean,
          }))
        );
      });
    return () => unSub();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className={classes.root}>
      <TodoList boardId={boardId} todos={todosState} />
      <DoneList todos={todosState} />
    </div>
  );
};

export default TodoCard;
