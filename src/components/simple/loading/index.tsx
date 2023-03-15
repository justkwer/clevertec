import { LoadingSvg } from '@assets';
import { useAppSelector } from '@core/hooks/redux';

import { LoadingStyled } from './styled';

export const Loading = () => {
  const { loading } = useAppSelector((state) => state.books);

  return (
    <LoadingStyled data-test-id='loader' active={!loading}>
      <LoadingSvg />
    </LoadingStyled>
  );
};
