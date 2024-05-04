'use client';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export default function Cta() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section id="call-to-action" className="call-to-action">
      <div
        className="container text-left align-items-center"
        data-aos="zoom-out"
      >
        <div className="row gy-4">
          <div className="col-lg-9">
            <h3>{t('Cta.title')}</h3>
            {/*  <p>{t('Cta.description')}</p> */}
          </div>
          <div className="col-lg-3 d-flex align-items-center">
            <a href={`/${router.locale}/contact`} className="btn">
              {t('Cta.button')}
            </a>
          </div>
        </div>
      </div>
      <div id="contact" />
    </section>
  );
}
