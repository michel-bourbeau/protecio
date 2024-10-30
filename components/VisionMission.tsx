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
        {/* <Row>
          <Col className="thumb" md={2}>
            <Image
              src="/images/our-vision.jpg"
              width={800}
              height={533}
              alt="Notre Vison chez Protecio"
            />
          </Col>
          <Col md={10} className="order-sm-0" data-aos="fade-left">
            <h2 className="subtitle">Vision</h2>
            <p className="medium-text mt-4">
              {t('Vision.description')}
            </p>
          </Col>
        </Row> */}
        <Row>
          <Col className="thumb" md={2}>
            <Image
              src="/images/our-mission.webp"
              width={800}
              height={533}
              alt="Notre mission"
            />
          </Col>
          <Col md={10} className="order-sm-0" data-aos="fade-left">
            <h2 className="subtitle">Mission</h2>
            <p className="medium-text mt-4">
              {t('Vision.description')}
            </p>
          </Col>
        </Row>
        {/*  <Row className="mt-5">
          <Col className="thumb" md={2}>
            <Image
              src="/images/usaii-certification.jpg"
              width={600}
              height={600}
              alt="usaii certification"
            />
          </Col>
          <Col md={10} className="order-sm-0" data-aos="fade-left">
            <h2 className="subtitle">
              Solution d’IA – Certifié USAII AI Leader
            </h2>
            <Trans
              i18nKey={t('SolutionIA.services')} // optional -> fallbacks to defaults if not provided
              components={{
                ul: <ul />,
                li: <li />,
              }}
            />
          </Col>
        </Row> */}
      </Container>
    </section>
  );
}
