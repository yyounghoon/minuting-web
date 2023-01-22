import NavItem from '../NavItem/NavItem';
import { NavListStyles } from './NavList.styles';

function NavList() {
  return (
    <ul css={NavListStyles}>
      <NavItem title="HOME" path={'/'} />
      <NavItem title="MY" path={'myPage'} />
      <NavItem title="CREATE" path={'/createMinutes'} />
      {/* 현재 광민님 소스 부분 병합 중이어서 주석처리 */}
      {/* <NavItem title="LIST" path={'/minuteList'} /> */}
    </ul>
  );
}

export default NavList;
