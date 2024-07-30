import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import Hero from '@components/Hero';
import ServiciosDeCampo from '@components/services/ServiciosDeCampo';
import MantenimientoPreventivo from '@components/services/MantenimientoPreventivo';
import OtrosServiciosEspeciales from '@components/services/OtrosServiciosEspeciales';

export const Services = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const useLocal = () => {
    if (router.locale === 'en') return '';
    else return router.locale;
  };
  return (
    <>
      <NextSeo
        additionalMetaTags={[
          {
            property: 'geo.region',
            content: `{${t('Metadata.geoRegion')}}`,
          },
        ]}
        title={t('Metadata.title')}
        description={t('Metadata.description')}
        canonical={`https://kairos-technologies.net/${useLocal}`}
        openGraph={{
          url: 'https://kairos-technologies.net',
          title: t('Metadata.title'),
          description: t('Metadata.description'),
          images: [
            {
              url: 'https://kairos-technologies.net/images/banner-opengraph.jpg',
              width: 1200,
              height: 630,
              alt: 'Protecio - Energía Eólica y Sistemas Solares',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Protecio',
        }}
      />
      <Hero
        title={t('Services.hero.title')}
        description={t('Services.hero.description')}
        id="ourServicesPage"
        isPage
      />
      <ServiciosDeCampo />
      <MantenimientoPreventivo />
      <OtrosServiciosEspeciales />
    </>
  );
};

export default Services;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
