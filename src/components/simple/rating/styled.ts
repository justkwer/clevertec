import { Star } from '@assets';
import styled from 'styled-components';

export const RatingStyled = styled.div`
  ${({ theme }) => theme.flex.row};
  gap: 5px;
  justify-content: start;
  text-align: start;
  font-size: 0.875em;
`;

export const StarStyled = styled(Star)<{ fill: boolean }>`
  fill: ${({ theme, fill }) => (fill ? theme.colors.yellow : 'none')};
`;
