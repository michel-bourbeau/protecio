import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { NextSeo, RecipeJsonLd } from 'next-seo';
import { useRouter } from 'next/router';

import Hero from '@components/Hero';
import ContactUs from '@components/Contact';

export const Contact = () => {
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
        canonical={`https://protecio/${useLocal}`}
        openGraph={{
          url: 'https://protecio.com',
          title: t('Metadata.title'),
          description: t('Metadata.description'),
          images: [
            {
              url: 'https://protecio.com/images/banner-opengraph.jpg',
              width: 1200,
              height: 630,
              alt: 'Protecio',
              type: 'image/jpeg',
            },
          ],
          siteName: 'Protecio',
        }}
      />
      <Hero
        title={t('Contact.hero.title')}
        description={t('Contact.hero.description')}
        id="contactUs"
        isPage
      />
      <ContactUs />
    </>
  );
};

export default Contact;

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}
