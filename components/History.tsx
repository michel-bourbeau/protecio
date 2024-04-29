import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function History() {
  const { t } = useTranslation();

  return (
    <section className="about history">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h4>{t('History.title')}</h4>
            <div className="row">
              <div className="col-md-6">
                <p>{t('History.description')}</p>
              </div>
              <div className="col-md-6">
                <p>{t('History.paragraph')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
