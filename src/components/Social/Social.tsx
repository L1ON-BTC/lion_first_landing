import { Discord, Twitter } from '../Icons';
import { Wrapper } from './Social.styles';

const Social = () => {
  return (
    <Wrapper>
      <a href="https://discord.gg/aWm5DfyC" target="_blank" rel="noreferrer">
        <Discord />
      </a>
      <a href="https://twitter.com/L1ON_BTC" target="_blank" rel="noreferrer">
        <Twitter />
      </a>
    </Wrapper>
  );
};

export default Social;
