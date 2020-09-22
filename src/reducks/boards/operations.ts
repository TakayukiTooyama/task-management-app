/** @format */

import { push } from 'connected-react-router';

import { db, FirebaseTimestamp } from '../../firebase';
import { fetchBoardsAction } from './actions';
import { Board } from './types';

const boardsRef = db.collection('boards');

export const fetchBoards = (boards: Board[]) => {
  return async (dispatch: any) => {
    dispatch(fetchBoardsAction(boards));
  };
};

export const addBoard = (title: string) => {
  return async (dispatch: any) => {
    const boardId = boardsRef.doc().id;
    const data = {
      boardId: boardId,
      boardTitle: title,
      created_at: FirebaseTimestamp.now(),
      updated_at: FirebaseTimestamp.now(),
    };
    boardsRef
      .doc(boardId)
      .set(data)
      .then(() => {
        dispatch(push(`/boards/${boardId}`));
      });
  };
};

export const deleteBoard = (boardId: string) => {
  return async (dispatch: any, getState: any) => {
    boardsRef
      .doc(boardId)
      .delete()
      .then(() => {
        dispatch(push('/'));
      });
  };
};

export const addTodo = (boardId: string, todoTitle: string) => {
  return async (dispatch: any) => {
    const todoId = db.collection('boards').doc().id;
    const data = {
      todoId: todoId,
      todoTitle,
      done: false,
      created_at: FirebaseTimestamp.now(),
      updated_at: FirebaseTimestamp.now(),
    };
    boardsRef.doc(boardId).collection('todos').doc(todoId).set(data);
  };
};

export const editTodo = (
  todoId: string,
  todoTitle: string,
  boardId: string
) => {
  return async (dispatch: any) => {
    const data = {
      todoTitle,
      updated_at: FirebaseTimestamp.now(),
    };
    boardsRef
      .doc(boardId)
      .collection('todos')
      .doc(todoId)
      .set(data, { merge: true });
  };
};

export const doneTodo = (todoId: string, done: boolean, boardId: string) => {
  return async (dispatch: any) => {
    const data = {
      done,
      updated_at: FirebaseTimestamp.now(),
    };
    boardsRef
      .doc(boardId)
      .collection('todos')
      .doc(todoId)
      .set(data, { merge: true });
  };
};

export const deleteTodo = (todoId: string, boardId: string) => {
  return async (dispatch: any) => {
    boardsRef.doc(boardId).collection('todos').doc(todoId).delete();
  };
};
