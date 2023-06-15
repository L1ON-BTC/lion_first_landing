import Button from '../Button';
import { Logo, Wordmark } from '../Icons';
import Social from '../Social';
import { Wrapper } from './App.styles';

const App = () => (
  <Wrapper>
    <div>
      <Logo />
    </div>
    <div>
      <Wordmark />
    </div>

    <h3>L1 on Bitcoin</h3>
    <p>
      A new platform to launch BRC-20U+2019s, BRC-721U+2019s and many other utilities
      Bitcoin blockchain
    </p>
    <Button>Coming Soon</Button>
    <p>Follow us for updates</p>
    <Social />
  </Wrapper>
);

export default App;
