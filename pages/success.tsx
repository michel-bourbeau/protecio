import { Trans, useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export const Success = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const useLocal = () => {
    if (router.locale === 'en') return '';
    else return router.locale;
  };

  return (
    <>
      <NextSeo
        title={t('Metadata.title')}
        description={t('Metadata.description')}
        canonical={`https://avanzatechnologies.com/${useLocal}`}
        openGraph={{
          url: 'https://avanzatechnologies.com/',
          title: t('Metadata.title'),
          description: t('Metadata.description'),
          images: [
            {
              url: 'https://avanzatechnologies.com/images/banner-opengraph.jpg',
              width: 800,
              height: 600,
              alt: 'Kairos Technologies S.A. - Web Development',
              type: 'image/jpeg',
            },
          ],
          siteName: 'AvanzaTec',
        }}
      />
      <div className="breadcrumbs">
        <div className="page-header d-flex align-items-center">
          <div className="container position-relative">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-6 text-center">
                <h2>{t('Success.title')}</h2>
                <p>{t('Success.description')}</p>
                <p>{t('Success.infos')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
        'contact',
      ])),
    },
  };
}
