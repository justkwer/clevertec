import { PlaceholderCss, SpanCss } from '@core/theme';
import styled from 'styled-components';

export const RegistrationInputStyled = styled.div<{ errors: string }>`
  width: 100%;
  hr {
    border-color: ${({ theme, errors }) => (errors === undefined ? theme.colors.greyBlack20 : theme.colors.negative)};
    border-style: solid;
  }

  & > p {
    ${SpanCss};
    padding: 2px 12px;
    display: block;
    color: ${({ theme, errors }) => errors && theme.colors.negative};

    span {
      color: ${({ theme }) => theme.colors.negative};
    }
  }

  & > a {
    padding: 2px 12px;
    ${SpanCss};

    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

export const InputStyled = styled.div`
  width: 100%;
  height: 56px;
  ${({ theme }) => theme.flex.row};
  gap: 4px;
  padding: 6px 12px;
  background: ${({ theme }) => theme.colors.greyBlack};
  border-radius: 4px;
  align-items: end;
  position: relative;

  input:focus + label,
  input:not(:placeholder-shown) + label {
    transform: translateY(-1em);
    ${SpanCss};
  }

  input:not(:placeholder-shown) {
    height: 50%;
  }

  input {
    width: 100%;
    height: 100%;
    border: none;
    background: ${({ theme }) => theme.colors.greyBlack};
    caret-color: ${({ theme }) => theme.colors.primary};

    &::placeholder {
      color: transparent;
    }

    &:focus {
      outline: none;
      height: 50%;
    }
  }

  label {
    position: absolute;
    top: calc(50% - 0.5em);
    left: 0;
    padding: 0 12px;
    pointer-events: none;
    transform-origin: 0 0;
    transition: transform 0.15s ease-in-out;
    ${PlaceholderCss};
  }
`;
