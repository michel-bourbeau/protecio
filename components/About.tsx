import { useTranslation } from 'next-i18next';
import Image from 'next/image';
// import Map from '@components/Map';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function About() {
  const { t } = useTranslation();

  return (
    <section className="about">
      <Container>
        <Row>
          <Col md={4} className="thumb" data-aos="fade-right">
            <Image
              src="/images/stock-photo-businessman-insurance-and-protection-concept-businessman-holding-car-model-in-hand-travel-family-2319967021.jpg"
              width={1500}
              height={1101}
              alt={t('About.photoAlt')}
            />
          </Col>

          <Col md={8}>
            <h2 className="subtitle">{t('About.title')}</h2>

            <p className="large-text mt-4">
              {t('About.description')}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
