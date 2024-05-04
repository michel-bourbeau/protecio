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
          <Col md={5} className="thumb" data-aos="fade-right">
            <Image
              src="/images/kairos-worker-on-wind-turbine.jpeg"
              width={807}
              height={816}
              alt={t('About.photoAlt')}
            />
          </Col>

          <Col md={7}>
            <h2 className="subtitle">{t('About.title')}</h2>

            <p className="large-text mt-4">{t('About.paragraph1')}</p>

            <p>{t('About.paragraph2')}</p>

            <p>{t('About.paragraph3')}</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
