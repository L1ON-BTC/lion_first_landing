import React from 'react';

import { StyledButton } from './Button.styles';

type Props = {
  children: string | JSX.Element | JSX.Element[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
};

export const Button = ({ children, onClick, width }: Props) => (
  <StyledButton onClick={onClick} width={width}>
    {children}
  </StyledButton>
);
