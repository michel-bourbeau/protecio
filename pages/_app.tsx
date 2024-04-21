import { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import Script from 'next/script';

import Layout from '@components/Layout';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import '@styles/style.scss';

function Application({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
      <Script src="/script/main.js" />
    </Layout>
  );
}

export default appWithTranslation(Application);
