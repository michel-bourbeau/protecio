import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo, RecipeJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import Hero from '@components/Hero';
import Cta from '@components/Cta';
// import Services from '@components/Services';
import About from '@components/About';
import Vision from '@components/Vision';
import Mission from '@components/Mission';
import History from '@components/History';
import Objective from '@components/Objective';

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
        additionalMetaTags={[
          {
            property: 'geo.region',
            content: `{${t('Metadata.geoRegion')}}`,
          },
          {
            property: 'geo.placename',
            content: `{${t('Metadata.placename')}}`,
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
              alt: 'Kairos Technologies - Energía Eólica y Sistemas Solares',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Kairos Technologies S.A.',
        }}
      />
      <Hero />
      <About />
      <Mission />
      <Vision />
      <History />
      <Objective />
      {/*       
      <Services />*/}
      <Cta />
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
