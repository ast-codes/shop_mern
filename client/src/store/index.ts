import { combineReducers, configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { appSlice } from './app/reducer';
import { authSlice } from './auth/reducer';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authSlice.reducer,
  app: appSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    sagaMiddleware,
  ],
});

export type RootState = ReturnType<typeof rootReducer>;
