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
            <h4>{t('Mission.title')}</h4>
            <h1>{t('Mission.description')}</h1>
          </Col>
          <Col className="thumb" md={4}>
            <Image
              src="/images/blog-thumb-02.jpg"
              width={400}
              height={400}
              alt={t('About.photoAlt')}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
