import NavItem from '../NavItem/NavItem';
import { NavListStyles } from './NavList.styles';

function NavList() {
  return (
    <ul css={NavListStyles}>
      <NavItem title="HOME" path={'/'} />
      <NavItem title="MY" path={'myPage'} />
    </ul>
  );
}

export default NavList;
