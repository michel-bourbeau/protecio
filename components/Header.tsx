'use client';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import LanguageSelector from '@components/LanguageSelector';
import Link from 'next/link';

export default function Header() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <header
      id="header"
      className="header d-flex align-items-center sticked stikcy-menu"
    >
      <div className="container-fluid container-xl d-flex align-items-center justify-content-between">
        <div className="logo-container d-flex">
          <Link href="/" locale={`${router.locale}`}>
            <a className="logo align-items-center">
              <img
                src="/images/kairos-logo-original.jpg"
                alt="Kairos Technologies S.A."
              />
            </a>
          </Link>
        </div>
        <nav id="navbar" className="navbar d-flex">
          <ul>
            {/* <li>
              <a href={`#services`} className="">
                {t('Services.title')}
              </a>
            </li> */}
            <li>
              <a
                href={`#contact`}
                className="btn-get-started hide-on-mobile d-flex"
              >
                {t('Cta.button')}
              </a>
            </li>
          </ul>
        </nav>
        <LanguageSelector />
        <i className="mobile-nav-toggle mobile-nav-show bi bi-list"></i>
        <i className="mobile-nav-toggle mobile-nav-hide d-none bi bi-x"></i>
      </div>
    </header>
  );
}
