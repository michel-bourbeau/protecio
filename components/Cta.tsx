import Link from 'next/link';
import { useTranslation } from 'next-i18next';

export default function Cta() {
  const { t } = useTranslation();

  return (
    <section id="call-to-action" className="call-to-action">
      <div
        className="container text-center aos-init aos-animate"
        data-aos="zoom-out"
      >
        <div className="row gy-4">
          <div className="col-lg-12">
            <h3>{t('Cta.title')}</h3>
            <p className="text-medium">{t('Cta.description')}</p>
            <a href="#contact" className="cta-btn">
              {t('Cta.button')}
            </a>
          </div>
        </div>
      </div>
      <div id="contact" />
    </section>
  );
}
