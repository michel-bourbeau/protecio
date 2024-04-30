'use client';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSelector from '@components/LanguageSelector';
import Link from 'next/link';

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
                style={{ marginRight: '8px' }}
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
              <img
                src="/images/kairos-bg-white.png"
                alt="Kairos Technologies S.A."
                className="white-logo"
              />
              <img
                src="/images/kairos-bg-black.png"
                alt="Kairos Technologies S.A."
                className="black-logo"
              />
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
              >
                <i className="fa fa-facebook-f"></i>
              </a>
            </li>
            <li>
              <a
                href={`/${router.locale}/contact`}
                className="btn-get-started hide-on-mobile d-flex"
              >
                {t('Cta.button')}
              </a>
            </li>
          </ul>
        </nav>
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
}
