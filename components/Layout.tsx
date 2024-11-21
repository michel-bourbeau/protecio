import { GoogleAnalytics } from '@next/third-parties/google';
import { ReactNode } from 'react';

import BootstrapClient from '@components/utils/BootstrapClient';
import { AOSInit } from '@components/utils/AosInit';

import Header from '@components/Header';
import Footer from '@components/Footer';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="body-wrap aos-init aos-animate">
      <BootstrapClient />
      <AOSInit />
      <Header />
      {children}
      <Footer />
      <GoogleAnalytics gaId="G-737VPM5DPD" />
    </div>
  );
};

export default Layout;
