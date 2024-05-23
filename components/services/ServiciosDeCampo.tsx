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
              alt={t('About.photoAlt')}
            />
          </Col>
          <Col md={9} className="text-left">
            <h2>Servicios de campo</h2>
            <ul>
              <li>Mantenimiento Correctivo </li>
              <li> Mantenimiento Preventivo (YM-HYM) </li>
              <li> Mantenimiento Predictivo </li>
              <li> Ingeniería de aplicación </li>
              <li> Diagnóstico de estado de componentes </li>
              <li>Sistemas de seguridad </li>
              <li> Suministro de componentes </li>
              <li>
                Instalación de líneas verticales y horizontales.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
