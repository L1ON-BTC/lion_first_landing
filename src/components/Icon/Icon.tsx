import { Wrapper } from './Icon.styled';
import Discord from './Icons/Discord';
import Logo from './Icons/Logo';
import Twitter from './Icons/Twitter';
import Wordmark from './Icons/Wordmark';

type Props = {
  className?: string;
  bordered?: boolean;
  name: string;
  width?: string;
  height?: string;
};

const Icon = ({ className, bordered, width, name, height }: Props) => {
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
    <Wrapper bordered={bordered} className={className} width={width} height={height}>
      {renderComponent()}
    </Wrapper>
  );
};

export default Icon;
