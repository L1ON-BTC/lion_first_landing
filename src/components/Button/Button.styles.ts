import { styled } from 'styled-components';

export const StyledButton = styled.button<{ width?: string }>`
  border: none;
  background-color: var(--accent);
  color: var(--bg-primay);
  display: inline-block;
  font-family: 'Roboto Mono', monospace;
  font-size: 0.75em;
  width: ${({ width }) => (width ? width : '100%')};
  padding: 14px;
`;
