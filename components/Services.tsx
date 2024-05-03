'use client';

import { useTranslation } from 'next-i18next';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="section services">
      <div className="top-icon-box">
        <div className="container position-relative">
          <div className="section-header">
            <h2>{t('Services.title')}</h2>
            <p className="text-medium">{t('Services.description')}</p>
            <p className="construction">{t('UnderConstruction')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
