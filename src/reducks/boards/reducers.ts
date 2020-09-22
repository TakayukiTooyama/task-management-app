/** @format */

import * as Actions from './actions';
import initialState from '../store/initialState';
import { Action } from './types';

export const BoardsReducer = (state = initialState.boards, action: Action) => {
  switch (action.type) {
    case Actions.FETCH_BOARDS:
      return action.payload;
    case Actions.ADD_BOARD:
      return [...state, action.payload];
    case Actions.DELETE_BOARD:
      return action.payload;
    case Actions.ADD_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
