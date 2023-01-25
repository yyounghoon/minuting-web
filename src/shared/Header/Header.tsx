import {
  headerStyles,
  logoStyle,
  menuStyle,
  searchStyle,
} from './Header.styles';
import Image from 'next/image';
import logo from '../../../public/logo.svg';
import NavList from '../Navigation/NavList/NavList';
import Search from '../Search/Search';

function Header() {
  return (
    <div css={headerStyles}>
      <div css={logoStyle}>
        <Image src={logo} width={130} height={50} alt={'logo'} />
      </div>
      <div css={menuStyle}>
        <NavList />
      </div>
      <div css={searchStyle}>
        <Search />
      </div>
    </div>
  );
}

export default Header;
