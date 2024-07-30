'use client';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSelector from '@components/LanguageSelector';
import Link from 'next/link';
import Image from 'next/image';

import { Button, Container, Row, Col } from 'react-bootstrap';
import Logo from '@components/svg/logo-color';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <header id="header" className="header align-items-center sticked">
      <div className="header-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <p>
            <span className="telephone">
              <FontAwesomeIcon
                icon={faPhone}
                className="fa-phone"
                style={{ marginRight: '8px', maxWidth: '16px' }}
              ></FontAwesomeIcon>
              +505 8895 6347
            </span>
          </p>
          <LanguageSelector />
        </div>
      </div>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <div className="logo-container d-flex">
          <Link href="/" locale={`${router.locale}`}>
            <a className="logo align-items-center">
              <span className="white-logo">
                <Logo />
              </span>

              <span className="black-logo">
                <Image
                  src="/images/Prototype-01.svg"
                  width={481}
                  height={128}
                  alt={`Kairos Technologies S.A`}
                  className="no-effect"
                />
              </span>
            </a>
          </Link>
        </div>
        <nav id="navbar" className="navbar d-flex">
          <ul>
            <li>
              <a href={`/${router.locale}/services`} className="">
                {t('Services.title')}
              </a>
            </li>

            <li className="footer-social-icon htop-menu-s">
              <a
                href="https://www.facebook.com/profile.php?id=100092708182385"
                target="_blank"
                aria-label={t('Index.facebookIcon')}
              >
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <Button
                variant="primary"
                href={`/${router.locale}/contact`}
                className="hide-on-mobile d-flex btn-lg"
              >
                {t('Cta.button')}
              </Button>
            </li>
          </ul>
        </nav>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
}
