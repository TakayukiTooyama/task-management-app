/** @format */

import { Board } from './types';

export const FETCH_BOARDS = 'FETCH_BOARDS';
export const fetchBoardsAction = (boards: Board[]) => {
  return {
    type: 'FETCH_BOARDS',
    payload: boards,
  };
};

export const ADD_BOARD = 'ADD_BOARD';
export const addBoardAction = (board: Board) => {
  return {
    type: 'ADD_BOARD',
    payload: {
      boardId: board.boardId,
      boardTitle: board.boardTitle,
    },
  };
};

export const DELETE_BOARD = 'DELETE_BOARD';
export const deleteBoardAction = (boards: Board[]) => {
  return {
    type: 'DELETE_BOARD',
    payload: boards,
  };
};

export const ADD_TODO = 'ADD_TODO';
export const addTodoAction = (boards: Board) => {
  return {
    type: 'ADD_TODO',
    payload: boards,
  };
};
