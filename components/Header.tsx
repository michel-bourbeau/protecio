'use client';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSelector from '@components/LanguageSelector';
import Link from 'next/link';

import { Button } from 'react-bootstrap';
import Logo from '@components/svg/logo-color';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <header id="header" className="header align-items-center sticked">
      <div className="header-top">
        <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
          <p>
            <a
              href={`mailto:info@protecio.com`}
              className="link"
              target="_blank"
            >
              <span className="telephone">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="fa-phone"
                  style={{ marginRight: '8px', maxWidth: '16px' }}
                ></FontAwesomeIcon>
                info@protecio.com
              </span>
            </a>
          </p>
          <LanguageSelector />
        </div>
      </div>
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <div className="logo-container d-flex">
          <Link href="/" locale={`${router.locale}`}>
            <a className="logo align-items-center">
              <span className="white-logo">
                <Logo context={t('Logo')} />
              </span>
            </a>
          </Link>
        </div>
        <nav id="navbar" className="navbar d-flex">
          <ul>
            <li>
              <a href={`/${router.locale}/services`}>
                {t('Services.title')}
              </a>
            </li>

            <li className="footer-social-icon htop-menu-s">
              {/*               <a
                href="#"
                target="_blank"
                aria-label={t('Index.facebookIcon')}
              >
                <i className="fa fa-facebook-f"></i>
              </a> */}
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
