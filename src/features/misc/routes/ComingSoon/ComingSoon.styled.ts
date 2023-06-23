import Marquee from 'react-fast-marquee';
import { styled } from 'styled-components';

export const Page = styled.div`
  height: 100%;
  flex-direction: column;
  display: flex;
`;

export const Wrapper = styled.div`
  margin: 0 20px;
  padding-top: 64px;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  flex: 1 0 auto;
  margin-bottom: 50px;

  @media (max-width: 480px) {
    padding-top: 23px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 22px;

  @media (max-width: 480px) {
    justify-content: flex-end;
    margin-bottom: 210px;
  }
`;

export const WordmarkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 52px;
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 0px;
  }
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Content = styled.div`
  font-size: 1.125em;
  font-weight: 600;
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 36px;
  margin-bottom: 79px;
`;

export const Follow = styled.p`
  text-align: center;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 29px;

  a {
    margin: 0 8px;
  }
`;

export const MarqueeWrapper = styled.div`
  width: 101vw;
  overflow: hidden;
  flex-shrink: 0;

  @media (min-width: 480px) and (min-height: 900px) {
    position: absolute;
    top: 75vh;
    left: 50%;
    transform: translate(-50%, -50%) rotate(-3deg);
  }
`;

export const StyledMarquee = styled(Marquee)`
  color: var(--accent);
  background-color: rgba(255, 255, 255, 0.2);
  border-top: 1px solid var(--accent);
  border-bottom: 1px solid var(--accent);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2.75em;
  text-transform: uppercase;
  padding: 20px 0;
  gap: 24px;
  width: 200vw;

  .marquee,
  .initial-child-container {
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
    gap: 24px;
  }

  .child {
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
    white-space: nowrap;

    > {
      flex: 1;
    }
  }
`;
