import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Objective() {
  const { t } = useTranslation();

  return (
    <section className="about objective">
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
            <h4>{t('Objective.title')}</h4>
            <ul>
              <li>{t('Objective.paragraph1')}</li>
              <li>{t('Objective.paragraph2')}</li>
              <li>{t('Objective.paragraph3')}</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
