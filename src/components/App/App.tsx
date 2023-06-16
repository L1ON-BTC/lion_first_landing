import { useMediaQuery } from 'react-responsive';

import Button from '../Button';
import Icon from '../Icon';
import {
  ButtonWrapper,
  Content,
  Follow,
  Logo,
  LogoWrapper,
  StyledSocial,
  Title,
  WordmarkWrapper,
  Wrapper,
} from './App.styles';

const App = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <Wrapper>
      <LogoWrapper>
        <Logo
          name="logo"
          width={isTabletOrMobile ? '70px' : '93px'}
          height={isTabletOrMobile ? '70px' : '93px'}
        />
      </LogoWrapper>

      <WordmarkWrapper>
        <Icon
          name="wordmark"
          width={isTabletOrMobile ? '96px' : '96px'}
          height={isTabletOrMobile ? '27px' : '27px'}
        />
      </WordmarkWrapper>

      <Title>L1 on Bitcoin</Title>

      <Content>
        A new platform to launch BRC-20&#8217;s, BRC-721&#8217;s and many other utilities
        Bitcoin blockchain
      </Content>

      <ButtonWrapper>
        <Button width="150px">Coming Soon</Button>
      </ButtonWrapper>

      <Follow>Follow us for updates</Follow>

      <StyledSocial />
    </Wrapper>
  );
};

export default App;
