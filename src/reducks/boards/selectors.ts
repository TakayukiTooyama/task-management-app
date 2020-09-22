/** @format */

import { createSelector } from 'reselect';
import { InitialState } from '../store/initialState';

const BoardsSelector = (state: InitialState) => state;

export const getBoards = createSelector(
  [BoardsSelector],
  (state) => state.boards
);
