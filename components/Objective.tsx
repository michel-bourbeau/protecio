import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function Objective() {
  const { t } = useTranslation();

  return (
    <section className="about objective">
      <Container>
        <Row>
          <Col md={4} className="thumb">
            <Image
              src="/images/vision2.jpeg"
              width={1125}
              height={741}
              alt={t('About.photoAlt')}
            />
          </Col>
          <Col md={8}>
            <h2 className="subtitle mt-4">{t('Objective.title')}</h2>
            <div className="p-2">{t('Objective.paragraph1')}</div>
            <div className="p-2">{t('Objective.paragraph2')}</div>
            <div className="p-2">{t('Objective.paragraph3')}</div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
