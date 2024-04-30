import {
  DocumentDuplicateIcon,
  HomeIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import { SIDEBAR_TYPE } from './definitions.global';

export const SIDEBAR_CONSTANT: SIDEBAR_TYPE = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  {
    name: 'Invoices',
    href: '/dashboard/invoices',
    icon: DocumentDuplicateIcon,
  },
  { name: 'Customers', href: '/dashboard/customers', icon: UserGroupIcon },
];
