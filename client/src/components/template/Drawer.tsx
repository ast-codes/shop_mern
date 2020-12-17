import React, { FC, forwardRef } from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { useTheme } from '@material-ui/core/styles';
import { navItems } from '../../collections/navigation';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { NavItemType } from '../../types/navigation';
import { Link, useRouteMatch } from 'react-router-dom';

interface Props {
  classes: Record<
    'drawer' | 'drawerOpen' | 'drawerClose' | 'toolbar',
    string
  >;
  handleDrawerClose: () => void;
  isOpen: boolean;
}

export const SideBar: FC<Props> = ({
  classes,
  handleDrawerClose,
  isOpen,
}) => {
  console.log('asd');

  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: isOpen,
        [classes.drawerClose]: !isOpen,
      })}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: isOpen,
          [classes.drawerClose]: !isOpen,
        }),
      }}
    >
      <div className={classes.toolbar}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {navItems.map((navItem) => {
          return <ListItemLink key={navItem.to} {...navItem} />;
        })}
      </List>
    </Drawer>
  );
};

function ListItemLink(props: NavItemType) {
  const { icon: Icon, text, to } = props;
  const match = useRouteMatch(to);

  const CustomLink = React.useMemo(
    () =>
      React.forwardRef<HTMLAnchorElement>((linkProps, ref) => (
        <Link ref={ref} to={to} {...linkProps} />
      )),
    [to],
  );

  return (
    <li>
      <ListItem
        selected={match?.isExact}
        button
        component={CustomLink}
      >
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} />
      </ListItem>
    </li>
  );
}
