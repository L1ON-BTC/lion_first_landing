import { styled } from 'styled-components';

import Button from '@/components/Button';
import Icon from '@/components/Icon';

export const Wrapper = styled.div`
  max-width: 360px;
  margin: 0 20px;
  margin-top: 64px;

  @media (max-width: 480px) {
    margin: 23px;
  }
`;

export const WordmarkWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  text-align: center;

  @media (max-width: 480px) {
    margin-bottom: 0px;
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

export const Logo = styled(Icon)`
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: rotate(-9deg) scale(1.02);
  }

  @media (max-width: 480px) {
    &:hover {
      transform: none;
    }
  }
`;

export const Content = styled.div`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 40px 0px;
`;

export const StyledButton = styled(Button)``;

export const Title = styled.h3`
  text-align: center;
`;

export const Follow = styled.p`
  text-align: center;
`;

export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 24px;

  a {
    margin: 0 8px;
  }
`;

export const SubmitWrapper = styled.div`
  text-align: center;

  button {
    margin-top: 20px;
    background: none;
    border: none;
    padding: 0;
    color: var(--primary);
    cursor: pointer;
    font-family: 'Montserrat', sans-serif;
  }
`;
