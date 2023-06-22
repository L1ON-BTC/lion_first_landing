import Marquee from 'react-fast-marquee';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  max-width: 360px;
  margin: 0 20px;
  margin-top: 64px;

  @media (max-width: 480px) {
    margin: 23px;
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

export const StyledMarquee = styled(Marquee)`
  color: var(--accent);
  background-color: rgba(255, 255, 255, 0.2);
  border-top: 1px solid var(--accent);
  border-bottom: 1px solid var(--accent);
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
  font-size: 2.75em;
  text-transform: uppercase;
  position: absolute;
  left: -10px;
  width: 101vw;
  transform: rotate(-3deg);
  bottom: 500px;
  overflow: hidden;
  padding: 20px 0;

  .marquee,
  .initial-child-container {
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
  }

  .child {
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;

    > {
      flex: 1;
    }
  }
`;
