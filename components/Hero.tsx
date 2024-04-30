import { Trans, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
// import Particles from '@components/Particles';

export default function Hero() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section id="hero" className="hero sticked-header-offset">
      <div className="container position-relative">
        <div className="row gy-5">
          <div className="dark-bg order-lg-1 d-flex flex-column justify-content-start text-left caption">
            <h2>
              <Trans
                i18nKey="Hero.title" // optional -> fallbacks to defaults if not provided
                components={{
                  guidelines: <span />,
                  br: <br />,
                }}
              />
              <span className="circle"></span>
            </h2>
            <p>{t('Hero.description')}</p>
            <div className="d-flex justify-content-start">
              <a
                href={`/${router.locale}/contact`}
                className="cta-btn"
              >
                {t('Cta.button')}
              </a>
            </div>
          </div>
        </div>
      </div>
      <span id="services"></span>
      {/* <Particles /> */}
    </section>
  );
}
