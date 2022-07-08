import {createSlice} from '@reduxjs/toolkit';

type initialStateAuthProps = {
  user: object | null;
};

const initialState: initialStateAuthProps = {
  user: null,
};

const authSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {},
  extraReducers: {},
});

export const {actions, reducer: auth} = authSlice;

export default auth;
