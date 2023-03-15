import { PageGenerator } from '@components';
import { H2 } from '@core/theme';

import { ManualStyled } from '../manual/styled';

import { config } from './config';

export const Contract = () => {
  const { title, paragraph } = config;

  return (
    <ManualStyled>
      <H2>{title}</H2>
      <PageGenerator paragraph={paragraph} />
    </ManualStyled>
  );
};
