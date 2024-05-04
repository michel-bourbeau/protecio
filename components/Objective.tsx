'use client';

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Objective() {
  const { t } = useTranslation();

  return (
    <section className="objective">
      <Container>
        <Row>
          <Col md={4} className="thumb" data-aos="fade-right">
            <Image
              src="/images/vision2.jpeg"
              width={1125}
              height={741}
              alt={t('About.photoAlt')}
            />
          </Col>
          <Col md={8} data-aos="zoom-out">
            <h2 className="subtitle">{t('Objective.title')}</h2>
            <p>{t('Objective.paragraph1')}</p>
            <p>{t('Objective.paragraph2')}</p>
            <p>{t('Objective.paragraph3')}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
