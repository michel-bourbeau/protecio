import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function OffreServices() {
  const { t } = useTranslation();

  return (
    <section className="solution services">
      <Container>
        <Row>
          <Col className="pt-3 pb-5" md={6} data-aos="fade-right">
            <h3 className="subtitle mt-4 mb-4">
              {t('OffreServices.CIO')}
            </h3>
            <Image
              src="/images/cio-virtual.jpg"
              width={800}
              height={532}
              alt={t('OffreServices.CIO')}
            />
          </Col>
          <Col md={6} className="pb-3" data-aos="fade-left">
            <h3 className="subtitle mt-4 mb-4">
              {t('OffreServices.SolutionAI')}
            </h3>
            <Image
              src="/images/solution-ai.jpg"
              width={800}
              height={533}
              alt={t('OffreServices.SolutionAI')}
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
}
