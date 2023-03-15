import { PageGenerator } from '@components';
import { H2 } from '@core/theme';

import { config } from './config';
import { ManualStyled } from './styled';

export const Manual = () => {
  const { title, paragraph } = config;

  return (
    <ManualStyled>
      <H2>{title}</H2>
      <PageGenerator paragraph={paragraph} />
    </ManualStyled>
  );
};
