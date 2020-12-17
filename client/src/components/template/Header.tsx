import React, { FC } from 'react';
import clsx from 'clsx';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Menu as MenuIcon } from '@material-ui/icons';

interface Props {
  handleDrawerOpen: () => void;
  isOpen: boolean;
  classes: Record<
    'appBar' | 'appBarShift' | 'hide' | 'menuButton',
    string
  >;
}

type L = Record<'a', string>;

export const Header: FC<Props> = ({
  handleDrawerOpen,
  isOpen,
  classes,
}) => {
  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen,
      })}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          className={clsx(classes.menuButton, {
            [classes.hide]: isOpen,
          })}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap>
          Shop
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
