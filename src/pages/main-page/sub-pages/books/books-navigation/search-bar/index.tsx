import { ChangeEvent, useState } from 'react';
import { useDispatch } from 'react-redux';
import { InputX, Search } from '@assets';
import { searchTextDef } from '@core/constants';
import { useAppSelector } from '@core/hooks/redux';
import { SearchBarProp } from '@core/types';
import { changeText } from '@store/reducers/form';

import { SearchBarBtnStyled, SearchBarStyled } from '../styled';

export const SearchBar = ({ visible, setVisible }: SearchBarProp) => {
  const [isFocus, setIsFocus] = useState(false);
  const { text } = useAppSelector((state) => state.form);
  const dispatch = useDispatch();
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim();

    dispatch(changeText(value === '' ? searchTextDef : value));
  };

  const handleFocus = () => {
    setIsFocus(!isFocus);
  };

  return (
    <SearchBarStyled active={visible} isFocus={isFocus}>
      <Search onClick={setVisible} data-test-id='button-search-open' />
      <input
        type='search'
        placeholder={text}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleFocus}
        data-test-id='input-search'
      />
      <SearchBarBtnStyled active={visible} onClick={setVisible} data-test-id='button-search-close'>
        <InputX />
      </SearchBarBtnStyled>
    </SearchBarStyled>
  );
};
