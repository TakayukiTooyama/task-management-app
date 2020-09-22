/** @format */

import { firestore } from 'firebase';

export type Board = {
  boardId: string;
  boardTitle: string;
};

export type Todo = {
  todoId: string;
  todoTitle: string;
  done: boolean;
};

export type TimeStamp = {
  created_at: firestore.Timestamp;
  updated_at: firestore.Timestamp;
};

//==============
// Action Type
//==============
export type ActionType =
  | 'ADD_BOARD'
  | 'DELETE_BOARD'
  | 'FETCH_BOARDS'
  | 'ADD_TODO'
  | 'EDIT_TODO'
  | 'DELETE_TODO'
  | 'DONE_TODO';

export type ActionPayload = {} & Board[];

export type Action = {
  type: ActionType;
  payload: ActionPayload;
};
