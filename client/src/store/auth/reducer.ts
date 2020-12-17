import { AuthState, User } from '../../types/auth';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: AuthState = {
  user: null,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authStart(state) {
      state.loading = true;
    },
    authSucces(state, action: PayloadAction<User>) {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
    },
    authSignOutSucess(state) {
      state.loading = false;
      state.user = null;
    },
    authError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});
