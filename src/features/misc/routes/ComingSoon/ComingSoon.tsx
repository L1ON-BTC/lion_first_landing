import { useMediaQuery } from 'react-responsive';

import Button from '@/components/Button';
import { Head } from '@/components/Head';
import Icon from '@/components/Icon';
import { useUserStore } from '@/stores/user';

import {
  ButtonWrapper,
  Content,
  Follow,
  Logo,
  LogoWrapper,
  SocialWrapper,
  Title,
  WordmarkWrapper,
  Wrapper,
} from './ComingSoon.styled';

export const ComingSoon = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' });

  const { addresses, addAddresses } = useUserStore(({ addresses, addAddresses }) => ({
    addresses,
    addAddresses,
  }));

  console.log(addresses);

  return (
    <>
      <Head description="L1ON - Coming Soon" />

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
          A new platform to launch BRC-20 tokens, BRC-721 tokens, and various other
          utilities on the Bitcoin blockchain.
        </Content>

        <ButtonWrapper>
          <Button onClick={() => addAddresses()} width="150px">
            Coming Soon
          </Button>
        </ButtonWrapper>

        <Follow>Follow us for updates</Follow>

        <SocialWrapper>
          <a href="https://twitter.com/L1ON_BTC" target="_blank" rel="noreferrer">
            <Icon
              name="twitter"
              bordered={true}
              width={isTabletOrMobile ? '96px' : '96px'}
              height={isTabletOrMobile ? '27px' : '27px'}
            />
          </a>
        </SocialWrapper>
      </Wrapper>
    </>
  );
};
