import { useDispatch } from 'react-redux';
import { Filter } from '@assets';
import { useAppSelector } from '@core/hooks/redux';
import { toggleFilter } from '@store/reducers/form';

import { FilterBarStyled } from '../styled';

export const FilterBar = () => {
  const filter = useAppSelector((state) => state.form.filter);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(toggleFilter());
  };

  return (
    <FilterBarStyled active={filter} onClick={handleClick} data-test-id='sort-rating-button'>
      <Filter />
      <span>По рейтингу</span>
    </FilterBarStyled>
  );
};
