'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Mission() {
  const { t } = useTranslation();

  return (
    <section className="mission">
      <Container>
        <Row>
          <Col md={7}>
            <h2 className="subtitle">{t('Mission.title')}</h2>
            <p className="medium-text mt-4">
              {t('Mission.description')}
            </p>
          </Col>
          <Col
            className="thumb hide-mobile"
            md={5}
            data-aos="fade-left"
          >
            <Image
              src="/images/kairos-technologies-mission.jpg"
              width={900}
              height={550}
              alt={`Kairos Technologies ${t('Mission.title')}`}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
