import clsx from 'clsx';

import styles from './icon.module.scss';
import { Discord } from './Icons/Discord';
import { Logo } from './Icons/Logo';
import { Twitter } from './Icons/Twitter';
import { Wordmark } from './Icons/Wordmark';

type Props = {
  className?: string;
  bordered?: boolean | undefined;
  name: string;
  width?: string;
  height?: string;
};

export const Icon = ({ bordered, width, name, height }: Props) => {
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
    <div
      className={clsx(styles.wrapper, bordered && styles.bordered)}
      style={{ height, width }}
    >
      {renderComponent()}
    </div>
  );
};
