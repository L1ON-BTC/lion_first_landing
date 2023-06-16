import Icon from '../Icon';
import { Wrapper } from './Social.styles';

type Props = {
  className?: string;
};

const Social = ({ className }: Props) => {
  return (
    <Wrapper className={className}>
      <a href="https://discord.gg/aWm5DfyC" target="_blank" rel="noreferrer">
        <Icon name="Discord" bordered />
      </a>
      <a href="https://twitter.com/L1ON_BTC" target="_blank" rel="noreferrer">
        <Icon name="twitter" bordered />
      </a>
    </Wrapper>
  );
};

export default Social;
