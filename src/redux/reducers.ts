import {combineReducers} from '@reduxjs/toolkit';
import app from './app';
import auth from './auth';

export const allReducers = combineReducers({
  app: app,
  auth: auth,
});
