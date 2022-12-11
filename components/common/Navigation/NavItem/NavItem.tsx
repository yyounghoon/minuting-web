import { NavItemStyles } from './NavItem.styles';
import Link from 'next/link';

type NavItemProps = {
  title: string;
  path: string;
};

function NavItem({ title, path }: NavItemProps) {
  return (
    <li css={NavItemStyles}>
      <Link href={path}>{title}</Link>
    </li>
  );
}

export default NavItem;
