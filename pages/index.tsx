import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Hero from '@components/Hero';
import Cta from '@components/Cta';
import VisionMission from '@components/VisionMission';
import Mission from '@components/Mission';
import Solution_Ai from '@components/Solution_Ai';
import SolutionProtectionRenseignementPersonnel from '@components/SolutionProtectionRenseignementPersonnel';
import SolutionIA from '@components/SolutionIA';
import Services from '@components/Services';
import NosClient from '@components/NosClient';
import NosPartenaires from '@components/NosPartenaires';

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
      <Services />
      <SolutionProtectionRenseignementPersonnel />
      <VisionMission />
      <Solution_Ai />
      <NosClient />
      <Cta />
      <NosPartenaires />
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
