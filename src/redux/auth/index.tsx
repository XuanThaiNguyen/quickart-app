import {createSlice} from '@reduxjs/toolkit';

export type userProps = {
  email: string;
  familyName: string;
  givenName: string;
  id: string;
  name: string;
  photo: string;
};

type initialStateAuthProps = {
  user: userProps | null;
};

const initialState: initialStateAuthProps = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser: (state, {payload}) => {
      state.user = payload;
    },
  },
  extraReducers: {},
});

export const {actions, reducer: auth} = authSlice;

export default auth;
