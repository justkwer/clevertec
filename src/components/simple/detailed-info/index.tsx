import { H5 } from '@core/theme';

import { DetailedInfoStyled } from './styled';

export const DetailedInfo = ({ name, info }: { name: string; info: string }) => (
  <DetailedInfoStyled>
    <H5>{name}</H5>
    <span>{info}</span>
  </DetailedInfoStyled>
);
