import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Mission() {
  const { t } = useTranslation();

  return (
    <section className="about mission">
      <Container>
        <Row>
          <Col md={8}>
            <h2 className="subtitle mt-2">{t('Mission.title')}</h2>
            <p className="mt-4 mb-5">{t('Mission.description')}</p>
          </Col>
          <Col className="thumb" md={4}>
            <Image
              src="/images/wind-turbine.jpeg"
              width={981}
              height={664}
              alt={t('About.photoAlt')}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
