import { useTranslation } from 'next-i18next';
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
          <Col className="thumb" md={4} data-aos="fade-right">
            <Image
              src="/images/vision3.jpg"
              width={901}
              height={677}
              alt={t('About.photoAlt')}
            />
          </Col>
          <Col md={8} className="order-sm-0">
            <h2 className="subtitle">{t('Vision.title')}</h2>
            <p className="medium-text mt-4">
              Être un acteur de transformation de choix pour les
              startups, les PME et les grandes organisations grâce à
              des produits et services de haute qualité, sécuritaires,
              efficientes et abordable.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
