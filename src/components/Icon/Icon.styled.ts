import { css, styled } from 'styled-components';

export const Svg = styled.svg`
  fill: var(--accent);
`;

export const Wrapper = styled.div<{ bordered?: boolean }>`
  ${({ bordered }) =>
    bordered &&
    css`
      align-items: center;
      border: 1px solid var(--accent);
      border-radius: 50%;
      display: flex;
      height: 60px;
      justify-content: center;
      width: 60px;
    `}
`;
