import {
  BookmarkBorder,
  BookOutlined,
  CardTravel,
} from '@material-ui/icons';
import { NavItemType } from '../types/navigation';

export const navItems: NavItemType[] = [
  {
    to: '/',
    text: 'Home Page',
    icon: BookOutlined,
  },
  {
    to: '/cart',
    text: 'Cart',
    icon: CardTravel,
  },
  {
    to: '/auth',
    text: 'Authorization',
    icon: BookmarkBorder,
  },
];
