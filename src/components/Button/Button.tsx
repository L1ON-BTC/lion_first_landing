import { StyledButton, Wrapper } from './Button.styles';

type Props = {
  children: string | JSX.Element | JSX.Element[];
  className?: string;
};

const Button = ({ children, className }: Props) => {
  return (
    <Wrapper className={className}>
      <StyledButton>{children}</StyledButton>
    </Wrapper>
  );
};

export default Button;
