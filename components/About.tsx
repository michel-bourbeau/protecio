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
          <Col md={5} className="thumb">
            <Image
              src="/images/kairos-worker-on-wind-turbine.jpeg"
              width={500}
              height={500}
              alt={t('About.photoAlt')}
            />
          </Col>

          <Col md={7}>
            <h4>{t('About.title')}</h4>
            <p className="large-text">{t('About.description')}</p>

            <p>{t('About.paragraph1')}</p>

            <p>{t('About.paragraph2')}</p>

            <p>{t('About.paragraph3')}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
