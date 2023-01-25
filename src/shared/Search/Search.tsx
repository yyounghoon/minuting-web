import { SearchStyles } from './Search.styles';
import Image from 'next/image';
import searchIcon from '../../../public/search-icon.svg';

function Search() {
  return (
    <div css={SearchStyles}>
      <input placeholder={'Search'} />
      <Image src={searchIcon} alt="search-icon" />
    </div>
  );
}

export default Search;
