'use client';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { Container, Row, Col } from 'react-bootstrap';

export default function Cta() {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <section id="call-to-action" className="call-to-action">
      <Container
        className="container text-left align-items-center"
        data-aos="zoom-out"
      >
        <Row>
          <Col md={8}>
            <h3>{t('Cta.title')}</h3>
            {/*  <p>{t('Cta.description')}</p> */}
          </Col>
          <Col
            md={4}
            className="d-flex justify-content-end d-flex align-items-center"
          >
            <a
              href={`/${router.locale}/contact`}
              className="btn btn-cta"
            >
              {t('Cta.button')}
            </a>
          </Col>
        </Row>
      </Container>
      <div id="contact" />
    </section>
  );
}
