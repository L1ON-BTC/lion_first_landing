import { PopupButton } from '@typeform/embed-react';
import Marquee from 'react-fast-marquee';
import { useMediaQuery } from 'react-responsive';

import { Icon } from '@/components/Elements/Icon';
import { Head } from '@/components/Head';

import styles from './coming-soon.module.scss';

export const ComingSoon = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 480px)' });

  return (
    <>
      <Head description="L1ON - Coming Soon" />

      <div className={styles.page}>
        <div className={styles.wrapper}>
          <div className={styles.logoWrapper}>
            <Icon
              name="logo"
              width={isTabletOrMobile ? '70px' : '93px'}
              height={isTabletOrMobile ? '70px' : '93px'}
            />
          </div>

          <div className={styles.wordmarkWrapper}>
            <Icon
              name="wordmark"
              width={isTabletOrMobile ? '96px' : '96px'}
              height={isTabletOrMobile ? '27px' : '27px'}
            />
          </div>

          <h3 className={styles.title}>Bitcoin Utility Platform</h3>

          <div className={styles.content}>
            Offering customized solutions for <br /> your project launch
          </div>

          <div className={styles.buttonWrapper}>
            <PopupButton id="Wps1Jn3E" size={60}>
              Apply Project for Launchpad
            </PopupButton>
          </div>

          <p className={styles.follow}>Follow us for updates</p>

          <div className={styles.socialWrapper}>
            <a href="https://twitter.com/L1ON_BTC" target="_blank" rel="noreferrer">
              <Icon name="twitter" bordered width="59px" height="59px" />
            </a>
          </div>
        </div>

        <div className={styles.marqueeWrapper}>
          <Marquee className={styles.marquee} autoFill>
            <div>BRC-721</div>

            <div className="ken">
              <Icon name="logo" width={'23px'} height={'23px'} />
            </div>

            <div>Launchpad</div>

            <div>
              <Icon name="logo" width={'23px'} height={'23px'} />
            </div>

            <div>Ordinals</div>

            <div>
              <Icon name="logo" width={'23px'} height={'23px'} />
            </div>

            <div>BRC-20</div>

            <div>
              <Icon name="logo" width={'23px'} height={'23px'} />
            </div>
          </Marquee>
        </div>
      </div>
    </>
  );
};
