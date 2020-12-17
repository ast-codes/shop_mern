import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { appSlice } from '../store/app/reducer';
import { AppState } from '../types/app';

const appActions = appSlice.actions;

export const useApp = () => {
  const dispatch = useDispatch();
  const state = useSelector<RootState, AppState>(
    (state) => state.app,
  );

  const actions = {
    toggleTheme() {
      dispatch(appActions.toggleTheme());
    },
    toggleDrawer() {
      dispatch(appActions.toggleDrawer());
    },
  };
  return {
    state,
    actions,
  };
};
