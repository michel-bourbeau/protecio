import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Vision() {
  const { t } = useTranslation();

  return (
    <section className="about vision">
      <div className="container">
        <div className="row ">
          <div className="col-md-3 thumb">
            <Image
              src="/images/vision.jpg"
              width={250}
              height={250}
              alt={t('About.photoAlt')}
            />
          </div>
          <div className="col-md-9">
            <h4>{t('Vision.title')}</h4>
            <h1>{t('Vision.description')}</h1>
            <p>{t('Vision.paragraph')}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
