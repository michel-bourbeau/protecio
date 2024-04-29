import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Mission() {
  const { t } = useTranslation();

  return (
    <section className="about mission">
      <div className="container">
        <div className="row ">
          <div className="col-md-8">
            <h4>{t('Mission.title')}</h4>
            <h1>{t('Mission.description')}</h1>
          </div>
          <div className="col-md-4 thumb">
            <Image
              src="/images/blog-thumb-02.jpg"
              width={400}
              height={400}
              alt={t('About.photoAlt')}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
