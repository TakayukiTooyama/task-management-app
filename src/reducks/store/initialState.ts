/** @format */

import { Todo } from '../boards/types';

export type InitialState = {
  boards: {
    boardId: string;
    boardTitle: string;
    todos: Todo[];
  }[];
};

const initialState: InitialState = {
  boards: [],
};

export default initialState;
