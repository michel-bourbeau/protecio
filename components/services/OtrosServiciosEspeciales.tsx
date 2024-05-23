import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OtrosServiciosEspeciales() {
  const { t } = useTranslation();

  return (
    <section className="solar-panel">
      <Container>
        <Row>
          <Col md={3} className="text-center mb-4 thumb">
            <Image
              src="/images/projects/project-04.jpg"
              width={838}
              height={620}
              alt="Image Otros servicios especiales"
            />
          </Col>
          <Col md={9} className="text-left">
            <h2>{t('OtrosServiciosEspeciales.title')}</h2>
            <ul>
              <li>{t('OtrosServiciosEspeciales.item1')}</li>
              <li>{t('OtrosServiciosEspeciales.item2')}</li>
              <li>{t('OtrosServiciosEspeciales.item3')}</li>
              <li>{t('OtrosServiciosEspeciales.item4')}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
