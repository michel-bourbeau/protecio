import { Trans, useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Vision() {
  const { t } = useTranslation();

  return (
    <section className="vision">
      <Container>
        <Row>
          <Col className="thumb" md={2}>
            <Image
              src="/images/our-mission.webp"
              width={800}
              height={533}
              alt="Image de la mission de Protecio"
              priority
            />
          </Col>
          <Col md={10} className="order-sm-0" data-aos="fade-left">
            <h2 className="subtitle">Mission</h2>
            <p className="medium-text mt-4">
              {t('Vision.description')}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
