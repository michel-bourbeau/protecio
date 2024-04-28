import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <div className="container">
        <div className="row ">
          <div className="col-md-5 thumb">
            <Image
              src="/images/kairos-worker-on-wind-turbine.jpeg"
              width={500}
              height={500}
              alt={t('About.photoAlt')}
            />
          </div>

          <div className="col-md-7">
            <h4>{t('About.title')}</h4>
            <h1>{t('About.description')}</h1>

            <p>{t('About.paragraph1')}</p>

            <p>{t('About.paragraph2')}</p>

            <p>{t('About.paragraph3')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
