import React from 'react';

import './button.module.scss';

type Props = {
  children: string | JSX.Element | JSX.Element[];
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  width?: string;
};

export const Button = ({ children, onClick, width }: Props) => (
  <button className="button" onClick={onClick}>
    {children}
  </button>
);
