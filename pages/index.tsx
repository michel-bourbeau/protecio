import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo, RecipeJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import Hero from '@components/Hero';

export const Home = () => {
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
              alt: 'Kairos Technologies - Energía Eólica y Sistemas Solares',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Kairos Technologies S.A.',
        }}
      />
      <Hero />
    </>
  );
};

export default Home;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
