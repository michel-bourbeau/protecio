import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Vision() {
  const { t } = useTranslation();

  return (
    <section className="about vision">
      <Container>
        <Row>
          <Col className="thumb" md={3}>
            <Image
              src="/images/vision.jpg"
              width={250}
              height={250}
              alt={t('About.photoAlt')}
            />
          </Col>
          <Col md={9}>
            <h4>{t('Vision.title')}</h4>
            <p className="large-text">{t('Vision.description')}</p>
            <p>{t('Vision.paragraph')}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
