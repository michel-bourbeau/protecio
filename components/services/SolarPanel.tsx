import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SolarPanel() {
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
            <h2>Mantenimiento Preventivo</h2>
            <ul>
              <li>
                {' '}
                Limpieza general (Nacelle, Yaw Deg,Hub,secciones
                tubulares,elevadores,sótanos (Pozo),etc.){' '}
              </li>
              <li> Cambios de filtros </li>
              <li>
                {' '}
                Verificación de alineación entre caja multiplicadora y
                generador{' '}
              </li>
              <li> Chequeo de niveles de aceite y grasa </li>
              <li>
                {' '}
                verificación de presión de acumuladores de aceite
                hidráulico{' '}
              </li>
              <li> verificación de funcionamiento de ascensor </li>
              <li>
                {' '}
                verificación de puntos de anclajes internos y externos
                en nacelle.{' '}
              </li>
              <li> Bombas </li>
              <li>Sistemas de lubricación </li>
              <li> Conexiones / Mangueras </li>
              <li>Sistemas Hidráulicos </li>
              <li> Acumuladores de presión </li>
              <li>Generadores </li>
              <li> Cajas Multiplicadoras </li>
              <li> Sistema de frenado </li>
              <li> Yaw drive</li>
            </ul>
          </Col>
        </Row>
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
