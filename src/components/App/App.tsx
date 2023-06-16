import { styled } from 'styled-components';

import { default as StyledButton } from '../Button';
import Icon from '../Icon';
import { default as StyledSocial } from '../Social';
import { Wrapper } from './App.styles';

const Logo = styled(Icon)`
  transition: transform 0.3s ease-in-out;
  margin-top: 64px;
  margin-bottom: 22px;

  &:hover {
    transform: rotate(-9deg) scale(1.02);
  }
`;

const Button = styled(StyledButton)`
  margin: 40px 0;
`;

const Social = styled(StyledSocial)`
  margin-top: 24px;
`;

const Title = styled.div`
  margin-bottom: -10px;
`;

const Wordmark = styled(Icon)`
  margin-bottom: 30px;
`;

const App = () => (
  <Wrapper>
    <Logo name="logo" />
    <Wordmark name="wordmark" />
    <Title>
      <h3>L1 on Bitcoin</h3>
    </Title>

    <p>
      A new platform to launch BRC-20U+2019s, BRC-721U+2019s and many other utilities
      Bitcoin blockchain
    </p>
    <Button>Coming Soon</Button>
    <p>Follow us for updates</p>
    <Social />
  </Wrapper>
);

export default App;
