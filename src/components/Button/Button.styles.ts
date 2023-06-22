import { styled } from 'styled-components';

export const StyledButton = styled.button<{ width?: string }>`
  width: ${({ width }) => (width ? width : '100%')};
`;
