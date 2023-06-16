import { styled } from 'styled-components';

import Button from '../Button';
import Icon from '../Icon';
import Social from '../Social';

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

export const StyledSocial = styled(Social)`
  margin-top: 24px;
`;

export const Title = styled.h3`
  text-align: center;
`;

export const Follow = styled.p`
  text-align: center;
`;
