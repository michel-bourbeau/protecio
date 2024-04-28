import { useTranslation } from 'next-i18next';
import Link from 'next/link';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer-section">
      <div className="container">
        <div className="footer-content pt-5 pb-5">
          <div className="row">
            <div className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center"
                  >
                    <img
                      src="/images/kairos-bg-black.png"
                      alt="Kairos Technologies S.A"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>{t('Footer.infos')}</p>
                </div>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 col-sm-12 footer-column"></div>
            <div className="col-lg-2 col-md-6 col-sm-12 footer-column"></div>
            <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
              <div className="contact-widget footer-widget mt-4">
                <div className="footer-widget-heading">
                  <h3>{t('Contact.title')}</h3>
                </div>
                <div className="footer-text">
                  <p>
                    <i className="bi bi-telephone-inbound-fill mr-15"></i>
                    +505 8895 6347
                  </p>
                  <p>
                    <i className="bi bi-telephone-inbound-fill mr-15"></i>
                    +5055 82576611
                  </p>
                  <p>
                    <i className="bi bi-telephone-inbound-fill mr-15"></i>
                    +505 8399 7398
                  </p>
                  <p>
                    <i className="bi bi-envelope-fill mr-15"></i>
                    <a
                      href={`mailto:kairostechnologiesnic@hotmail.com`}
                      className="link"
                    >
                      kairostechnologiesnic@hotmail.com
                    </a>
                  </p>
                </div>
                <div className="footer-social-icon">
                  <a
                    href="https://www.facebook.com/profile.php?id=100092708182385"
                    target="_blank"
                  >
                    <i className="fa fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100092708182385"
                    target="_blank"
                    className="link"
                  >
                    Visit Us on Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-6 col-lg-6 text-left text-lg-left">
              <div className="copyright-text">
                <p>
                  Kairos Technologies S.A. ©{' '}
                  {new Date().getFullYear()} - {t('Footer.copyright')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
