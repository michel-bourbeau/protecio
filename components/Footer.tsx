import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import Image from 'next/image';
import Logo from '@components/svg/logo-color';

import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer id="footer" className="footer-section">
      <Container>
        <div className="footer-content pt-5 pb-5">
          <Row>
            <Col className="col-xl-4 col-lg-4 mb-50">
              <div className="footer-widget">
                <div className="footer-logo">
                  <a
                    href="index.html"
                    className="logo d-flex align-items-center"
                  >
                    <Logo footer />
                  </a>
                </div>
                <div className="footer-text">
                  <p>{t('Footer.infos')}</p>
                </div>
              </div>
            </Col>

            <Col lg={4} md={6} sm={12}></Col>
            <Col xl={4} lg={4} md={6} sm={12} className="mb-50">
              <div className="contact-widget footer-widget mt-4">
                <div className="footer-widget-heading">
                  <h3>{t('Contact.title')}</h3>
                </div>
                <div className="footer-text">
                  <p>
                    <i className="bi bi-telephone-inbound-fill mr-15"></i>
                    (418) 999-9999
                  </p>
                  <p>
                    <i className="bi bi-envelope-fill mr-15"></i>
                    <a
                      href={`mailto:support@protecio.com`}
                      className="link"
                    >
                      support@protecio.com
                    </a>
                  </p>
                </div>
                <div className="footer-social-icon"></div>
              </div>
            </Col>
          </Row>
          <Row className="copyright-text">
            <Col md={6}>
              <p>
                Protecio © {new Date().getFullYear()} -{' '}
                {t('Footer.copyright')}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
