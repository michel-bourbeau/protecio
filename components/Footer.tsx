import { useTranslation } from 'next-i18next';
import Link from 'next/link';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                    <img
                      src="/images/kairos-bg-black.png"
                      alt="Kairos Technologies S.A"
                      className="no-effect"
                    />
                  </a>
                </div>
                <div className="footer-text">
                  <p>{t('Footer.infos')}</p>
                </div>
              </div>
            </Col>

            <Col lg={2} md={6} sm={12}></Col>
            <Col lg={2} md={6} sm={12}></Col>
            <Col xl={4} lg={4} md={6} sm={12} className="mb-50">
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
            </Col>
          </Row>
          <Row className="copyright-text">
            <Col md={6}>
              <p>
                Kairos Technologies S.A. © {new Date().getFullYear()}{' '}
                - {t('Footer.copyright')}
              </p>
              <p className="avanzatec">
                {t('Footer.createdBy')}
                {` `}
                <Link href={`https://avanzatechnologies.com/`}>
                  <a target="_blank">AvanzaTec</a>
                </Link>
              </p>
            </Col>
          </Row>
        </div>
      </Container>
    </footer>
  );
}
