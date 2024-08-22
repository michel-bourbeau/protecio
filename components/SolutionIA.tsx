import { Trans, useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SolutionIA() {
  const { t } = useTranslation();

  return (
    <section className="solution ia">
      <Container>
        <Row className="d-flex">
          <Col md={3} className="pb-4">
            <Image
              src="/images/usaii-certification.jpg"
              width={600}
              height={600}
              alt="usaii certification"
            />
          </Col>
          <Col md={9} className="order-sm-0" data-aos="fade-left">
            <h2 className="subtitle mb-4">{t('SolutionIA.title')}</h2>
            <Trans
              i18nKey={t('SolutionIA.services')} // optional -> fallbacks to defaults if not provided
              components={{
                ul: <ul />,
                li: <li />,
              }}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
