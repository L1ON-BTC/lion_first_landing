import { css, styled } from 'styled-components';

export const Svg = styled.svg`
  fill: var(--accent);
`;

export const Wrapper = styled.div<{
  $bordered?: boolean | undefined;
  width?: string;
  height?: string;
}>`
  width: ${({ width }) => width && width};
  height: ${({ height }) => height && height};
  display: flex;
  align-items: center;

  ${({ $bordered }) =>
    $bordered &&
    css`
      align-items: center;
      border: 1px solid var(--accent);
      display: flex;
      height: 60px;
      justify-content: center;
      width: 60px;
      padding: 20px;
      position: relative;
      transform: rotate(45deg);

      svg {
        transform: rotate(-45deg);
      }
    `}

  svg {
    width: 100%;
  }
`;
