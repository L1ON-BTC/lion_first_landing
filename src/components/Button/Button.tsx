import { StyledButton, Wrapper } from './Button.styles';

type Props = {
  children: string | JSX.Element | JSX.Element[];
};

const Button = ({ children }: Props) => {
  return (
    <Wrapper>
      <StyledButton>{children}</StyledButton>
    </Wrapper>
  );
};

export default Button;
