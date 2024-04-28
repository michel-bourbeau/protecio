import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Services() {
  const { t } = useTranslation();

  return (
    <section className="section services">
      <div className="top-icon-box position-relative">
        <div className="container position-relative">
          <div className="section-header">
            <h2>{t('Services.title')}</h2>
            <p className="text-medium">{t('Services.description')}</p>
            <p className="construction">
              This page is under construction
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
