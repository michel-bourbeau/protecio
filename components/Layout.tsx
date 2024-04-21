import { GoogleAnalytics } from '@next/third-parties/google';
import { ReactNode } from 'react';

import BootstrapClient from '@components/BootstrapClient';
import { AOSInit } from '@components/AosInit';

import Header from '@components/Header';
import Footer from '@components/Footer';

export type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="body-wrap">
      <BootstrapClient />
      <AOSInit />
      <Header />
      {children}
      <Footer />
      <GoogleAnalytics gaId="G-28VHG50ZPJ" />
    </div>
  );
};

export default Layout;
