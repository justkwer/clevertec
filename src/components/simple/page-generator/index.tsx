import { Fragment } from 'react';
import { PageGeneratorProp } from '@core/types';

import { PageGeneratorStyled } from './styled';

export const PageGenerator = ({ paragraph }: { paragraph: PageGeneratorProp[] }) => (
  <PageGeneratorStyled>
    {paragraph.map(({ item, id, ...rest }) => (
      <Fragment key={id}>
        <li>{item}</li>
        {rest.paragraph && <PageGenerator paragraph={rest.paragraph} />}
      </Fragment>
    ))}
  </PageGeneratorStyled>
);
