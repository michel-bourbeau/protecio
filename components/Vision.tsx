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
          <Col className="thumb" md={4}>
            <Image
              src="/images/vision3.jpg"
              width={901}
              height={677}
              alt={t('About.photoAlt')}
            />
          </Col>
          <Col md={8}>
            <h2 className="subtitle mt-2">{t('Vision.title')}</h2>
            <p className="medium-text mt-4">
              {t('Vision.description')}
            </p>
            <p className="medium-text mt-4">
              {t('Vision.paragraph')}
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
