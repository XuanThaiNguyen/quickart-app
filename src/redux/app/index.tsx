import {createSlice} from '@reduxjs/toolkit';

type initialStateAppProps = {
  isVisited: boolean;
};

const initialState: initialStateAppProps = {
  isVisited: false,
};

const appSlice = createSlice({
  name: 'app',
  initialState: initialState,
  reducers: {
    setIsVisited: state => {
      state.isVisited = true;
    },
  },
  extraReducers: {},
});

export const {actions, reducer: app} = appSlice;

export default app;
