import { ReactNode } from 'react';

import { SeparatorStyled } from './styled';

export const Separator = ({ children }: { children: ReactNode }) => <SeparatorStyled>{children}</SeparatorStyled>;
