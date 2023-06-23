import { PopupButton } from '@typeform/embed-react';
import { useMediaQuery } from 'react-responsive';

import { Head } from '@/components/Head';
import Icon from '@/components/Icon';

import {
  ButtonWrapper,
  Content,
  Follow,
  LogoWrapper,
  SocialWrapper,
  Title,
  WordmarkWrapper,
  Wrapper,
  StyledMarquee,
  MarqueeWrapper,
  Page,
} from './ComingSoon.styled';

export const ComingSoon = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <>
      <Head description="L1ON - Coming Soon" />

      <Page>
        <Wrapper>
          <LogoWrapper>
            <Icon
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

          <Title>Bitcoin Utility Platform</Title>

          <Content>
            Offering customized solutions for <br /> your project launch
          </Content>

          <ButtonWrapper>
            <PopupButton id="VXiSRflu" size={60}>
              Apply Project for Launchpad
            </PopupButton>
          </ButtonWrapper>

          <Follow>Follow us for updates</Follow>

          <SocialWrapper>
            <a href="https://twitter.com/L1ON_BTC" target="_blank" rel="noreferrer">
              <Icon
                name="twitter"
                bordered={true}
                width={isTabletOrMobile ? '83px' : '83px'}
                height={isTabletOrMobile ? '27px' : '27px'}
              />
            </a>
          </SocialWrapper>
        </Wrapper>

        <MarqueeWrapper>
          <StyledMarquee autoFill>
            <div>BRC-721</div>

            <div>
              <Icon name="logo" width={'23px'} height={'23px'} />
            </div>

            <div>Launchpad</div>

            <div>
              <Icon name="logo" width={'23px'} height={'23px'} />
            </div>

            <div>Ordinals</div>

            <div>
              <Icon name="logo" width={'23px'} height={'23px'} />
            </div>

            <div>BRC-20</div>

            <div>
              <Icon name="logo" width={'23px'} height={'23px'} />
            </div>
          </StyledMarquee>
        </MarqueeWrapper>
      </Page>
    </>
  );
};
