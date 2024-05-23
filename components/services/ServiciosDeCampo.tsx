import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ServiciosDeCampo() {
  const { t } = useTranslation();

  return (
    <section className="solar-panel">
      <Container>
        <Row>
          <Col md={3} className="text-center mb-4 thumb">
            <Image
              src="/images/projects/project-01.jpg"
              width={838}
              height={620}
              alt="Image Servicios de campo"
            />
          </Col>
          <Col md={9} className="text-left">
            <h2>{t('ServiciosDeCampo.title')}</h2>
            <ul>
              <li>{t('ServiciosDeCampo.item1')}</li>
              <li>{t('ServiciosDeCampo.item2')}</li>
              <li>{t('ServiciosDeCampo.item3')}</li>
              <li>{t('ServiciosDeCampo.item4')}</li>
              <li>{t('ServiciosDeCampo.item5')}</li>
              <li>{t('ServiciosDeCampo.item6')}</li>
              <li>{t('ServiciosDeCampo.item7')}</li>
              <li>{t('ServiciosDeCampo.item8')}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
