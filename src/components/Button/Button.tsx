import { StyledButton } from './Button.styles';

type Props = {
  children: string | JSX.Element | JSX.Element[];
  width?: string;
};

const Button = ({ children, width }: Props) => (
  <StyledButton width={width}>{children}</StyledButton>
);

export default Button;
