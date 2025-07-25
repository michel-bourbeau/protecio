import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import Hero from '@components/Hero';
import Cta from '@components/Cta';
import VisionMission from '@components/VisionMission';
import Solution_Ai from '@components/Solution_Ai';
import SolutionProtectionRenseignementPersonnel from '@components/SolutionProtectionRenseignementPersonnel';
import Services from '@components/Services';
import NosClient from '@components/NosClient';
import NosPartenaires from '@components/NosPartenaires';

export const Partenaires = () => {
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
        canonical={`https://protecio.com/${useLocal}`}
      />
      <Hero
        title={t('Partenaires.hero.title')}
        description={t('Partenaires.hero.description')}
        id="contactUs"
        isPage
      />
      <Services />
      <SolutionProtectionRenseignementPersonnel />
      <VisionMission />
      <Solution_Ai />
      {/* <NosClient /> */}
      <Cta />
      <NosPartenaires />
    </>
  );
};

export default Partenaires;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
