import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function MantenimientoPreventivo() {
  const { t } = useTranslation();

  return (
    <section className="alt">
      <Container>
        <Row>
          <Col md={3} className="text-center mb-4 thumb">
            <Image
              src="/images/projects/project-02.jpg"
              width={838}
              height={620}
              alt="Image Mantenimiento Preventivo"
            />
          </Col>
          <Col md={9} className="text-left">
            <h2>{t('MantenimientoPreventivo.title')}</h2>
            <ul>
              <li>{t('MantenimientoPreventivo.item1')}</li>
              <li>{t('MantenimientoPreventivo.item2')}</li>
              <li>{t('MantenimientoPreventivo.item3')}</li>
              <li>{t('MantenimientoPreventivo.item4')}</li>
              <li>{t('MantenimientoPreventivo.item5')}</li>
              <li>{t('MantenimientoPreventivo.item6')}</li>
              <li>{t('MantenimientoPreventivo.item7')}</li>
              <li>{t('MantenimientoPreventivo.item8')}</li>
              <li>{t('MantenimientoPreventivo.item9')}</li>
              <li>{t('MantenimientoPreventivo.item10')}</li>
              <li>{t('MantenimientoPreventivo.item11')}</li>
              <li>{t('MantenimientoPreventivo.item12')}</li>
              <li>{t('MantenimientoPreventivo.item13')}</li>
              <li>{t('MantenimientoPreventivo.item14')}</li>
              <li>{t('MantenimientoPreventivo.item15')}</li>
              <li>{t('MantenimientoPreventivo.item16')}</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
