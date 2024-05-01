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
          <Col md={3} className="text-center">
            <Image
              src="/images/projects-1.png"
              width={500}
              height={500}
              alt={t('About.photoAlt')}
            />
          </Col>
          <Col md={9} className="text-left">
            <h2>OTROS SERVICIOS ESPECIALES</h2>
            <ul>
              <li>
                {' '}
                Análisis por Termografía a equipos eléctricos y
                térmicos{' '}
              </li>
              <li>
                {' '}
                Mantenimiento Preventivo y correctivo de equipos
                electromecánicos: Cajas reductoras, Motores, Paneles
                Eléctricos, Bancos de transformadores, Equipos
                Mecánicos.{' '}
              </li>
              <li> Soldadura de estructuras </li>
              <li>
                {' '}
                Diseños de sistemas eléctricos de baja y media
                tensión.
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
