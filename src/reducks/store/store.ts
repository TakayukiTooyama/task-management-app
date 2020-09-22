/** @format */

import {
  createStore as reduxCreateStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';

import { BoardsReducer } from '../boards/reducers';

export default function createStore(history: any) {
  let middleWares = [routerMiddleware(history), thunk];
  if (process.env.NODE_ENV === 'development') {
    const logger = createLogger({
      collapsed: true,
      diff: true,
    });
    middleWares.push(logger);
  }

  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      boards: BoardsReducer,
    }),
    applyMiddleware(...middleWares)
  );
}
