import { Wrapper } from './Icon.styled';
import Discord from './Icons/Discord';
import Logo from './Icons/Logo';
import Twitter from './Icons/Twitter';
import Wordmark from './Icons/Wordmark';

type Props = {
  name: string;
  className?: string;
  bordered?: boolean;
};

const Icon = ({ className, name, bordered }: Props) => {
  const sanitizedName = name.toLowerCase();

  const renderComponent = () => {
    switch (sanitizedName) {
      case 'logo':
        return <Logo />;
      case 'discord':
        return <Discord />;
      case 'twitter':
        return <Twitter />;
      case 'wordmark':
        return <Wordmark />;
      default:
        return null;
    }
  };

  return (
    <Wrapper className={className} bordered={bordered}>
      {renderComponent()}
    </Wrapper>
  );
};

export default Icon;
