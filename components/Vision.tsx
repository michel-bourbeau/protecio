import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Vision() {
  const { t } = useTranslation();

  return (
    <section className="vision" id="notre-mission-et-vision">
      <Container>
        <Row>
          <Col className="thumb" md={4}>
            <Image
              src="/images/our-vision.jpg"
              width={800}
              height={533}
              alt="Notre Vison chez Protecio"
            />
          </Col>
          <Col md={8} className="order-sm-0" data-aos="fade-left">
            <h2 className="subtitle">{t('Vision.title')}</h2>
            <p className="medium-text mt-4">
              {t('Vision.description')}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
