import React, { FC } from 'react';
import { Typography } from '@material-ui/core';
import { useRoutes } from '../../hooks/useRoutes';

interface Props {
  classes: Record<'content' | 'toolbar', string>;
}

export const Main: FC<Props> = ({ classes }) => {
  const routes = useRoutes();

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      {routes}
    </main>
  );
};
