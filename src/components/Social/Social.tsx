import { useMediaQuery } from 'react-responsive';

import Icon from '../Icon';
import { Wrapper } from './Social.styles';

type Props = {
  className?: string;
};

const Social = ({ className }: Props) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <Wrapper className={className}>
      <a href="https://discord.gg/aWm5DfyC" target="_blank" rel="noreferrer">
        <Icon
          name="Discord"
          bordered
          width={isTabletOrMobile ? '21px' : '21px'}
          height={isTabletOrMobile ? '16px' : '16px'}
        />
      </a>
      <a href="https://twitter.com/L1ON_BTC" target="_blank" rel="noreferrer">
        <Icon
          name="twitter"
          bordered
          width={isTabletOrMobile ? '96px' : '96px'}
          height={isTabletOrMobile ? '27px' : '27px'}
        />
      </a>
    </Wrapper>
  );
};

export default Social;
