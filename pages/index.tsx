import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import Hero from '@components/Hero';
import Cta from '@components/Cta';
import About from '@components/About';
import Vision from '@components/Vision';
import Mission from '@components/Mission';
import SolutionProtectionRenseignementPersonnel from '@components/SolutionProtectionRenseignementPersonnel';
import SolutionIA from '@components/SolutionIA';
import OffreServices from '@components/OffreServices';
import NosClient from '@components/NosClient';
import Objective from '@components/Objective';
import Valors from '@components/Valors';

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
        canonical={`https://protecio.com/${useLocal}`}
        openGraph={{
          url: 'https://protecio.com',
          title: t('Metadata.title'),
          description: t('Metadata.description'),
          images: [
            {
              url: 'https://protecio.com/images/banner-opengraph.jpg',
              width: 1200,
              height: 630,
              alt: 'Protecio - Energía Eólica y Sistemas Solares',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Protecio',
        }}
      />
      <Hero button />
      <OffreServices />
      <SolutionIA />
      <SolutionProtectionRenseignementPersonnel />
      <Vision />
      <Mission />
      <NosClient />

      <Cta />
      {/*      
      
      <Valors />
      <Objective />
      <History />
       */}
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
